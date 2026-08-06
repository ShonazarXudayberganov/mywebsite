/* Durbin — demo request handler (Vercel serverless function)
 *
 * The bot token used to sit in script.js, which meant every visitor could
 * read it. It now lives only in this function's environment:
 *
 *   TELEGRAM_BOT_TOKEN   from @BotFather
 *   TELEGRAM_CHAT_ID     the group or channel id, e.g. -1001234567890
 *
 * Set both in Vercel → Project → Settings → Environment Variables.
 * The browser only ever sees POST /api/lead and {ok:true|false}.
 */

const NAME_MAX = 80;
const SCHOOL_MAX = 120;
const PHONE_RE = /^\+998\d{9}$/;

// A soft guard only: serverless instances come and go, so this stops a
// burst from one address on one warm instance, not a distributed flood.
const RATE_WINDOW_MS = 60 * 1000;
const RATE_MAX = 5;
const hits = new Map();

function rateLimited(ip) {
    const now = Date.now();
    const seen = (hits.get(ip) || []).filter(at => now - at < RATE_WINDOW_MS);
    seen.push(now);
    hits.set(ip, seen);

    // Keep the map from growing without bound on a long-lived instance
    if (hits.size > 500) {
        for (const [key, times] of hits) {
            if (!times.some(at => now - at < RATE_WINDOW_MS)) hits.delete(key);
        }
    }
    return seen.length > RATE_MAX;
}

// The message is sent with parse_mode HTML, so anything a visitor typed has
// to be escaped or a name containing a tag would break or inject markup.
function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function readBody(req) {
    if (!req.body) return {};
    if (typeof req.body === 'string') {
        try { return JSON.parse(req.body); } catch (e) { return {}; }
    }
    return req.body;
}

function clean(value, max) {
    return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ ok: false, error: 'method_not_allowed' });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        // Logged for the operator; the visitor is told nothing about why.
        console.error('lead: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is missing');
        return res.status(500).json({ ok: false, error: 'not_configured' });
    }

    const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
    if (rateLimited(ip)) {
        return res.status(429).json({ ok: false, error: 'too_many_requests' });
    }

    const body = readBody(req);

    // Honeypot: a real person never sees this field, so anything in it is a bot.
    // Answer as if it worked, so the bot has no signal to retry differently.
    if (clean(body.company, 200)) {
        return res.status(200).json({ ok: true });
    }

    const name = clean(body.name, NAME_MAX);
    const school = clean(body.school, SCHOOL_MAX);
    const phone = clean(body.phone, 20);

    // The client validates too, but the client is not to be trusted
    if (!name || !school || !PHONE_RE.test(phone)) {
        return res.status(400).json({ ok: false, error: 'invalid_payload' });
    }

    const message =
        '<b>Yangi Lid 🎓</b>\n\n' +
        '👤 <b>Ism:</b> ' + escapeHtml(name) + '\n' +
        '🏫 <b>Maktab:</b> ' + escapeHtml(school) + '\n' +
        '📞 <b>Telefon:</b> ' + escapeHtml(phone) + '\n\n' +
        '<i>Durbin saytidan yuborildi</i>';

    try {
        const response = await fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' })
        });
        const data = await response.json();

        if (!data.ok) {
            // Telegram's reason can name the chat or the token, so it stays in
            // the server log and never travels back to the browser.
            console.error('lead: telegram rejected the message:', data.description);
            return res.status(502).json({ ok: false, error: 'delivery_failed' });
        }

        return res.status(200).json({ ok: true });
    } catch (error) {
        console.error('lead: could not reach telegram:', error.message);
        return res.status(502).json({ ok: false, error: 'delivery_failed' });
    }
};

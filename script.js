/* Durbin — landing behaviour
   Scroll work uses IntersectionObserver only. No scroll listeners. */

document.addEventListener('DOMContentLoaded', () => {

    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function el(tag, cls, text) {
        const node = document.createElement(tag);
        if (cls) node.className = cls;
        if (text != null) node.textContent = text;
        return node;
    }

    // The heading wipe clips an inner line rather than the heading, so the
    // heading keeps a real intersection box. Translation rewrites innerHTML,
    // which drops the wrapper, so this runs again after every swap.
    function wrapHeadings() {
        $$('.rv-h').forEach(heading => {
            const first = heading.firstElementChild;
            if (first && first.classList.contains('rv-line') && heading.childNodes.length === 1) return;
            const line = el('span', 'rv-line');
            while (heading.firstChild) line.appendChild(heading.firstChild);
            heading.appendChild(line);
        });
    }

    /* ───────────────────────── i18n ───────────────────────── */

    const LANGS = ['uz', 'ru', 'en'];
    let currentLang = 'uz';

    try {
        const saved = localStorage.getItem('durbin-lang');
        if (saved && LANGS.includes(saved)) currentLang = saved;
    } catch (e) { /* storage blocked, stay on default */ }

    const dig = (obj, path) => path.split('.').reduce((acc, key) => (acc ? acc[key] : null), obj);
    const t = path => dig(translations[currentLang], path) ?? dig(translations.uz, path);

    function applyLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;

        try { localStorage.setItem('durbin-lang', lang); } catch (e) { /* ignore */ }

        $$('.lang-btn').forEach(btn => {
            const on = btn.dataset.lang === lang;
            btn.classList.toggle('is-active', on);
            btn.setAttribute('aria-checked', String(on));
        });

        const current = $('#langCurrent');
        if (current) current.textContent = lang.toUpperCase();

        $$('[data-i18n]').forEach(node => {
            const value = t(node.getAttribute('data-i18n'));
            if (typeof value !== 'string') return;
            if (value.includes('<')) node.innerHTML = value;
            else node.textContent = value;
        });

        $$('[data-i18n-placeholder]').forEach(node => {
            const value = t(node.getAttribute('data-i18n-placeholder'));
            if (typeof value === 'string') node.setAttribute('placeholder', value);
        });

        // Controls that carry no visible label still need a translated one
        $$('[data-i18n-aria]').forEach(node => {
            const value = t(node.getAttribute('data-i18n-aria'));
            if (typeof value === 'string') node.setAttribute('aria-label', value);
        });

        // The innerHTML swaps above just removed every heading's wipe wrapper
        wrapHeadings();

        buildVizContent();
        buildRoles();
        buildFaq();
        renderModule(activeModule, false);

        const pane = $('.pane.is-active');
        if (pane) runNums(pane);
    }

    /* ──────────────── Language dropdown ───────────────────── */

    const langToggle = $('#langToggle');
    const langMenu = $('#langMenu');

    function closeLang(focusToggle) {
        if (!langMenu || !langMenu.classList.contains('is-open')) return;
        langMenu.classList.remove('is-open');
        langToggle.setAttribute('aria-expanded', 'false');
        if (focusToggle) langToggle.focus();
    }

    if (langToggle && langMenu) {
        langToggle.addEventListener('click', event => {
            event.stopPropagation();
            const open = !langMenu.classList.contains('is-open');
            langMenu.classList.toggle('is-open', open);
            langToggle.setAttribute('aria-expanded', String(open));
            if (open) {
                const active = $('.lang-btn.is-active', langMenu) || $('.lang-btn', langMenu);
                if (active) active.focus();
            }
        });

        // Roving focus so the menu is usable without a pointer
        langMenu.addEventListener('keydown', event => {
            const items = $$('.lang-btn', langMenu);
            const at = items.indexOf(document.activeElement);
            if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                event.preventDefault();
                const step = event.key === 'ArrowDown' ? 1 : -1;
                items[(at + step + items.length) % items.length].focus();
            }
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') closeLang(true);
        });

        document.addEventListener('click', event => {
            if (!langMenu.contains(event.target)) closeLang(false);
        });
    }

    $$('.lang-btn').forEach(btn => btn.addEventListener('click', () => {
        applyLanguage(btn.dataset.lang);
        closeLang(true);
    }));

    /* ───────────────────── Theme ──────────────────────────── */

    // The <head> already resolved the theme before first paint; this only
    // takes over the switching and keeps the browser chrome in step.
    const themeToggle = $('#themeToggle');
    const themeMeta = $('#themeColorMeta');
    const osDark = window.matchMedia('(prefers-color-scheme: dark)');
    const THEME_COLOR = { light: '#0A6A5C', dark: '#071614' };

    function applyTheme(theme, persist) {
        document.documentElement.setAttribute('data-theme', theme);
        if (themeMeta) themeMeta.setAttribute('content', THEME_COLOR[theme]);
        if (themeToggle) themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
        if (persist) {
            try { localStorage.setItem('durbin-theme', theme); } catch (e) { /* ignore */ }
        }
    }

    let storedTheme = null;
    try { storedTheme = localStorage.getItem('durbin-theme'); } catch (e) { /* ignore */ }

    applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light', false);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            storedTheme = next;
            applyTheme(next, true);
        });
    }

    // Follow the OS only while the visitor has not made a choice of their own
    const onOsChange = event => {
        if (storedTheme) return;
        applyTheme(event.matches ? 'dark' : 'light', false);
    };
    if (osDark.addEventListener) osDark.addEventListener('change', onOsChange);
    else if (osDark.addListener) osDark.addListener(onOsChange);

    /* ─────────────────── Number count-up ──────────────────── */

    // Uzbek and Russian group with a thin space and use a decimal comma;
    // Intl falls back to en-US for uz-UZ in some browsers, so format by hand.
    function formatNum(value, dec) {
        const group = currentLang === 'en' ? ',' : ' ';
        const point = currentLang === 'en' ? '.' : ',';
        const [int, frac] = value.toFixed(dec).split('.');
        const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, group);
        return frac ? grouped + point + frac : grouped;
    }

    function animateNum(node) {
        const raw = node.dataset.to || '0';
        const target = parseFloat(raw);
        const dec = (raw.split('.')[1] || '').length;
        const suffix = node.dataset.suffix || '';
        const nf = { format: value => formatNum(value, dec) };

        if (reduce) {
            node.textContent = nf.format(target) + suffix;
            return;
        }

        cancelAnimationFrame(node._raf);
        const duration = 1100;
        let started = null;

        const step = ts => {
            if (started === null) started = ts;
            const p = Math.min(1, (ts - started) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            node.textContent = nf.format(target * eased) + suffix;
            if (p < 1) node._raf = requestAnimationFrame(step);
        };

        node._raf = requestAnimationFrame(step);
    }

    const runNums = root => $$('.num[data-to]', root).forEach(animateNum);

    /* ─────────────── Static viz scaffolding ───────────────── */

    // Bars are numeric, so they only need building once.
    $$('.js-bars').forEach(box => {
        (box.dataset.bars || '').split(',').forEach((h, i) => {
            const bar = el('span');
            bar.style.setProperty('--h', h.trim() + '%');
            bar.style.setProperty('--i', i);
            box.appendChild(bar);
        });
    });

    const WAVE = [22, 48, 34, 76, 58, 92, 41, 67, 30, 84, 52, 71, 26, 60, 88, 44, 73, 35, 62, 96, 50, 28, 68, 39, 81, 55, 33, 70];
    $$('.js-wave').forEach(box => {
        WAVE.forEach((h, i) => {
            const bar = el('span');
            bar.style.setProperty('--h', h + '%');
            bar.style.setProperty('--i', i);
            box.appendChild(bar);
        });
    });

    /* ─────────── Language-dependent viz content ───────────── */

    const SUBJECTS = ['Mat', 'Fiz', 'Kim', 'Eng', 'Bio', 'Geo', 'His', 'Alg'];
    const CLASSES = ['9-A', '9-B', '10-A', '7-B', '11-A'];
    const CHAIN_ICON = { ok: 'ph-check', late: 'ph-clock-countdown', esc: 'ph-arrow-elbow-right-up' };

    function fill(node, builder) {
        if (!node) return;
        node.innerHTML = '';
        builder(node);
    }

    function buildVizContent() {
        const v = t('modules.viz');
        if (!v) return;

        // 01 timetable
        fill($('.js-tt'), box => {
            v.days.forEach(d => box.appendChild(el('span', 'tt-h', d)));
            for (let i = 0; i < 15; i++) {
                const cell = el('span', 'tt-c' + (i === 7 ? ' clash' : ''));
                cell.style.setProperty('--i', i);
                cell.appendChild(el('b', null, SUBJECTS[i % SUBJECTS.length]));
                cell.appendChild(el('em', null, CLASSES[i % CLASSES.length]));
                box.appendChild(cell);
            }
        });

        // 02 funnel
        fill($('.js-funnel'), box => {
            v.funnel.forEach(([label, pct, value], i) => {
                const row = el('div', 'fn-row');
                row.style.setProperty('--i', i);
                row.appendChild(el('span', 'fn-l', label));
                const bar = el('span', 'fn-b');
                bar.style.setProperty('--w', pct + '%');
                bar.appendChild(el('i'));
                row.appendChild(bar);
                row.appendChild(el('b', 'fn-v', String(value)));
                box.appendChild(row);
            });
        });

        // 03 channels
        fill($('.js-chan'), box => {
            v.chan.forEach(([label, pct, value], i) => {
                const row = el('div', 'fn-row');
                row.style.setProperty('--i', i);
                row.appendChild(el('span', 'fn-l', label));
                const bar = el('span', 'fn-b');
                bar.style.setProperty('--w', pct + '%');
                bar.appendChild(el('i'));
                row.appendChild(bar);
                row.appendChild(el('b', 'fn-v', String(value)));
                box.appendChild(row);
            });
        });
        const cpl = $('.js-cpl');
        if (cpl) cpl.dataset.suffix = v.cpl_suffix;

        // 04 debtor rows
        fill($('.js-rows'), box => {
            v.debtors.forEach(([name, cls, sum], i) => {
                const row = el('div', 'row');
                row.style.setProperty('--i', i);
                row.appendChild(el('span', null, name));
                row.appendChild(el('em', null, cls));
                row.appendChild(el('b', null, sum));
                box.appendChild(row);
            });
        });

        // 05 HR labels
        const hrPay = $('.js-hr-pay'); if (hrPay) hrPay.textContent = v.hr_pay;
        const hrTime = $('.js-hr-time'); if (hrTime) hrTime.textContent = v.hr_time;
        const hrLate = $('.js-hr-late'); if (hrLate) hrLate.textContent = v.hr_late;

        // 06 chain
        fill($('.js-chain'), box => {
            v.chain.forEach(([who, what, state], i) => {
                const item = el('li', 'ch ' + state);
                item.style.setProperty('--i', i);
                const dot = el('span', 'ch-dot');
                dot.innerHTML = `<i class="ph ${CHAIN_ICON[state]}" aria-hidden="true"></i>`;
                item.appendChild(dot);
                const body = el('div');
                body.appendChild(el('b', null, who));
                body.appendChild(el('em', null, what));
                item.appendChild(body);
                box.appendChild(item);
            });
        });

        // 07 AI chat
        fill($('.js-chat'), box => {
            box.appendChild(el('p', 'bub me', v.ai_q));
            const typing = el('p', 'bub ai typing');
            typing.innerHTML = '<i></i><i></i><i></i>';
            box.appendChild(typing);
            const out = el('div', 'bub ai out');
            out.appendChild(el('b', null, v.ai_a_t));
            out.appendChild(el('span', null, v.ai_a_b));
            const act = el('span', 'bub-act');
            act.innerHTML = `<i class="ph ph-copy" aria-hidden="true"></i> ${v.ai_copy}` +
                ` <i class="ph ph-paper-plane-tilt" aria-hidden="true"></i> ${v.ai_send}`;
            out.appendChild(act);
            box.appendChild(out);
        });

        // 08 agent alert
        const at = $('.js-agent-t'); if (at) at.textContent = v.agent_t;
        const ad = $('.js-agent-d'); if (ad) ad.textContent = v.agent_d;
        const aa = $('.js-agent-act'); if (aa) aa.textContent = v.agent_act;

        // 09 phone
        const phHead = $('.js-phone-head'); if (phHead) phHead.textContent = v.phone_head;
        const phSave = $('.js-phone-save'); if (phSave) phSave.textContent = v.phone_save;
        fill($('.js-phone'), box => {
            v.phone_rows.forEach(([name, mark], i) => {
                const row = el('div', 'ph-row');
                row.style.setProperty('--i', i);
                row.appendChild(el('span', null, name));
                row.appendChild(el('b', null, String(mark)));
                box.appendChild(row);
            });
        });
        fill($('.js-mob'), box => {
            const icons = ['ph-apple-logo', 'ph-android-logo', 'ph-bell-ringing', 'ph-translate'];
            v.mob_list.forEach((label, i) => {
                const item = el('li');
                item.innerHTML = `<i class="ph ${icons[i]}" aria-hidden="true"></i> ${label}`;
                box.appendChild(item);
            });
        });

        // 10 telegram
        fill($('.js-tg'), box => {
            v.tg_msgs.forEach(([title, body], i) => {
                const msg = el('p', 'tg-msg');
                msg.style.setProperty('--i', i);
                msg.appendChild(el('b', null, title));
                msg.appendChild(document.createTextNode(' ' + body));
                box.appendChild(msg);
            });
        });
        fill($('.js-tg-btns'), box => v.tg_btns.forEach(label => box.appendChild(el('i', null, label))));

        // 11 journey
        fill($('.js-journey'), box => {
            const at = 4;
            v.journey.forEach((label, i) => {
                const stop = el('li', 'jr' + (i < at ? ' done' : i === at ? ' now' : ''));
                stop.style.setProperty('--i', i);
                stop.appendChild(el('span', 'jr-dot'));
                stop.appendChild(el('em', null, label));
                box.appendChild(stop);
            });
        });
        const stAv = $('.js-st-av');
        if (stAv) stAv.textContent = v.st_name.split(' ').map(w => w[0]).join('').slice(0, 2);
        const stName = $('.js-st-name'); if (stName) stName.textContent = v.st_name;
        const stMeta = $('.js-st-meta'); if (stMeta) stMeta.textContent = v.st_meta;
        const stStage = $('.js-st-stage'); if (stStage) stStage.textContent = v.st_stage;

        // 12 toasts
        fill($('.js-toasts'), box => {
            v.toasts.forEach(([icon, title, body], i) => {
                const toast = el('div', 'toast');
                toast.style.setProperty('--i', i);
                toast.innerHTML = `<i class="ph ${icon}" aria-hidden="true"></i>`;
                const wrap = el('div');
                wrap.appendChild(el('b', null, title));
                wrap.appendChild(el('em', null, body));
                toast.appendChild(wrap);
                box.appendChild(toast);
            });
        });
    }

    /* ─────────────────────── Roles ────────────────────────── */

    // Icons and access levels are the same in every language, so they live
    // here; only the wording comes from the translations.
    const ROLE_ICONS = {
        founder: 'crown-simple',
        director: 'briefcase',
        academic: 'books',
        classlead: 'user-focus',
        teacher: 'chalkboard-teacher',
        psych: 'heartbeat',
        admissions: 'target',
        marketer: 'megaphone-simple',
        finance: 'wallet',
        hr: 'identification-badge',
        parent: 'users-three',
        student: 'student'
    };

    // f = full, o = own records only, n = no access. Anything not listed is n,
    // which is the safe default for a permission table.
    const ROLE_ACCESS = {
        founder: { lms: 'f', crm: 'f', marketing: 'f', erp: 'f', hr: 'f', sop: 'f', ai: 'f', agents: 'f', mobile: 'f', telegram: 'f', students: 'f', parents: 'f' },
        director: { lms: 'f', crm: 'f', marketing: 'o', erp: 'o', hr: 'f', sop: 'f', ai: 'f', agents: 'f', mobile: 'f', telegram: 'f', students: 'f', parents: 'f' },
        academic: { lms: 'f', erp: 'n', hr: 'o', sop: 'f', ai: 'f', agents: 'o', mobile: 'f', telegram: 'o', students: 'f', parents: 'o' },
        classlead: { lms: 'o', sop: 'o', ai: 'o', mobile: 'f', telegram: 'o', students: 'o', parents: 'o' },
        teacher: { lms: 'o', sop: 'o', ai: 'o', mobile: 'f', students: 'o', parents: 'o' },
        psych: { sop: 'o', ai: 'o', mobile: 'f', students: 'o', parents: 'o' },
        admissions: { crm: 'f', marketing: 'o', erp: 'o', sop: 'o', ai: 'f', agents: 'o', mobile: 'f', telegram: 'f', students: 'o', parents: 'o' },
        marketer: { crm: 'o', marketing: 'f', sop: 'o', ai: 'f', agents: 'o', telegram: 'o' },
        finance: { crm: 'o', erp: 'f', hr: 'o', sop: 'o', ai: 'o', agents: 'o', mobile: 'f', telegram: 'o', students: 'o', parents: 'o' },
        hr: { erp: 'o', hr: 'f', sop: 'f', ai: 'o', agents: 'o', mobile: 'f', telegram: 'o' },
        parent: { lms: 'o', erp: 'o', mobile: 'f', telegram: 'f', students: 'o', parents: 'o' },
        student: { lms: 'o', mobile: 'f', students: 'o' }
    };

    const ROLE_ORDER = Object.keys(ROLE_ICONS);
    const LEVEL_ICON = { f: 'check-circle', o: 'eye', n: 'lock-simple' };

    const roleTabs = $('#roleTabs');
    const rolePanels = $('#rolePanels');
    let activeRole = ROLE_ORDER[0];

    function buildRoles() {
        if (!roleTabs || !rolePanels) return;
        const data = t('roles');
        if (!data || !data.items) return;

        roleTabs.innerHTML = '';
        rolePanels.innerHTML = '';

        ROLE_ORDER.forEach(key => {
            const role = data.items[key];
            if (!role) return;
            const on = key === activeRole;

            const tab = el('button', 'tab-btn' + (on ? ' is-active' : ''));
            tab.type = 'button';
            tab.dataset.role = key;
            tab.setAttribute('role', 'tab');
            tab.setAttribute('aria-selected', String(on));
            tab.setAttribute('aria-controls', 'role-' + key);
            tab.innerHTML = '<i class="ph ph-' + ROLE_ICONS[key] + '" aria-hidden="true"></i>';
            tab.appendChild(el('span', null, role.name));
            roleTabs.appendChild(tab);

            const pane = el('div', 'pane' + (on ? ' is-active' : ''));
            pane.id = 'role-' + key;
            pane.setAttribute('role', 'tabpanel');

            const copy = el('div', 'pane-copy');
            copy.appendChild(el('h3', null, (data.sees || '{role}').replace('{role}', role.name)));
            const list = el('ul');
            role.points.forEach(point => list.appendChild(el('li', null, point)));
            copy.appendChild(list);
            pane.appendChild(copy);
            pane.appendChild(buildAccessMap(key, data));

            rolePanels.appendChild(pane);
        });
    }

    // The section's claim is about permissions, so the panel shows the actual
    // permission table: every module, and what this position may do with it.
    function buildAccessMap(key, data) {
        const grant = ROLE_ACCESS[key] || {};
        const map = el('figure', 'amap');
        map.appendChild(el('figcaption', 'amap-head', data.access));

        const grid = el('div', 'amap-grid');
        MODULE_ORDER.forEach((mod, i) => {
            const level = grant[mod] || 'n';
            const cell = el('div', 'amap-cell is-' + level);
            cell.dataset.mod = mod;
            cell.style.setProperty('--i', i);
            cell.innerHTML = '<i class="ph ph-' + LEVEL_ICON[level] + '" aria-hidden="true"></i>';
            const name = t('modules.items.' + mod + '.name');
            cell.appendChild(el('span', null, typeof name === 'string' ? name : mod));
            cell.title = data.levels[level];
            grid.appendChild(cell);
        });
        map.appendChild(grid);

        // Legend, so the three states are readable without hovering
        const legend = el('div', 'amap-legend');
        ['f', 'o', 'n'].forEach(level => {
            const item = el('span', 'is-' + level);
            item.innerHTML = '<i class="ph ph-' + LEVEL_ICON[level] + '" aria-hidden="true"></i>';
            item.appendChild(el('b', null, data.levels[level]));
            legend.appendChild(item);
        });
        map.appendChild(legend);

        return map;
    }

    if (roleTabs) {
        roleTabs.addEventListener('click', event => {
            const tab = event.target.closest('.tab-btn');
            if (!tab || tab.dataset.role === activeRole) return;
            activeRole = tab.dataset.role;

            $$('.tab-btn', roleTabs).forEach(other => {
                const on = other === tab;
                other.classList.toggle('is-active', on);
                other.setAttribute('aria-selected', String(on));
            });
            $$('.pane', rolePanels).forEach(pane => {
                pane.classList.toggle('is-active', pane.id === 'role-' + activeRole);
            });
            replay($('#role-' + activeRole + ' .amap'));
        });
    }

    /* ───────────────────────── FAQ ────────────────────────── */

    const faqList = $('#faqList');

    // <details> so the questions still open without JS; the handler below
    // only adds the height animation and the one-open-at-a-time behaviour.
    function buildFaq() {
        if (!faqList) return;
        const data = t('faq');
        if (!data || !data.items) return;

        faqList.innerHTML = '';
        data.items.forEach((item, i) => {
            const box = el('details', 'faq-item');
            box.style.setProperty('--i', i);
            if (i === 0) box.open = true;

            const head = el('summary', 'faq-q');
            head.appendChild(el('span', null, item.q));
            head.innerHTML += '<i class="ph ph-plus" aria-hidden="true"></i>';
            box.appendChild(head);

            const body = el('div', 'faq-a');
            body.appendChild(el('p', null, item.a));
            box.appendChild(body);

            faqList.appendChild(box);

            // The collapsed height is 0 by default; the one that starts open
            // has to be told it may take its own height, or it reads as open
            // with nothing in it.
            if (box.open) body.style.height = 'auto';
        });
    }

    function setFaqHeight(box, open) {
        const body = $('.faq-a', box);
        if (!body) return;
        body.style.height = open ? body.scrollHeight + 'px' : '0px';
    }

    if (faqList) {
        faqList.addEventListener('click', event => {
            const head = event.target.closest('.faq-q');
            if (!head) return;
            event.preventDefault();

            const box = head.parentElement;
            const opening = !box.open;

            // Only one answer at a time: a column of open answers is a wall
            $$('.faq-item', faqList).forEach(other => {
                if (other === box) return;
                if (other.open) { setFaqHeight(other, false); other.open = false; }
            });

            if (opening) {
                box.open = true;
                setFaqHeight(box, true);
            } else {
                setFaqHeight(box, false);
                const done = () => { box.open = false; };
                if (reduce) done();
                else setTimeout(done, 260);
            }
        });

        // The first answer starts open, so it needs a height to animate from
        faqList.addEventListener('transitionend', event => {
            if (event.propertyName !== 'height') return;
            const box = event.target.parentElement;
            if (box && box.open) event.target.style.height = 'auto';
        });
    }

    /* ─────────────────── Module explorer ──────────────────── */

    const exList = $('#exList');
    const exItems = $$('.ex-item');
    const exName = $('#exName');
    const exLead = $('#exLead');
    const exPoints = $('#exPoints');
    const exBadge = $('#exBadge');
    const exIndex = $('#exIndex');
    let activeModule = 'lms';

    // One icon per capability, in the same order as the points in content.js.
    // They live here rather than in the translations because a capability is
    // the same capability in every language — only its wording changes.
    const POINT_ICONS = {
        lms: ['calendar-dots', 'notebook', 'shield-check', 'clipboard-text', 'exam', 'chart-line-up'],
        students: ['identification-card', 'first-aid-kit', 'path', 'graduation-cap', 'arrows-clockwise', 'coin'],
        parents: ['bell-ringing', 'chats-circle', 'list-checks', 'chart-line-up', 'lock-key', 'seal-check'],
        crm: ['funnel', 'phone-call', 'headset', 'note-pencil', 'users-three', 'chart-donut'],
        marketing: ['instagram-logo', 'calendar-plus', 'tag', 'currency-circle-dollar', 'scales', 'file-arrow-down'],
        erp: ['receipt', 'credit-card', 'bell-ringing', 'chart-line', 'target', 'lock-key'],
        hr: ['scan-smiley', 'map-pin', 'clock-countdown', 'money', 'airplane-takeoff', 'tree-structure'],
        sop: ['lightning', 'timer', 'arrow-fat-lines-up', 'camera', 'star', 'books'],
        ai: ['envelope-simple', 'pen-nib', 'image', 'chats-circle', 'lightbulb', 'translate'],
        agents: ['pulse', 'warning', 'magnifying-glass', 'lightbulb-filament', 'trend-up', 'newspaper'],
        mobile: ['note-pencil', 'scan-smiley', 'eye', 'backpack', 'bell', 'translate'],
        telegram: ['paper-plane-tilt', 'coins', 'megaphone-simple', 'chat-teardrop-dots', 'checks', 'link-simple']
    };

    function replay(node) {
        if (!node || reduce) return;
        node.classList.remove('is-live');
        void node.offsetWidth;
        node.classList.add('is-live');
    }

    function renderModule(key, animate = true) {
        const data = t(`modules.items.${key}`);
        if (!data) return;
        activeModule = key;

        exItems.forEach(item => {
            const on = item.dataset.mod === key;
            item.classList.toggle('is-active', on);
            item.setAttribute('aria-selected', String(on));
            item.style.setProperty('--p', '0');
        });

        // Mirrors the key onto the copy column so it picks up the same
        // [data-mod] hue as the list row and the visualisation.
        $('#exCopy').dataset.mod = key;

        exName.textContent = data.name;
        exLead.textContent = data.lead;

        // The badge repeats the rail's own icon, so the panel and the row you
        // clicked are visibly the same thing.
        const source = exItems.find(item => item.dataset.mod === key);
        const sourceIcon = source && source.querySelector('i');
        if (exBadge && sourceIcon) exBadge.firstElementChild.className = sourceIcon.className;
        if (exIndex) {
            const at = exItems.indexOf(source) + 1;
            exIndex.textContent = String(at).padStart(2, '0') + ' / ' + exItems.length;
        }

        // Each capability becomes a tile with its own icon — the list stops
        // being six sentences and starts being six things the module does.
        const icons = POINT_ICONS[key] || [];
        exPoints.innerHTML = '';
        data.points.forEach((point, i) => {
            const li = el('li');
            li.style.setProperty('--i', i);
            const mark = el('i');
            mark.className = 'ph ph-' + (icons[i] || 'check');
            mark.setAttribute('aria-hidden', 'true');
            li.appendChild(mark);
            li.appendChild(el('span', null, point));
            exPoints.appendChild(li);
        });

        $$('.viz').forEach(viz => viz.classList.toggle('is-active', viz.dataset.viz === key));

        const viz = $(`.viz[data-viz="${key}"]`);
        if (animate) {
            $('#exCopy').classList.remove('is-in');
            void $('#exCopy').offsetWidth;
            $('#exCopy').classList.add('is-in');
            replay(viz);
        } else if (viz) {
            viz.classList.add('is-live');
        }
        if (viz) runNums(viz);
    }

    exItems.forEach(item => {
        item.addEventListener('click', () => {
            renderModule(item.dataset.mod);
            resetRotation();
        });
    });

    if (exList) {
        exList.addEventListener('keydown', event => {
            const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
            const step = keys[event.key];
            if (!step) return;
            event.preventDefault();
            const i = exItems.findIndex(item => item.dataset.mod === activeModule);
            const next = exItems[(i + step + exItems.length) % exItems.length];
            next.focus();
            renderModule(next.dataset.mod);
            resetRotation();
        });
    }

    /* ────── Explorer auto-rotation, with a visible timer ────── */

    const explorer = $('.explorer');
    const ROTATE_MS = 6000;
    let exElapsed = 0;
    let exLastTs = 0;
    let exPaused = false;
    let exRaf = 0;
    let exVisible = false;

    function setProgress(p) {
        const active = exItems.find(item => item.classList.contains('is-active'));
        if (active) active.style.setProperty('--p', p.toFixed(3));
    }

    function resetRotation() {
        exElapsed = 0;
        exLastTs = 0;
        setProgress(0);
    }

    function rotateTick(ts) {
        if (!exVisible) { exRaf = 0; return; }

        if (!exLastTs) exLastTs = ts;
        const dt = ts - exLastTs;
        exLastTs = ts;

        if (!exPaused) exElapsed += dt;
        const p = Math.min(1, exElapsed / ROTATE_MS);
        setProgress(p);

        if (p >= 1) {
            const i = exItems.findIndex(item => item.dataset.mod === activeModule);
            resetRotation();
            renderModule(exItems[(i + 1) % exItems.length].dataset.mod);
        }

        exRaf = requestAnimationFrame(rotateTick);
    }

    function pauseRotation(on) {
        exPaused = on;
        explorer.classList.toggle('is-paused', on);
    }

    if (explorer && !reduce) {
        // Only spend frames while the section is actually on screen.
        new IntersectionObserver(([entry]) => {
            exVisible = entry.isIntersecting;
            if (exVisible && !exRaf) {
                exLastTs = 0;
                exRaf = requestAnimationFrame(rotateTick);
            } else if (!exVisible && exRaf) {
                cancelAnimationFrame(exRaf);
                exRaf = 0;
            }
        }, { threshold: 0.25 }).observe(explorer);

        explorer.addEventListener('pointerenter', () => pauseRotation(true));
        explorer.addEventListener('pointerleave', () => pauseRotation(false));
        explorer.addEventListener('focusin', () => pauseRotation(true));
        explorer.addEventListener('focusout', () => pauseRotation(false));
    }

    /* ───────────────── Cursor spotlight ────────────────────── */

    let spotRaf = 0;

    function bindSpotlight(selector) {
        $$(selector).forEach(node => {
            node.classList.add('spot');
            node.addEventListener('pointermove', event => {
                if (spotRaf) return;
                spotRaf = requestAnimationFrame(() => {
                    spotRaf = 0;
                    const box = node.getBoundingClientRect();
                    node.style.setProperty('--mx', `${((event.clientX - box.left) / box.width) * 100}%`);
                    node.style.setProperty('--my', `${((event.clientY - box.top) / box.height) * 100}%`);
                });
            });
        });
    }

    if (!reduce) bindSpotlight('.cell, .viz, .panel, .mini');

    /* ────────────────────── Navigation ────────────────────── */

    const nav = $('#nav');
    const navLinks = $('#navLinks');
    const burger = $('#burger');

    const sentinel = el('div');
    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:1px;pointer-events:none;';
    document.body.prepend(sentinel);

    new IntersectionObserver(([entry]) => {
        nav.classList.toggle('is-stuck', !entry.isIntersecting);
    }).observe(sentinel);

    function closeMenu() {
        burger.classList.remove('is-open');
        navLinks.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
    }

    burger.addEventListener('click', () => {
        const open = !navLinks.classList.contains('is-open');
        burger.classList.toggle('is-open', open);
        navLinks.classList.toggle('is-open', open);
        burger.setAttribute('aria-expanded', String(open));
    });

    $$('.nav-link', navLinks).forEach(link => link.addEventListener('click', closeMenu));

    const linkFor = new Map();
    $$('.nav-link').forEach(link => linkFor.set(link.getAttribute('href').slice(1), link));

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const link = linkFor.get(entry.target.id);
            if (!link || !entry.isIntersecting) return;
            linkFor.forEach(other => other.classList.remove('is-active'));
            link.classList.add('is-active');
        });
    }, { rootMargin: '-45% 0px -50% 0px' });

    $$('section[id]').forEach(section => sectionObserver.observe(section));

    /* ──────────────────── Scroll reveals ──────────────────── */

    let revealFired = false;

    const revealObserver = new IntersectionObserver((entries, observer) => {
        revealFired = true;
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
        });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

    // Headings wipe up instead of fading. The class goes on here, before the
    // observer runs, because a heading that is NOT also a .reveal has no other
    // way to earn .is-in — and .rv-h without .is-in stays clipped shut.
    $$('h1, section h2').forEach(heading => heading.classList.add('rv-h'));
    wrapHeadings();

    $$('.reveal, .rv-h').forEach(node => {
        if (node.dataset.delay) node.style.setProperty('--d', node.dataset.delay);
        revealObserver.observe(node);
    });

    // Content starts hidden so it can animate in. If the observer never
    // delivers (tab opened in the background, frames throttled), reveal
    // everything rather than leave the page blank.
    setTimeout(() => {
        if (revealFired) return;
        revealObserver.disconnect();
        $$('.reveal, .rv-h').forEach(node => node.classList.add('is-in'));
    }, 2500);

    /* ──────────── Live panels enter on first view ─────────── */

    const liveObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-live');
            $$(".pane.is-active .amap", entry.target).forEach(mini => mini.classList.add('is-live'));
            runNums(entry.target);
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.2 });

    ['#heroPanel', '#exViz', '.roles-panels', '.extras-bento'].forEach(sel => {
        const node = $(sel);
        if (node) liveObserver.observe(node);
    });

    /* ─────────────────── Phone input format ────────────────── */

    const phoneInput = $('#phone');

    if (phoneInput) {
        phoneInput.addEventListener('input', event => {
            const digits = event.target.value.replace(/\D/g, '').substring(0, 9);
            event.target.value = [
                digits.substring(0, 2),
                digits.substring(2, 5),
                digits.substring(5, 7),
                digits.substring(7, 9)
            ].filter(Boolean).join(' ');
        });
    }

    /* ───────────────────── Contact form ────────────────────── */

    const form = $('#contactForm');

    if (form) {
        const submitBtn = $('#submitBtn');
        const btnText = $('.btn-text', submitBtn);
        const btnLoading = $('.btn-loading', submitBtn);
        const formMessage = $('#formMessage');

        const BOT_TOKEN = '8084101687:AAG2pCUT_xDGxU5O82Jy5mEJb1fMjDcbKMA';
        const CHAT_ID = '-1003851418956';

        function setError(id, messageKey) {
            const field = $(`#${id}`);
            const holder = $(`.field-error[data-for="${id}"]`);
            const target = id === 'phone' ? $('.phone-wrap') : field;

            if (messageKey) {
                target.setAttribute('aria-invalid', 'true');
                holder.textContent = t(messageKey);
                holder.classList.add('is-shown');
            } else {
                target.removeAttribute('aria-invalid');
                holder.textContent = '';
                holder.classList.remove('is-shown');
            }
        }

        ['name', 'school', 'phone'].forEach(id => {
            $(`#${id}`).addEventListener('input', () => setError(id, null));
        });

        function validate() {
            const name = $('#name').value.trim();
            const school = $('#school').value.trim();
            const digits = $('#phone').value.replace(/\D/g, '');
            let ok = true;

            setError('name', name ? null : (ok = false, 'contact.err_name'));
            setError('school', school ? null : (ok = false, 'contact.err_school'));
            setError('phone', digits.length === 9 ? null : (ok = false, 'contact.err_phone'));

            return ok ? { name, school, phone: '+998' + digits } : null;
        }

        function showMessage(type, text) {
            formMessage.textContent = text;
            formMessage.className = `form-message is-${type}`;
        }

        form.addEventListener('submit', event => {
            event.preventDefault();

            const payload = validate();
            if (!payload) {
                const firstInvalid = $('[aria-invalid="true"]', form);
                if (firstInvalid) (firstInvalid.querySelector('input') || firstInvalid).focus();
                return;
            }

            submitBtn.disabled = true;
            btnText.hidden = true;
            btnLoading.hidden = false;
            formMessage.className = 'form-message';
            formMessage.textContent = '';

            const message =
                `<b>Yangi Lid 🎓</b>\n\n` +
                `👤 <b>Ism:</b> ${payload.name}\n` +
                `🏫 <b>Maktab:</b> ${payload.school}\n` +
                `📞 <b>Telefon:</b> ${payload.phone}\n\n` +
                `<i>Durbin saytidan yuborildi</i>`;

            fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: CHAT_ID, text: message, parse_mode: 'HTML' })
            })
                .then(res => res.json())
                .then(data => {
                    if (!data.ok) throw new Error(data.description || 'Telegram error');

                    showMessage('success', t('contact.ok'));
                    form.reset();

                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'form_submission', {
                            event_category: 'Contact',
                            event_label: 'Demo Request',
                            value: 1
                        });
                    }
                })
                .catch(error => {
                    console.error('Durbin form:', error);
                    showMessage('error', t('contact.fail'));
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    btnText.hidden = false;
                    btnLoading.hidden = true;
                });
        });
    }

    /* ───────────────────────── Boot ────────────────────────── */

    // .rv-h is applied up with the reveal observer, not here, so every
    // heading is actually being watched. Translation swaps innerHTML, never
    // the element itself, so the class survives a language change.
    applyLanguage(currentLang);
});

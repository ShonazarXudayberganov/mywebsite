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

        $$('.lang-btn').forEach(btn => btn.classList.toggle('is-active', btn.dataset.lang === lang));

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

        buildVizContent();
        buildMiniPanels();
        renderModule(activeModule, false);

        const pane = $('.pane.is-active');
        if (pane) runNums(pane);
    }

    $$('.lang-btn').forEach(btn => btn.addEventListener('click', () => applyLanguage(btn.dataset.lang)));

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

    /* ────────────── Role mini-panels (per tab) ────────────── */

    function buildMiniPanels() {
        const m = t('roles.mini');
        if (!m) return;

        // Founder: three metrics plus a branch comparison
        fill($('.js-mini-ceo'), box => {
            const kpis = el('div', 'mini-kpis');
            m.ceo_k.forEach(([label, value], i) => {
                const tile = el('div', 'mini-kpi');
                tile.style.setProperty('--i', i);
                tile.appendChild(el('span', null, label));
                tile.appendChild(el('b', null, value));
                kpis.appendChild(tile);
            });
            box.appendChild(kpis);

            const bars = el('div', 'mini-bars');
            m.ceo_b.forEach(([label, pct], i) => {
                const row = el('div', 'fn-row');
                row.style.setProperty('--i', i);
                row.appendChild(el('span', 'fn-l', label));
                const bar = el('span', 'fn-b');
                bar.style.setProperty('--w', pct + '%');
                bar.appendChild(el('i'));
                row.appendChild(bar);
                row.appendChild(el('b', 'fn-v', pct + '%'));
                bars.appendChild(row);
            });
            box.appendChild(bars);
        });

        // Director: overdue task list
        fill($('.js-mini-director'), box => {
            box.appendChild(el('p', 'rows-h', m.dir_h));
            m.dir_r.forEach(([task, who, state], i) => {
                const row = el('div', 'trow ' + state);
                row.style.setProperty('--i', i);
                const wrap = el('div');
                wrap.appendChild(el('b', null, task));
                wrap.appendChild(el('em', null, who));
                row.appendChild(wrap);
                const chip = el('span', 'tchip');
                chip.innerHTML = `<i class="ph ${state === 'late' ? 'ph-clock-countdown' : 'ph-check'}" aria-hidden="true"></i>`;
                row.appendChild(chip);
                box.appendChild(row);
            });
        });

        // Teacher: attendance being marked
        fill($('.js-mini-teacher'), box => {
            box.appendChild(el('p', 'rows-h', m.tea_h));
            m.tea_r.forEach(([name, present], i) => {
                const row = el('div', 'ph-row');
                row.style.setProperty('--i', i);
                row.appendChild(el('span', null, name));
                const mark = el('b', present ? '' : 'absent');
                mark.innerHTML = `<i class="ph ${present ? 'ph-check' : 'ph-x'}" aria-hidden="true"></i>`;
                row.appendChild(mark);
                box.appendChild(row);
            });
            box.appendChild(el('span', 'ph-save', m.tea_s));
        });

        // Parent: what actually lands on the phone
        fill($('.js-mini-parent'), box => {
            m.par_t.forEach(([icon, title, body], i) => {
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

        // Student: coins and grades
        fill($('.js-mini-student'), box => {
            const coins = el('div', 'stu-coins');
            coins.innerHTML = '<i class="ph-fill ph-coins" aria-hidden="true"></i>';
            const wrap = el('div');
            wrap.appendChild(el('span', null, m.stu_c));
            const value = el('b', 'num');
            value.dataset.to = '340';
            value.textContent = '0';
            wrap.appendChild(value);
            coins.appendChild(wrap);
            box.appendChild(coins);

            m.stu_g.forEach(([subject, mark], i) => {
                const row = el('div', 'ph-row');
                row.style.setProperty('--i', i);
                row.appendChild(el('span', null, subject));
                row.appendChild(el('b', null, String(mark)));
                box.appendChild(row);
            });
        });
    }

    /* ─────────────────── Module explorer ──────────────────── */

    const exList = $('#exList');
    const exItems = $$('.ex-item');
    const exName = $('#exName');
    const exLead = $('#exLead');
    const exPoints = $('#exPoints');
    let activeModule = 'lms';

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
        exPoints.innerHTML = '';
        data.points.forEach((point, i) => {
            const li = el('li', null, point);
            li.style.setProperty('--i', i);
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

    $$('.reveal').forEach(node => {
        if (node.dataset.delay) node.style.setProperty('--d', node.dataset.delay);
        revealObserver.observe(node);
    });

    // Content starts hidden so it can animate in. If the observer never
    // delivers (tab opened in the background, frames throttled), reveal
    // everything rather than leave the page blank.
    setTimeout(() => {
        if (revealFired) return;
        revealObserver.disconnect();
        $$('.reveal').forEach(node => node.classList.add('is-in'));
    }, 2500);

    /* ──────────── Live panels enter on first view ─────────── */

    const liveObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-live');
            $$('.pane.is-active .mini', entry.target).forEach(mini => mini.classList.add('is-live'));
            runNums(entry.target);
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.2 });

    ['#heroPanel', '#exViz', '.roles-panels', '.extras-bento'].forEach(sel => {
        const node = $(sel);
        if (node) liveObserver.observe(node);
    });

    /* ─────────────────────── Role tabs ─────────────────────── */

    const tabs = $$('.tab-btn');
    const panes = $$('.pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(other => {
                const on = other === tab;
                other.classList.toggle('is-active', on);
                other.setAttribute('aria-selected', String(on));
            });
            panes.forEach(pane => pane.classList.toggle('is-active', pane.id === tab.dataset.tab));

            const pane = $('#' + tab.dataset.tab);
            replay($('.mini', pane));
            runNums(pane);
        });
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

    // Headings wipe up instead of fading; the class is applied here so it
    // survives the innerHTML swaps that translation does.
    $$('h1, section h2').forEach(heading => heading.classList.add('rv-h'));

    applyLanguage(currentLang);
});

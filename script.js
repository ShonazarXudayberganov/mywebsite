document.addEventListener('DOMContentLoaded', () => {

    // --- Language Switcher ---
    const langBtns = document.querySelectorAll('.lang-btn');
    let currentLang = 'uz'; // Default language

    function updateLanguage(lang) {
        currentLang = lang;

        // Update buttons state
        langBtns.forEach(btn => {
            if (btn.dataset.lang === lang) btn.classList.add('active');
            else btn.classList.remove('active');
        });

        // Update text content
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = getNestedTranslation(translations[lang], key);
            if (translation) {
                // Check if translation contains HTML (for simple bolding/spans)
                if (translation.includes('<')) element.innerHTML = translation;
                else element.textContent = translation;
            }
        });
    }

    // Helper to access nested object properties e.g. 'nav.home'
    function getNestedTranslation(obj, path) {
        return path.split('.').reduce((prev, curr) => {
            return prev ? prev[curr] : null;
        }, obj);
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            updateLanguage(btn.dataset.lang);
        });
    });

    // Initialize Language
    updateLanguage('uz');


    // --- Tabs System for Roles ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const contentPanes = document.querySelectorAll('.content-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            contentPanes.forEach(p => p.classList.remove('active'));

            // Add active to clicked
            btn.classList.add('active');
            const targetId = btn.dataset.tab;
            document.getElementById(targetId).classList.add('active');
        });
    });


    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // Simple toggle for now, in a real app would perform better class toggling
        const isFlex = navLinks.style.display === 'flex';
        navLinks.style.display = isFlex ? 'none' : 'flex';

        if (!isFlex) {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.right = '20px';
            navLinks.style.background = 'white';
            navLinks.style.padding = '20px';
            navLinks.style.borderRadius = '12px';
            navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        }
    });


    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 5, 0.95)'; // Darker on scroll
            navbar.style.padding = '5px 30px';
        } else {
            navbar.style.background = 'rgba(5, 5, 5, 0.75)'; // Default transparency
            navbar.style.padding = '10px 30px';
        }
    });


    // --- Number Counter Animation ---
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    const runCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText.replace('+', ''); // Clean existing text

                // Lower inc to slow and higher to slow
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc) + "+";
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target + "+";
                }
            };
            updateCount();
        });
    };

    // Trigger counters once when hero is in view (simplified)
    setTimeout(runCounters, 1000);

    // --- Chaos to Order Simulator ---
    const chaosCanvas = document.getElementById('chaosCanvas');
    const sysBtn = document.getElementById('systematizeBtn');

    if (chaosCanvas && sysBtn) {
        const ctx = chaosCanvas.getContext('2d');
        let width, height;
        let particles = [];
        let isOrdered = false;

        // Data Types with emojis and colors
        const types = [
            { id: 'crm', label: 'CRM / O\'quvchilar', icon: ['👤', '🎓', '📝'], color: '#6366f1' },
            { id: 'finance', label: 'Moliya / Kassa', icon: ['💰', '💵', '💳'], color: '#10b981' },
            { id: 'stats', label: 'Statistika', icon: ['📊', '📈', '📉'], color: '#f59e0b' }
        ];

        function resize() {
            width = chaosCanvas.width = chaosCanvas.offsetWidth;
            height = chaosCanvas.height = chaosCanvas.offsetHeight;
            initParticles();
        }

        class SimParticle {
            constructor() {
                // Assign Type
                this.type = types[Math.floor(Math.random() * types.length)];
                this.icon = this.type.icon[Math.floor(Math.random() * this.type.icon.length)];

                // Chaos Position
                this.cx = Math.random() * width;
                this.cy = Math.random() * height;
                this.cvx = (Math.random() - 0.5) * 1.5;
                this.cvy = (Math.random() - 0.5) * 1.5;

                // Order Position (set dynamically)
                this.ox = 0;
                this.oy = 0;

                // Current State
                this.x = this.cx;
                this.y = this.cy;
                this.size = 20;
            }

            update() {
                if (!isOrdered) {
                    // Chaos Mode
                    this.x += this.cvx;
                    this.y += this.cvy;
                    if (this.x < 0 || this.x > width) this.cvx *= -1;
                    if (this.y < 0 || this.y > height) this.cvy *= -1;
                } else {
                    // Order Mode
                    let zoneX;
                    if (this.type.id === 'crm') zoneX = width * 0.2;
                    else if (this.type.id === 'finance') zoneX = width * 0.5;
                    else zoneX = width * 0.8;

                    if (this.ox === 0) {
                        this.ox = zoneX + (Math.random() - 0.5) * 120;
                        this.oy = (height / 2) + (Math.random() - 0.5) * 220;
                    }

                    this.x += (this.ox - this.x) * 0.08;
                    this.y += (this.oy - this.y) * 0.08;
                }
            }

            draw() {
                ctx.font = `${this.size}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(this.icon, this.x, this.y);
            }
        }

        function initParticles() {
            particles = [];
            const count = 90;
            for (let i = 0; i < count; i++) {
                particles.push(new SimParticle());
            }
        }

        function drawLabels() {
            if (!isOrdered) return;

            ctx.font = 'bold 18px Outfit, sans-serif';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';

            ctx.fillText("CRM / O'quvchilar", width * 0.2, 70);
            ctx.fillText("Moliya / Kassa", width * 0.5, 70);
            ctx.fillText("Analitika", width * 0.8, 70);

            ctx.fillStyle = '#6366f1'; ctx.fillRect(width * 0.2 - 60, 78, 120, 3);
            ctx.fillStyle = '#10b981'; ctx.fillRect(width * 0.5 - 60, 78, 120, 3);
            ctx.fillStyle = '#f59e0b'; ctx.fillRect(width * 0.8 - 60, 78, 120, 3);
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            drawLabels();
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }

        sysBtn.addEventListener('click', () => {
            isOrdered = !isOrdered;

            if (isOrdered) {
                particles.forEach(p => { p.ox = 0; });
                sysBtn.innerHTML = '<i class="fas fa-random"></i> Qaytarish';
                sysBtn.classList.remove('btn-primary', 'pulse-btn');
                sysBtn.classList.add('btn-outline');
            } else {
                sysBtn.innerHTML = '<i class="fas fa-magic"></i> Tizimlashtirish';
                sysBtn.classList.add('btn-primary', 'pulse-btn');
                sysBtn.classList.remove('btn-outline');
                particles.forEach(p => {
                    p.cvx = (Math.random() - 0.5) * 4;
                    p.cvy = (Math.random() - 0.5) * 4;
                });
            }
        });

        window.addEventListener('resize', resize);
        resize();
        animate();
    }

    // --- TELEGRAM INTEGRATION ---
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const formMessage = document.getElementById('formMessage');

    const BOT_TOKEN = '8084101687:AAG2pCUT_xDGxU5O82Jy5mEJb1fMjDcbKMA';
    const CHAT_ID = '6045648028';

    contactForm.addEventListener('submit', e => {
        e.preventDefault();

        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-block';
        formMessage.textContent = '';
        formMessage.className = 'form-message';

        const name = document.getElementById('name').value;
        const school = document.getElementById('school').value;
        const phone = document.getElementById('phone').value;

        const message = `<b>Yangi Lid 🎓</b>\n\n` +
            `👤 <b>Ism:</b> ${name}\n` +
            `🏫 <b>Maktab:</b> ${school}\n` +
            `📞 <b>Telefon:</b> ${phone}\n\n` +
            `<i>Durbin saytidan yuborildi</i>`;

        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}&parse_mode=HTML`;

        fetch(url, {
            method: 'GET',
            mode: 'no-cors'
        })
            .then(() => {
                formMessage.textContent = "Ma'lumotlar muvaffaqiyatli yuborildi! Tez orada aloqaga chiqamiz.";
                formMessage.classList.add('success');
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error!', error);
                formMessage.textContent = "Internet xatosi. Iltimos, qayta urinib ko'ring.";
                formMessage.classList.add('error');
            })
            .finally(() => {
                submitBtn.disabled = false;
                btnText.style.display = 'inline-block';
                btnLoading.style.display = 'none';
            });
    });

    // --- Network Animation ---
    const canvas = document.createElement('canvas');
    canvas.id = 'network-canvas';
    document.body.prepend(canvas);
    const netCtx = canvas.getContext('2d');

    let netWidth, netHeight;
    let netParticles = [];

    const mouse = { x: null, y: null, radius: 150 };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    function resizeNetwork() {
        netWidth = canvas.width = window.innerWidth;
        netHeight = canvas.height = window.innerHeight;
        initNetwork();
    }
    window.addEventListener('resize', resizeNetwork);

    class Particle {
        constructor() {
            this.x = Math.random() * netWidth;
            this.y = Math.random() * netHeight;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > netWidth) this.vx *= -1;
            if (this.y < 0 || this.y > netHeight) this.vy *= -1;

            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
                const opacity = 1 - (distance / mouse.radius);
                netCtx.beginPath();
                netCtx.strokeStyle = `rgba(129, 140, 248, ${opacity})`;
                netCtx.lineWidth = 1.5;
                netCtx.moveTo(this.x, this.y);
                netCtx.lineTo(mouse.x, mouse.y);
                netCtx.stroke();
            }
        }

        draw() {
            netCtx.beginPath();
            netCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            netCtx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            netCtx.fill();
        }
    }

    function initNetwork() {
        netParticles = [];
        const numberOfParticles = (netWidth * netHeight) / 15000;
        for (let i = 0; i < numberOfParticles; i++) {
            netParticles.push(new Particle());
        }
    }

    function animateNetwork() {
        netCtx.clearRect(0, 0, netWidth, netHeight);
        netParticles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animateNetwork);
    }

    resizeNetwork();
    animateNetwork();
});

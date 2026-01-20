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

    // --- TELEGRAM INTEGRATION (Custom Logic) ---
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const formMessage = document.getElementById('formMessage');

    // User Credentials
    const BOT_TOKEN = '8084101687:AAG2pCUT_xDGxU5O82Jy5mEJb1fMjDcbKMA';
    const CHAT_ID = '6045648028';

    contactForm.addEventListener('submit', e => {
        e.preventDefault();

        // UI: Show loading state
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-block';
        formMessage.textContent = '';
        formMessage.className = 'form-message';

        // Get Values
        const name = document.getElementById('name').value;
        const school = document.getElementById('school').value;
        const phone = document.getElementById('phone').value;

        // Construct Message
        const message = `<b>Yangi Lid 🎓</b>\n\n` +
            `👤 <b>Ism:</b> ${name}\n` +
            `🏫 <b>Maktab:</b> ${school}\n` +
            `📞 <b>Telefon:</b> ${phone}\n\n` +
            `<i>Durbin saytidan yuborildi</i>`;

        // Send to Telegram (Method: GET with no-cors to bypass browser restrictions)
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}&parse_mode=HTML`;

        fetch(url, {
            method: 'GET',
            mode: 'no-cors' // Crucial: Allows sending without waiting for a readable response
        })
            .then(() => {
                // Optimistic Success: Since we can't read the response in no-cors, we assume success if no network error occurred.
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
                // UI: Reset loading state
                submitBtn.disabled = false;
                btnText.style.display = 'inline-block';
                btnLoading.style.display = 'none';
            });
    });

    // --- Digital Network Animation (Canvas) ---
    const canvas = document.createElement('canvas');
    canvas.id = 'network-canvas';
    document.body.prepend(canvas);
    const ctx = canvas.getContext('2d');

    let width, height;
    let particles = [];

    // Mouse state
    const mouse = { x: null, y: null, radius: 150 };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    // Resize
    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initParticles();
    }
    window.addEventListener('resize', resize);

    // Particle Class
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5; // Slow movement
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // Mouse Interaction
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
                const opacity = 1 - (distance / mouse.radius);
                ctx.beginPath();
                ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`; // Brighter Indigo (Tailwind Indigo-400)
                ctx.lineWidth = 1.5; // Thicker lines
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'; // Much brighter dots
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        const numberOfParticles = (width * height) / 15000; // Density
        for (let i = 0; i < numberOfParticles; i++) {
            particles.push(new Particle());
        }
    }

    function animateNetwork() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animateNetwork);
    }

    resize();
    animateNetwork();
});

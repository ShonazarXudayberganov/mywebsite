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

        // Colors for particles (School themes: Yellow = Students, Green = Money, Blue = Teachers)
        const colors = ['#facc15', '#4ade80', '#6366f1'];

        function resize() {
            width = chaosCanvas.width = chaosCanvas.offsetWidth;
            height = chaosCanvas.height = chaosCanvas.offsetHeight;
            initParticles();
        }

        class SimParticle {
            constructor(id) {
                this.id = id;
                this.radius = Math.random() * 3 + 2;
                this.color = colors[Math.floor(Math.random() * colors.length)];

                // Chaos Position (Random)
                this.cx = Math.random() * width;
                this.cy = Math.random() * height;
                this.cvx = (Math.random() - 0.5) * 2;
                this.cvy = (Math.random() - 0.5) * 2;

                // Order Position (Grid)
                const cols = 20;
                const spacingX = width / cols;
                const spacingY = spacingX;
                const row = Math.floor(id / cols);
                const col = id % cols;

                this.ox = (col * spacingX) + (spacingX / 2);
                this.oy = (row * spacingY) + (spacingY / 2) + 50; // Offset from top

                // Current State
                this.x = this.cx;
                this.y = this.cy;
            }

            update() {
                if (!isOrdered) {
                    // Chaos Mode: Move randomly
                    this.x += this.cvx;
                    this.y += this.cvy;

                    // Bounce off walls
                    if (this.x < 0 || this.x > width) this.cvx *= -1;
                    if (this.y < 0 || this.y > height) this.cvy *= -1;
                } else {
                    // Order Mode: Move to target (Lerp)
                    this.x += (this.ox - this.x) * 0.08;
                    this.y += (this.oy - this.y) * 0.08;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const count = 300; // Number of particles
            for (let i = 0; i < count; i++) {
                particles.push(new SimParticle(i));
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }

        // Button Click
        sysBtn.addEventListener('click', () => {
            isOrdered = !isOrdered;
            if (isOrdered) {
                sysBtn.innerHTML = '<i class="fas fa-random"></i> Qaytarish';
                sysBtn.classList.remove('btn-primary', 'pulse-btn');
                sysBtn.classList.add('btn-outline');
            } else {
                sysBtn.innerHTML = '<i class="fas fa-magic"></i> Tizimlashtirish';
                sysBtn.classList.add('btn-primary', 'pulse-btn');
                sysBtn.classList.remove('btn-outline');
            }
        });

        // Init
        window.addEventListener('resize', resize);
        resize(); // First init
        animate();
    }
});

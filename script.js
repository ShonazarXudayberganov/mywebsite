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

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = getNestedTranslation(translations[lang], key);
            if (translation) {
                element.setAttribute('placeholder', translation);
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

    // --- Active Navigation Link on Scroll ---
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function setActiveLink() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Update on scroll
    window.addEventListener('scroll', setActiveLink);

    // Update on click
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Set initial active link
    setActiveLink();


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
    const hamburger = document.querySelector('.hamburger-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinksAll = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        navLinksAll.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // --- Navbar Scroll Shadow Effect ---
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                navbar.style.transition = 'box-shadow 0.3s ease';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }


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
            { id: 'crm', label: 'CRM / O\'quvchilar', icon: '👤', color: '#6366f1', count: 0 },
            { id: 'finance', label: 'Moliya / Kassa', icon: '💰', color: '#10b981', count: 0 },
            { id: 'stats', label: 'Statistika', icon: '📊', color: '#f59e0b', count: 0 }
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
                this.icon = this.type.icon;
                this.gridIndex = this.type.count++;

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
                    // Order Mode: 2 columns, rows going down
                    let zoneX;
                    if (this.type.id === 'crm') zoneX = width * 0.2;
                    else if (this.type.id === 'finance') zoneX = width * 0.5;
                    else zoneX = width * 0.8;

                    if (this.ox === 0) {
                        const cols = 2;
                        const spacing = 35;
                        const col = this.gridIndex % cols;
                        const row = Math.floor(this.gridIndex / cols);

                        this.ox = zoneX + (col - 0.5) * spacing;
                        this.oy = 120 + (row * spacing);
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
            // Reset counters
            types.forEach(t => t.count = 0);

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

    if (contactForm && submitBtn) {
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        const formMessage = document.getElementById('formMessage');

        const BOT_TOKEN = '8084101687:AAG2pCUT_xDGxU5O82Jy5mEJb1fMjDcbKMA';
        const CHAT_ID = '6045648028';

        contactForm.addEventListener('submit', e => {
            e.preventDefault();

            submitBtn.disabled = true;
            if (btnText) btnText.style.display = 'none';
            if (btnLoading) btnLoading.style.display = 'inline-block';
            if (formMessage) {
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }

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
    }

    // --- Module Detail Modal ---
    const modal = document.getElementById('moduleModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalGrid = document.getElementById('modalGrid');
    const modalFeaturesWrap = document.getElementById('modalFeaturesWrap');
    const modalFeaturesList = document.getElementById('modalFeaturesList');
    const modalIcon = modal.querySelector('.modal-icon i');
    const modalClose = modal.querySelector('.modal-close');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const moduleCards = document.querySelectorAll('.module-card');

    function openModal(moduleKey) {
        const moduleData = translations[currentLang].modals[moduleKey];
        const moduleCard = document.querySelector(`.module-card[data-module="${moduleKey}"]`);
        const iconClass = moduleCard.querySelector('i').className;

        if (moduleData) {
            modalTitle.textContent = moduleData.title;
            modalSubtitle.innerHTML = moduleData.subtitle || moduleData.desc || '';
            modalIcon.className = iconClass;

            // Clear previous contents
            modalGrid.innerHTML = '';
            modalFeaturesList.innerHTML = '';

            // Handle new "sections" structure (cards inside modal)
            if (moduleData.sections) {
                modalFeaturesWrap.style.display = 'none';
                modalGrid.style.display = 'grid';

                moduleData.sections.forEach(section => {
                    const card = document.createElement('div');
                    card.className = 'modal-info-card';

                    let itemsHtml = '';
                    if (section.items) {
                        itemsHtml = `<ul>${section.items.map(item => `<li><i class="fas fa-check"></i> ${item}</li>`).join('')}</ul>`;
                    }

                    card.innerHTML = `
                        <h4><i class="fas fa-chevron-right"></i> ${section.title}</h4>
                        ${itemsHtml}
                    `;
                    modalGrid.appendChild(card);
                });
            } else {
                // Fallback to old simple list
                modalGrid.style.display = 'none';
                modalFeaturesWrap.style.display = 'block';

                if (moduleData.features) {
                    moduleData.features.forEach(feature => {
                        const li = document.createElement('li');
                        li.className = 'feature-item-modal';
                        li.innerHTML = `<i class="fas fa-check-circle"></i> <span>${feature}</span>`;
                        modalFeaturesList.appendChild(li);
                    });
                }
            }

            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    moduleCards.forEach(card => {
        card.addEventListener('click', () => {
            const moduleKey = card.getAttribute('data-module');
            openModal(moduleKey);
        });
    });

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // --- Live Toast Notifications ---
    const toastContainer = document.getElementById('toastContainer');

    const notifications = [
        { icon: '👤', title: "Yangi o'quvchi", message: "Alisher Karimov ro'yxatdan o'tdi" },
        { icon: '💰', title: "To'lov qabul qilindi", message: "Click orqali 500,000 so'm to'landi" },
        { icon: '📊', title: "Baholar kiritildi", message: "Matematika fan bo'yicha 15 baho" },
        { icon: '📝', title: "Davomat belgilandi", message: "7-A sinf uchun davomat yakunlandi" },
        { icon: '👨‍🏫', title: "O'qituvchi kiritdi", message: "Fizika darsini boshladi" },
        { icon: '📱', title: "Ota-ona ko'rdi", message: "Sardor Azizov baholarni tekshirdi" },
        { icon: '💳', title: "Plastik to'lov", message: "Payme orqali 750,000 so'm" },
        { icon: '📈', title: "Statistika yangilandi", message: "Oylik hisobot tayyor" },
        { icon: '🎓', title: "Guruh to'ldi", message: "Ingliz tili guruhiga 12-o'quvchi" },
        { icon: '🔔', title: "Eslatma yuborildi", message: "Ota-onalarga SMS jo'natildi" }
    ];

    function showToast() {
        const notification = notifications[Math.floor(Math.random() * notifications.length)];

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <div class="toast-icon">${notification.icon}</div>
            <div class="toast-content">
                <div class="toast-title">${notification.title}</div>
                <div class="toast-message">${notification.message}</div>
            </div>
        `;

        toastContainer.appendChild(toast);

        // Remove after 4 seconds
        setTimeout(() => {
            toast.classList.add('removing');
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }

    // Show first notification after 3 seconds, then random intervals
    setTimeout(() => {
        showToast();
        setInterval(() => {
            // Random interval between 5-8 seconds
            setTimeout(showToast, Math.random() * 3000 + 5000);
        }, 8000);
    }, 3000);
});

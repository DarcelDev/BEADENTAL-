        // Service Data with real descriptions
        const serviceData = {
            general: [
                { 
                    img: 'https://thf.bing.com/th/id/OIP.xMlrfMjL8yIhVNvFHtOgWwHaHa?w=164&h=180&c=7&r=0&o=7&cb=thfc1falcon&pid=1.7&rm=3',
                    title: 'Cleanings & Checkups', 
                    desc: 'Professional cleanings and comprehensive examinations to maintain optimal oral health and catch issues early.' 
                },
                { 
                    img: 'https://thf.bing.com/th?q=Preventive+Care+White+People&w=120&h=120&c=1&rs=1&qlt=70&r=0&o=7&cb=1&pid=InlineBlock&rm=3&mkt=en-WW&cc=CM&setlang=en&adlt=moderate&t=1&mw=247',
                    title: 'Preventive Care', 
                    desc: 'Fluoride treatments, sealants, and dental education to prevent dental diseases before they start.' 
                },
                { 
                    img: 'https://thf.bing.com/th/id/OIP.QdAvaRSZDJAZ1oBK0146igHaE8?w=235&h=180&c=7&r=0&o=7&cb=thfc1falcon&pid=1.7&rm=3',
                    title: 'Oral Exams', 
                    desc: 'Advanced diagnostic technology for early detection of dental issues and personalized treatment plans.' 
                }
            ],
            cosmetic: [
                { 
                    img: 'https://thf.bing.com/th/id/OIP.1r5tob_Atsu_nReC4JpsTQHaHa?w=142&h=150&c=6&r=0&o=7&cb=thfc1falcon&pid=1.7&rm=3',
                    title: 'Teeth Whitening', 
                    desc: 'Professional whitening treatments for a brighter, more radiant smile that lasts longer.' 
                },
                { 
                    img: 'https://thf.bing.com/th/id/OIP.ucba-w3wyvfajk0Ezyn1jQHaFd?w=271&h=199&c=7&r=0&o=7&cb=thfc1falcon&pid=1.7&rm=3',
                    title: 'Veneers & Bonding', 
                    desc: 'Custom porcelain veneers and tooth-colored bonding for a perfect smile transformation.' 
                },
                { 
                    img: 'https://thf.bing.com/th/id/OIP.Ok64ZaRZyC_i3oqvTAd17wHaQn?w=115&h=180&c=7&r=0&o=7&cb=thfc1falcon&pid=1.7&rm=3',
                    title: 'Smile Design', 
                    desc: 'Digital smile design using advanced technology to create your ideal smile before treatment.' 
                }
            ],
            advanced: [
                { 
                    img: 'https://thf.bing.com/th/id/OIP.QgfSeyWfWqdu03vhSnlajAHaDt?w=301&h=175&c=7&r=0&o=7&cb=thfc1falcon&pid=1.7&rm=3',
                    title: 'Dental Implants', 
                    desc: 'Permanent tooth replacement solutions that look and function like natural teeth for years.' 
                },
                { 
                    img: 'https://thf.bing.com/th/id/OIP.qbIH1HC3jgkVKtl15_XNcgHaE8?w=250&h=180&c=7&r=0&o=7&cb=thfc1falcon&pid=1.7&rm=3',
                    title: 'Root Canal Therapy', 
                    desc: 'Advanced endodontic treatment to save your natural tooth and eliminate pain.' 
                },
                { 
                    img: 'https://thf.bing.com/th/id/OIP.sAHZr1soR3jP_E7IbEOfewHaEH?w=316&h=180&c=7&r=0&o=7&cb=thfc1falcon&pid=1.7&rm=3',
                    title: 'Orthodontics', 
                    desc: 'Modern braces and clear aligners for a perfectly straight, beautiful smile at any age.' 
                }
            ]
        };

        // Navigation scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking links
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });

        // Service tabs
        const tabButtons = document.querySelectorAll('.tab-btn');
        const serviceGrid = document.getElementById('serviceGrid');

        function renderServices(category) {
            const services = serviceData[category];
            serviceGrid.innerHTML = services.map((service, idx) => `
                <div class="service-card" style="animation: slideInUp 0.8s ease ${idx * 0.1}s both;">
                    <img src="${service.img}" alt="${service.title}" class="service-icon-img">
                    <h3>${service.title}</h3>
                    <p>${service.desc}</p>
                    <a href="https://wa.me/237653525480?text=Hello%20BEADENTAL!%20I%20am%20interested%20in%20${service.title}" target="_blank" class="service-link">
                        Inquire Now <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            `).join('');
        }

        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                tabButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderServices(btn.dataset.tab);
            });
        });

        // Initial render
        renderServices('general');

        // Form submission for WhatsApp
        const bookingForm = document.getElementById('bookingForm');
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;

            const message = `Hello BEADENTAL!%0A%0AI would like to book an appointment:%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0APreferred Date: ${date}`;
            
            const whatsappUrl = `https://wa.me/237653525480?text=${message}`;
            window.open(whatsappUrl, '_blank');
            
            bookingForm.reset();
        });

        // Smooth scroll for nav links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href !== '#' && document.querySelector(href)) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    menuToggle.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
            });
        });

        // Add animation to elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.service-card, .team-member, .testimonial-card').forEach(el => {
            observer.observe(el);
        });
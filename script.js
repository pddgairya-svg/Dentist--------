document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

    const toggleMenu = () => {
        if (mobileMenu) {
            mobileMenu.classList.toggle('hidden');
        }
    };

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMenu);
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // --- Sticky Navbar Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-md', 'bg-white/95');
                navbar.classList.remove('bg-white/90', 'shadow-sm', 'py-4');
                navbar.classList.add('py-3');
            } else {
                navbar.classList.remove('shadow-md', 'bg-white/95', 'py-3');
                navbar.classList.add('bg-white/90', 'shadow-sm', 'py-4');
            }
        }
    });

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal only once for performance
            }
        });
    };

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const btn = item.querySelector('button');
        if (btn) {
            btn.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other FAQs
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });

                // Toggle current FAQ
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // --- Form Validation & Submission ---
    const form = document.getElementById('booking-form');
    const successMsg = document.getElementById('success-msg');
    const bookAnotherBtn = document.getElementById('book-another-btn');

    if (form && successMsg) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic Validation checks
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const date = document.getElementById('date').value;
            const service = document.getElementById('service').value;

            if (!name || !phone || !date || !service) {
                alert('Please fill in all required fields.');
                return;
            }

            // Phone Validation Regex (basic international format)
            const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
            if (!phoneRegex.test(phone)) {
                alert('Please enter a valid phone number.');
                return;
            }

            // Simulate API Call & Show Success Message
            form.style.display = 'none';
            successMsg.classList.remove('hidden');
            form.reset();
        });
    }

    if (bookAnotherBtn && form && successMsg) {
        bookAnotherBtn.addEventListener('click', () => {
            successMsg.classList.add('hidden');
            form.style.display = 'block';
        });
    }

});

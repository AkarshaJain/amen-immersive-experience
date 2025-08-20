// Loading Screen
window.addEventListener('load', function() {
    const loading = document.querySelector('.loading');
    if (loading) {
        setTimeout(() => {
            loading.classList.add('hidden');
            setTimeout(() => {
                loading.style.display = 'none';
                // Ensure hero title is visible after loading
                const heroTitle = document.querySelector('.hero-title');
                if (heroTitle) {
                    heroTitle.style.opacity = '1';
                    heroTitle.style.visibility = 'visible';
                }
            }, 500);
        }, 1000);
    }
});

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Simple hover effects for cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.tour-card, .artist-card, .experience-card, .merch-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Newsletter signup
document.addEventListener('DOMContentLoaded', function() {
    const newsletterBtn = document.querySelector('.newsletter-btn');
    const newsletterInput = document.querySelector('.newsletter-input');
    
    if (newsletterBtn && newsletterInput) {
        newsletterBtn.addEventListener('click', function() {
            const email = newsletterInput.value.trim();
            if (email && email.includes('@')) {
                alert('Thank you for subscribing to our newsletter!');
                newsletterInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});

// Console log for successful load
document.addEventListener('DOMContentLoaded', function() {
    console.log('AMEN website loaded successfully');
});

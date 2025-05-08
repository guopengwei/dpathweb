document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.feature-card, .persona-card, .coming-soon');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.06)';
        });
    });

    // Handle the contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add a success animation
            const button = this.querySelector('button');
            const originalText = button.innerHTML;
            button.innerHTML = '<span class="material-symbols-rounded">check_circle</span> Subscribed!';
            button.style.backgroundColor = 'var(--success-color)';
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.backgroundColor = '';
                this.reset();
            }, 2000);
            
            alert('Thank you for your message! We will be in touch soon.');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
});
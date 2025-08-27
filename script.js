// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const searchBtn = document.querySelector('.search-btn');
    
    // Mobile menu functionality (placeholder)
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            console.log('Menu clicked');
            // Add mobile menu functionality here
        });
    }
    
    // Search functionality (placeholder)
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            console.log('Search clicked');
            // Add search functionality here
        });
    }
    
    // Meer producten dropdown
    const meerProductenBtn = document.querySelector('.meer-producten-btn');
    if (meerProductenBtn) {
        meerProductenBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Meer producten clicked');
            // Add dropdown functionality here
        });
    }
    
    // Footer accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const content = accordionItem.querySelector('.accordion-content');
            const icon = this.querySelector('svg');
            
            // Toggle active state
            accordionItem.classList.toggle('active');
            
            // Toggle content visibility
            if (accordionItem.classList.contains('active')) {
                content.style.display = 'block';
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.style.maxHeight = '0';
                content.style.display = 'none';
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add hover effects to bank cards
    const bankCards = document.querySelectorAll('.bank-card-item, .footprint-bank');
    
    bankCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 12px 30px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Add animation to hero bank cards
    const heroCards = document.querySelectorAll('.bank-card');
    
    // Animate cards on page load
    setTimeout(() => {
        heroCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = card.style.transform + ' translateY(0)';
            }, index * 200);
        });
    }, 500);
    
    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero');
        const bankCardsIllustration = document.querySelector('.bank-cards-illustration');
        
        if (heroSection && bankCardsIllustration) {
            const rate = scrolled * -0.5;
            bankCardsIllustration.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Add loading animation for images
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // If image is already loaded
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Add click tracking for analytics (placeholder)
    const trackableElements = document.querySelectorAll('a, button');
    
    trackableElements.forEach(element => {
        element.addEventListener('click', function() {
            const elementText = this.textContent.trim();
            const elementType = this.tagName.toLowerCase();
            
            console.log(`Clicked ${elementType}: ${elementText}`);
            // Add analytics tracking here
        });
    });
    
    // Add form validation if forms exist
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add form validation logic here
            console.log('Form submitted');
        });
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key to close modals/dropdowns
        if (e.key === 'Escape') {
            // Close any open modals or dropdowns
            const activeAccordions = document.querySelectorAll('.accordion-item.active');
            activeAccordions.forEach(accordion => {
                accordion.classList.remove('active');
                const content = accordion.querySelector('.accordion-content');
                const icon = accordion.querySelector('.accordion-header svg');
                
                if (content) {
                    content.style.maxHeight = '0';
                    content.style.display = 'none';
                }
                
                if (icon) {
                    icon.style.transform = 'rotate(0deg)';
                }
            });
        }
    });
    
    // Add resize handler for responsive adjustments
    window.addEventListener('resize', function() {
        // Adjust layout on resize if needed
        const windowWidth = window.innerWidth;
        
        if (windowWidth < 768) {
            // Mobile adjustments
            console.log('Mobile view');
        } else if (windowWidth < 1024) {
            // Tablet adjustments
            console.log('Tablet view');
        } else {
            // Desktop adjustments
            console.log('Desktop view');
        }
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .bank-card {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
    }
    
    .accordion-content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
        display: none;
    }
    
    .accordion-header svg {
        transition: transform 0.3s ease;
    }
    
    .knowledge-item {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .bank-card-item,
    .footprint-bank {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
`;

document.head.appendChild(style);

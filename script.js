// Initialize the website with animations and effects
document.addEventListener('DOMContentLoaded', function() {
    initializeStars();
    initializeParticles();
    initializeLogoParticles();
    initializeInteractiveEffects();
    initializeShootingStars();
});

// Create stars background
function initializeStars() {
    const starsContainer = document.querySelector('.stars-container');
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Random size
        const size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        // Random animation delay
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        starsContainer.appendChild(star);
    }
}

// Create floating particles
function initializeParticles() {
    const particlesContainer = document.querySelector('.particles-container');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random size
        const size = Math.random() * 6 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random animation delay and duration
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Create logo particles
function initializeLogoParticles() {
    const logoParticles = document.querySelector('.logo-particles');
    const particleCount = 8;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'logo-particle';
        
        // Random starting angle
        const angle = (360 / particleCount) * i;
        particle.style.animationDelay = (i * 0.5) + 's';
        
        logoParticles.appendChild(particle);
    }
}

// Create shooting stars
function initializeShootingStars() {
    setInterval(createShootingStar, 2000);
}

function createShootingStar() {
    const starsContainer = document.querySelector('.stars-container');
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    
    // Random starting position (from top-left area)
    shootingStar.style.left = Math.random() * 50 + '%';
    shootingStar.style.top = Math.random() * 50 + '%';
    
    // Random animation duration
    shootingStar.style.animationDuration = (Math.random() * 2 + 2) + 's';
    
    // Create trail effect
    shootingStar.style.boxShadow = `
        0 0 10px #64ffda,
        0 0 20px #64ffda,
        0 0 30px #64ffda,
        0 0 40px #64ffda
    `;
    
    starsContainer.appendChild(shootingStar);
    
    // Remove after animation
    setTimeout(() => {
        if (shootingStar.parentNode) {
            shootingStar.parentNode.removeChild(shootingStar);
        }
    }, 4000);
}

// Interactive effects
function initializeInteractiveEffects() {
    const logo = document.querySelector('.phonz-logo');
    const featureCards = document.querySelectorAll('.feature-card');
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    // Logo hover effect
    logo.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotateY(10deg)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    logo.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotateY(0deg)';
    });
    
    // Feature cards hover effects
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Create ripple effect
            createRipple(this);
            
            // Enhance glow
            this.style.boxShadow = '0 25px 50px rgba(100, 255, 218, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 20px 40px rgba(100, 255, 218, 0.2)';
        });
    });
    
    // CTA buttons click effects
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect at click position
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Mouse move parallax effect
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        // Move floating elements based on mouse position
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            
            element.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        // Parallax effect for particles
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            const speed = (index % 3 + 1) * 0.3;
            const x = (mouseX - 0.5) * speed * 10;
            const y = (mouseY - 0.5) * speed * 10;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
    
    // Scroll animations
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.main-container');
        const speed = scrolled * 0.5;
        
        parallax.style.transform = `translateY(${speed}px)`;
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            // Focus on primary CTA button
            const primaryButton = document.querySelector('.cta-button.primary');
            if (primaryButton) {
                primaryButton.focus();
            }
        }
    });
}

// Create ripple effect
function createRipple(element) {
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(100, 255, 218, 0.3)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'rippleEffect 0.6s linear';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.marginLeft = '-10px';
    ripple.style.marginTop = '-10px';
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: rippleEffect 0.6s linear;
        pointer-events: none;
    }
`;
document.head.appendChild(style);

// Performance optimization
let lastTime = 0;
function optimizeAnimations(currentTime) {
    if (currentTime - lastTime > 16) { // ~60fps
        // Update complex animations here if needed
        lastTime = currentTime;
    }
    requestAnimationFrame(optimizeAnimations);
}

requestAnimationFrame(optimizeAnimations);

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add resize handler for responsive behavior
window.addEventListener('resize', function() {
    // Adjust animations based on screen size
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    if (width < 768) {
        // Mobile optimizations
        document.querySelector('.phonz-logo').style.fontSize = '5rem';
    } else {
        // Desktop sizing
        document.querySelector('.phonz-logo').style.fontSize = '8rem';
    }
});

// Add touch support for mobile devices
document.addEventListener('touchstart', function(e) {
    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    
    if (element && element.classList.contains('feature-card')) {
        createRipple(element);
    }
});

// Add accessibility features
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        // Enhance focus visibility
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Add focus styles for accessibility
const focusStyle = document.createElement('style');
focusStyle.textContent = `
    .keyboard-navigation *:focus {
        outline: 3px solid #64ffda !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(focusStyle);

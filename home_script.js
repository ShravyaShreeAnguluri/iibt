 // Animated background
        function createFloatingCubes() {
            const bgAnimation = document.getElementById('bgAnimation');
            for (let i = 0; i < 20; i++) {
                const cube = document.createElement('div');
                cube.className = 'floating-cube';
                cube.style.left = Math.random() * 100 + '%';
                cube.style.top = Math.random() * 100 + '%';
                cube.style.animationDelay = Math.random() * 8 + 's';
                cube.style.animationDuration = (Math.random() * 4 + 6) + 's';
                bgAnimation.appendChild(cube);
            }
        }

        // Scroll reveal animation
        function revealOnScroll() {
            const reveals = document.querySelectorAll('.scroll-reveal');
            
            reveals.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        }

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

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(0, 0, 0, 0.98)';
            } else {
                header.style.background = 'rgba(0, 0, 0, 0.95)';
            }
            
            revealOnScroll();
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            createFloatingCubes();
            revealOnScroll();
        });

        // Add interactive hover effects
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            });
            
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Hamburger menu toggle for mobile nav
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('open');
            // Animate hamburger icon
            if (hamburger.classList.contains('open')) {
                hamburger.children[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                hamburger.children[1].style.opacity = '0';
                hamburger.children[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
            } else {
                hamburger.children[0].style.transform = '';
                hamburger.children[1].style.opacity = '1';
                hamburger.children[2].style.transform = '';
            }
        });
 
    function toggleMobileMenu() {
        const navLinks = document.getElementById("navLinks");
        navLinks.classList.toggle("active");
    }
let slideIndex = 1;
let slideInterval;

// Auto-start slideshow when page loads
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
    startAutoSlide();
});

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex = n);
    startAutoSlide();
}

function showSlides(n) {
    let slides = document.querySelector('.companies-slideshow');
    let dots = document.querySelectorAll('.dot');
    
    if (!slides || !dots.length) return;
    
    if (n > dots.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = dots.length; }
    
    // Move the slideshow
    slides.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add('active');
    }
}

function nextSlide() {
    slideIndex++;
    if (slideIndex > document.querySelectorAll('.dot').length) {
        slideIndex = 1;
    }
    showSlides(slideIndex);
}

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

// Pause on hover
document.querySelector('.companies-slideshow-container')?.addEventListener('mouseenter', function() {
    clearInterval(slideInterval);
});

document.querySelector('.companies-slideshow-container')?.addEventListener('mouseleave', function() {
    startAutoSlide();
});
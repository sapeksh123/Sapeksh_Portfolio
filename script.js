// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);

// Update icon based on current theme
function updateThemeIcon() {
  const icon = themeToggle?.querySelector('i');
  if (icon) {
    const theme = htmlElement.getAttribute('data-theme');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
  }
}

if (themeToggle) {
  updateThemeIcon();
  
  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
  });
}

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
  mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  // Close menu when clicking on a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      mobileMenu.classList.remove('active');
    }
  });
}

// Update year in footer
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const msgElement = document.getElementById('msg');
    
    const params = {
      name: name,
      email: email,
      message: message
    };
    
    emailjs.send("service_sv6124", "template_gonvlm5", params)
      .then(() => {
        msgElement.textContent = "Message sent successfully!";
        msgElement.classList.add('success');
        contactForm.reset();
        
        setTimeout(() => {
          msgElement.classList.remove('success');
        }, 5000);
      })
      .catch((error) => {
        console.error('Error:', error);
        msgElement.textContent = "Failed to send message. Please try again.";
        msgElement.classList.add('success');
        
        setTimeout(() => {
          msgElement.classList.remove('success');
        }, 5000);
      });
  });
}

// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.reveal');
if (revealElements.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.getAttribute('data-delay') || '0s';
        el.style.setProperty('--reveal-delay', delay);
        el.classList.add('visible');
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((el) => observer.observe(el));
}

// Preloader
const preloaderEl = document.getElementById('preloader');
window.addEventListener('load', () => {
  if (preloaderEl) {
    setTimeout(() => {
      preloaderEl.classList.add('hide');
    }, 500);
  }
});

// Hero Parallax
const heroImg = document.querySelector('.hero-image img');
let rafId = null;
window.addEventListener('mousemove', (e) => {
  if (!heroImg) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 8;
  const y = (e.clientY / window.innerHeight - 0.5) * 8;
  if (rafId) cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(() => {
    heroImg.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Custom Cursor (Desktop only) - Simplified
if (window.innerWidth > 1024) {
  const cursorDot = document.createElement('div');
  const cursorOutline = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  cursorOutline.className = 'cursor-outline';
  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorOutline);

  let mouseX = 0, mouseY = 0;
  let outlineX = 0, outlineY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
  });

  function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;
    cursorOutline.style.left = outlineX - 15 + 'px';
    cursorOutline.style.top = outlineY - 15 + 'px';
    requestAnimationFrame(animateOutline);
  }
  animateOutline();

  // Cursor hover effects
  const hoverElements = document.querySelectorAll('a, button, .btn, .skill-tag, .tech-stack span');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorDot.classList.add('hover');
      cursorOutline.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursorDot.classList.remove('hover');
      cursorOutline.classList.remove('hover');
    });
  });
}

// Smooth reveal on scroll with stagger
const revealElementsStagger = document.querySelectorAll('.reveal-left, .reveal-right');
if (revealElementsStagger.length) {
  const observerStagger = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
        observerStagger.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElementsStagger.forEach((el) => observerStagger.observe(el));
}

// Add loading animation to images
const images = document.querySelectorAll('img');
images.forEach(img => {
  img.style.opacity = '0';
  img.style.transition = 'opacity 0.5s ease';
  
  if (img.complete) {
    img.style.opacity = '1';
  } else {
    img.addEventListener('load', () => {
      img.style.opacity = '1';
    });
  }
});

// Removed typing effect - too distracting

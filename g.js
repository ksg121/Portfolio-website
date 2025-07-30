// DOM Elements
const navbar = document.getElementById('navbar');
const scrollProgress = document.querySelector('.scroll-progress');
const navLinks = document.querySelectorAll('.nav-links a');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const timelineBtns = document.querySelectorAll('.timeline-btn');
const timelines = document.querySelectorAll('.timeline');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const achievementFilterBtns = document.querySelectorAll('.achievement-filter-btn');
const achievementCards = document.querySelectorAll('.achievement-card');
const progressBars = document.querySelectorAll('.progress');
const backToTop = document.querySelector('.back-to-top');
const cursorOuter = document.querySelector('.cursor-outer');
const cursorInner = document.querySelector('.cursor-inner');
const downloadCV = document.getElementById('downloadCV');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');
const modal = document.getElementById('certificateModal');
const modalImg = document.getElementById('certificateModalImg');
const modalCaption = document.getElementById('certificateCaption');
const closeModal = document.querySelector('.close-modal');
const downloadModalBtn = document.getElementById('downloadModalCertificate');
const viewCertificateBtns = document.querySelectorAll('.view-certificate-btn');
const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');
const servicesSlider = document.querySelector('.services-slider');
const sliderDots = document.querySelector('.slider-dots');

// Typing Animation
const typingEffect = () => {
  const texts = ["Full Stack Developer", "Frontend Specialist", "Backend Developer", "UI/UX Designer"];
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");
  
  if (!typedTextSpan || !cursorSpan) return;
  
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTextSpan.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }
    
    // Add cursor blinking effect
    cursorSpan.classList.toggle('typing');
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    // If complete, start deleting
    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      typeSpeed = 1000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typeSpeed = 500; // Pause before typing next text
    }
    
    setTimeout(type, typeSpeed);
  }
  
  setTimeout(type, 1000);
};

// Particles Animation
const createParticles = () => {
  const particles = document.querySelector('.particles');
  if (!particles) return;
  
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random positioning
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const size = Math.random() * 5 + 2;
    
    // Random color (blue or green shades)
    const colors = ['rgba(66, 133, 244, 0.3)', 'rgba(52, 168, 83, 0.3)'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Apply styles
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = color;
    
    // Animation duration and delay
    const duration = Math.random() * 10 + 5;
    const delay = Math.random() * 5;
    
    particle.style.animation = `float ${duration}s ${delay}s infinite alternate`;
    
    particles.appendChild(particle);
  }
};

// Scroll Progress
const updateScrollProgress = () => {
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (window.pageYOffset / totalHeight) * 100;
  if (scrollProgress) {
    scrollProgress.style.width = `${progress}%`;
  }
  
  // Show/hide back to top button
  if (backToTop) {
    if (window.pageYOffset > 500) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  }
  
  // Update active nav link
  const sections = document.querySelectorAll('section');
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
};

// Mobile Menu Toggle
const toggleMobileMenu = () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
};

// Tab Functionality
const switchTab = (e) => {
  const targetTab = e.currentTarget.getAttribute('data-target');
  
  tabBtns.forEach(btn => btn.classList.remove('active'));
  e.currentTarget.classList.add('active');
  
  tabContents.forEach(content => {
    content.classList.remove('active');
    if (content.id === targetTab) {
      content.classList.add('active');
    }
  });
};

// Timeline Functionality
const switchTimeline = (e) => {
  const targetTimeline = e.currentTarget.getAttribute('data-target');
  
  timelineBtns.forEach(btn => btn.classList.remove('active'));
  e.currentTarget.classList.add('active');
  
  timelines.forEach(timeline => {
    timeline.classList.remove('active');
    if (timeline.id === targetTimeline) {
      timeline.classList.add('active');
    }
  });
};

// Project Filtering
const filterProjects = (e) => {
  const filter = e.currentTarget.getAttribute('data-filter');
  
  filterBtns.forEach(btn => btn.classList.remove('active'));
  e.currentTarget.classList.add('active');
  
  projectCards.forEach(card => {
    const category = card.getAttribute('data-category');
    
    if (filter === 'all' || category === filter) {
      card.style.display = 'block';
      setTimeout(() => card.style.opacity = '1', 10);
    } else {
      card.style.opacity = '0';
      setTimeout(() => card.style.display = 'none', 300);
    }
  });
};

// Achievement Filtering
const filterAchievements = (e) => {
  const filter = e.currentTarget.getAttribute('data-filter');
  
  achievementFilterBtns.forEach(btn => btn.classList.remove('active'));
  e.currentTarget.classList.add('active');
  
  achievementCards.forEach(card => {
    const category = card.getAttribute('data-category');
    
    if (filter === 'all' || category === filter) {
      card.style.display = 'flex';
      setTimeout(() => card.style.opacity = '1', 10);
    } else {
      card.style.opacity = '0';
      setTimeout(() => card.style.display = 'none', 300);
    }
  });
};

// Progress Bar Animation
const animateProgressBars = () => {
  progressBars.forEach(bar => {
    const value = bar.getAttribute('data-value');
    setTimeout(() => {
      bar.style.width = `${value}%`;
    }, 500);
  });
};

// Custom Cursor
const moveCursor = (e) => {
  if (cursorOuter && cursorInner) {
    cursorOuter.style.left = `${e.clientX}px`;
    cursorOuter.style.top = `${e.clientY}px`;
    cursorInner.style.left = `${e.clientX}px`;
    cursorInner.style.top = `${e.clientY}px`;
  }
};

const addLinkHoverEffect = () => {
  if (!cursorOuter) return;
  
  document.body.addEventListener('mouseover', e => {
    if (e.target.tagName === 'A' || e.target.closest('a')) {
      cursorOuter.classList.add('link-hover');
    }
    if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
      cursorOuter.classList.add('link-hover');
    }
  });
  
  document.body.addEventListener('mouseout', e => {
    if (e.target.tagName === 'A' || e.target.closest('a')) {
      cursorOuter.classList.remove('link-hover');
    }
    if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
      cursorOuter.classList.remove('link-hover');
    }
  });
};

const showCursor = () => {
  if (cursorOuter && cursorInner) {
    cursorOuter.style.opacity = '1';
    cursorInner.style.opacity = '1';
  }
};

const hideCursor = () => {
  if (cursorOuter && cursorInner) {
    cursorOuter.style.opacity = '0';
    cursorInner.style.opacity = '0';
  }
};

// Download CV
const handleDownloadCV = (e) => {
  e.preventDefault();
  
  // Replace with your actual CV file URL
  const cvUrl = 'Main Resume Shivam.pdf';
  
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = cvUrl;
  link.download = 'Kumar_Shivam_CV.pdf';
  
  // Simulate a click to trigger the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Show a notification
  showNotification('success', 'CV Download', 'Your CV is downloading...');
};

// Contact Form Submission
const handleContactFormSubmit = (e) => {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Basic validation
  if (!name || !email || !subject || !message) {
    showNotification('error', 'Contact Form', 'Please fill in all fields.');
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showNotification('error', 'Contact Form', 'Please enter a valid email address.');
    return;
  }
  
  // Here you would typically send the data to a server
  // For demonstration, we'll simulate a successful submission
  setTimeout(() => {
    showNotification('success', 'Contact Form', 'Message sent successfully!');
    contactForm.reset();
  }, 1500);
};

// Newsletter Form Submission
const handleNewsletterFormSubmit = (e) => {
  e.preventDefault();
  
  // Get email value
  const email = document.getElementById('newsletter-email').value;
  
  // Basic validation
  if (!email) {
    showNotification('error', 'Newsletter', 'Please enter your email.');
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showNotification('error', 'Newsletter', 'Please enter a valid email address.');
    return;
  }
  
  // Here you would typically send the data to a server
  // For demonstration, we'll simulate a successful submission
  setTimeout(() => {
    showNotification('success', 'Newsletter', 'Thank you for subscribing!');
    newsletterForm.reset();
  }, 1500);
};

// Notification Function
const showNotification = (type, title, message) => {
  const notificationContainer = document.querySelector('.notification-container');
  if (!notificationContainer) return;
  
  const notification = document.createElement('div');
  notification.className = `notification \${type}`;
  
  notification.innerHTML = `
    <div class="notification-icon">
      <i class="fas fa-\${type === 'success' ? 'check-circle' : 'exclamation-triangle'}"></i>
    </div>
    <div class="notification-content">
      <h4>\${title}</h4>
      <p>\${message}</p>
    </div>
    <span class="notification-close">&times;</span>
  `;
  
  notificationContainer.appendChild(notification);
  
  // Close button functionality
  notification.querySelector('.notification-close').addEventListener('click', () => {
    notification.style.opacity = '0';
    setTimeout(() => notification.remove(), 300);
  });
  
  // Auto-close after 5 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => notification.remove(), 300);
  }, 5000);
};

// Certificate Modal Functionality
const openModal = (e) => {
  if (!modal || !modalImg || !modalCaption) return;
  
  const certificateImg = e.currentTarget.closest('.certificate-overlay').previousElementSibling;
  const certificateSrc = certificateImg.src;
  const certificateAlt = certificateImg.alt;
  const downloadLink = e.currentTarget.parentElement.querySelector('.download-certificate-btn');
  
  modal.style.display = "block";
  modalImg.src = certificateSrc;
  modalCaption.innerHTML = certificateAlt;
  
  if (downloadLink && downloadModalBtn) {
    downloadModalBtn.href = downloadLink.href;
    downloadModalBtn.style.display = "inline-block";
  } else if (downloadModalBtn) {
    downloadModalBtn.style.display = "none";
  }
};

const closeModalHandler = () => {
  if (modal) modal.style.display = "none";
};

// Service Slider Functionality
const initializeSlider = () => {
  if (!servicesSlider || !sliderDots) return;
  
  const serviceCards = document.querySelectorAll('.service-card');
  if (serviceCards.length === 0) return;
  
  const cardWidth = serviceCards[0].offsetWidth + 30; // width + gap
  const visibleCards = Math.floor(servicesSlider.offsetWidth / cardWidth);
  const totalSlides = Math.ceil(serviceCards.length / visibleCards);
  let currentSlide = 0;
  
  // Create dots
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (i === 0) dot.classList.add('active');
    
    dot.addEventListener('click', () => {
      goToSlide(i);
    });
    
    sliderDots.appendChild(dot);
  }
  
  // Go to specific slide
  function goToSlide(index) {
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;
    
    currentSlide = index;
    const scrollAmount = index * visibleCards * cardWidth;
    servicesSlider.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
    
    updateDots();
  }
  
  // Update dots based on current slide
  function updateDots() {
    const dots = sliderDots.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
  
  // Previous and Next buttons
  if (sliderPrev) {
    sliderPrev.addEventListener('click', () => {
      goToSlide(currentSlide - 1);
    });
  }
  
  if (sliderNext) {
    sliderNext.addEventListener('click', () => {
      goToSlide(currentSlide + 1);
    });
  }
  
  // Handle scroll events to update dots
  servicesSlider.addEventListener('scroll', () => {
    const scrollPosition = servicesSlider.scrollLeft;
    const newSlide = Math.round(scrollPosition / (visibleCards * cardWidth));
    
    if (newSlide !== currentSlide) {
      currentSlide = newSlide;
      updateDots();
    }
  });
};

// Smooth scrolling for navigation links
const smoothScrolling = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Close mobile menu if open
      if (navMenu && navMenu.classList.contains('active')) {
        toggleMobileMenu();
      }
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const targetPosition = targetElement.offsetTop - 80; // Adjust for navbar height
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
};

// Intersection Observer for animations
const setupIntersectionObserver = () => {
  const options = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const animateElements = document.querySelectorAll(
    '.skill-box, .service-card, .project-card, .achievement-card, .timeline-item, .contact-card'
  );
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  animateElements.forEach(element => {
    observer.observe(element);
  });
  
  // Separate observer for progress bars
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const value = entry.target.getAttribute('data-value');
        entry.target.style.width = `${value}%`;
        progressObserver.unobserve(entry.target);
      }
    });
  }, options);
  
  progressBars.forEach(bar => {
    progressObserver.observe(bar);
  });
};

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  typingEffect();
  createParticles();
  setupIntersectionObserver();
  smoothScrolling();
  initializeSlider();
  
  // Add event listeners
  if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
  }
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', switchTab);
  });
  
  timelineBtns.forEach(btn => {
    btn.addEventListener('click', switchTimeline);
  });
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', filterProjects);
  });
  
  achievementFilterBtns.forEach(btn => {
    btn.addEventListener('click', filterAchievements);
  });
  
  document.addEventListener('mousemove', moveCursor);
  document.addEventListener('mouseenter', showCursor);
  document.addEventListener('mouseleave', hideCursor);
  addLinkHoverEffect();
  
  if (downloadCV) {
    downloadCV.addEventListener('click', handleDownloadCV);
  }
  
  
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', handleNewsletterFormSubmit);
  }
  
  viewCertificateBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
  });
  
  if (closeModal) {
    closeModal.addEventListener('click', closeModalHandler);
  }
  
  if (modal) {
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModalHandler();
      }
    });
  }
  
  // Form input animation
  

  // Add CSS for animation classes
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
    
    .particle {
      position: absolute;
      border-radius: 50%;
      animation: float 10s infinite alternate;
      pointer-events: none;
    }
  `;
  
  document.head.appendChild(style);
});

// Scroll event listener
window.addEventListener('scroll', () => {
  updateScrollProgress();
  
  // Add class to navbar when scrolled
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// Resize event listener
window.addEventListener('resize', () => {
  if (servicesSlider && sliderDots) {
    // Clear existing dots
    sliderDots.innerHTML = '';
    // Reinitialize slider with new dimensions
    initializeSlider();
  }
});

// Parallax effect for home section
const initParallax = () => {
  const homeSection = document.getElementById('home');
  if (!homeSection) return;
  
  const shapes = document.querySelectorAll('.home-shapes .shape');
  
  window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    shapes.forEach(shape => {
      const speedX = shape.offsetWidth * 0.05;
      const speedY = shape.offsetHeight * 0.05;
      
      const moveX = (x - 0.5) * speedX;
      const moveY = (y - 0.5) * speedY;
      
      shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  });
};

// Initialize parallax effect
initParallax();

// Theme toggle functionality (optional, since we're in dark mode only)
const addThemeToggle = () => {
  // Create a theme toggle button
  const themeToggle = document.createElement('button');
  themeToggle.className = 'theme-toggle';
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  themeToggle.title = 'Toggle Light Mode (Currently Dark Mode)';
  
  // Add styles for the toggle button
  const toggleStyle = document.createElement('style');
  toggleStyle.textContent = `
    .theme-toggle {
      position: fixed;
      bottom: 30px;
      left: 30px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(135deg, #4285f4, #34a853);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      z-index: 99;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .theme-toggle:hover {
      transform: scale(1.1);
    }
  `;
  
  document.head.appendChild(toggleStyle);
  document.body.appendChild(themeToggle);
  
  // Since we're in dark mode only, clicking the button shows a notification
  themeToggle.addEventListener('click', () => {
    showNotification('info', 'Dark Mode Only', 'This portfolio is designed to be viewed in dark mode only.');
  });
};

// Initialize theme toggle
// addThemeToggle(); // Commented out as per requirement of dark mode only

// Additional animation for skill icons
const animateSkillIcons = () => {
  const skillIcons = document.querySelectorAll('.skill-icon');
  
  skillIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'scale(1.2) rotate(10deg)';
      icon.style.transition = 'transform 0.3s ease';
    });
    
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'scale(1) rotate(0deg)';
    });
  });
};

// Initialize skill icon animations
animateSkillIcons();

// Project details modal
const initProjectDetailsModal = () => {
  const projectBtns = document.querySelectorAll('.project-btn');
  
  projectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Get project details
      const projectCard = btn.closest('.project-card');
      const projectTitle = projectCard.querySelector('h3').textContent;
      const projectDesc = projectCard.querySelector('p').textContent;
      const projectImg = projectCard.querySelector('img').src;
      const projectTags = Array.from(projectCard.querySelectorAll('.project-tags span')).map(span => span.textContent);
      
      // Create modal
      const projectModal = document.createElement('div');
      projectModal.className = 'project-modal';
      projectModal.innerHTML = `
        <div class="project-modal-content">
          <span class="close-project-modal">&times;</span>
          <div class="project-modal-header">
            <h2>${projectTitle}</h2>
            <div class="project-modal-tags">
              ${projectTags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
          </div>
          <div class="project-modal-body">
            <div class="project-modal-img">
              <img src="${projectImg}" alt="${projectTitle}">
            </div>
            <div class="project-modal-desc">
              <h3>Project Description</h3>
              <p>${projectDesc}</p>
              <h3>Technical Details</h3>
              <p>This project was built using the following technologies:</p>
              <ul>
                ${projectTags.map(tag => `<li>${tag}</li>`).join('')}
              </ul>
              <h3>Challenges & Solutions</h3>
              <p>One of the main challenges in this project was implementing responsive design across all devices. This was solved by using a mobile-first approach and carefully testing on various screen sizes.</p>
            </div>
          </div>
          <div class="project-modal-footer">
            <a href="#" class="btn primary-btn">Live Demo</a>
            <a href="#" class="btn secondary-btn">View Code</a>
          </div>
        </div>
      `;
      
      // Add modal styles
      const modalStyle = document.createElement('style');
      modalStyle.textContent = `
        .project-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          overflow-y: auto;
        }
        
        .project-modal-content {
          background-color: var(--dark-bg);
          border-radius: 10px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }
        
        .close-project-modal {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 30px;
          color: var(--dark-text);
          cursor: pointer;
          z-index: 1;
        }
        
        .project-modal-header {
          padding: 20px;
          border-bottom: 1px solid var(--dark-border);
        }
        
        .project-modal-header h2 {
          font-size: 1.8rem;
          margin-bottom: 15px;
          color: var(--dark-text);
        }
        
        .project-modal-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .project-modal-tags span {
          padding: 5px 10px;
          background-color: var(--dark-bg-light);
          border-radius: 50px;
          font-size: 0.8rem;
          color: var(--dark-text-light);
        }
        
        .project-modal-body {
          padding: 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        .project-modal-img img {
          width: 100%;
          border-radius: 5px;
        }
        
        .project-modal-desc h3 {
          font-size: 1.3rem;
          margin-bottom: 10px;
          margin-top: 20px;
          color: var(--dark-text);
        }
        
        .project-modal-desc h3:first-child {
          margin-top: 0;
        }
        
        .project-modal-desc p, .project-modal-desc ul {
          color: var(--dark-text-light);
          margin-bottom: 15px;
        }
        
        .project-modal-desc ul {
          padding-left: 20px;
        }
        
        .project-modal-desc li {
          margin-bottom: 5px;
        }
        
        .project-modal-footer {
          padding: 20px;
          border-top: 1px solid var(--dark-border);
          display: flex;
          justify-content: flex-end;
          gap: 15px;
        }
        
        @media (max-width: 768px) {
          .project-modal-body {
            grid-template-columns: 1fr;
          }
        }
      `;
      
      document.head.appendChild(modalStyle);
      document.body.appendChild(projectModal);
      
      // Prevent body scrolling
      document.body.style.overflow = 'hidden';
      
      // Close modal functionality
      const closeProjectModal = projectModal.querySelector('.close-project-modal');
      closeProjectModal.addEventListener('click', () => {
        projectModal.remove();
        document.body.style.overflow = '';
      });
      
      // Close when clicking outside
      projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
          projectModal.remove();
          document.body.style.overflow = '';
        }
      });
    });
  });
};
    
    

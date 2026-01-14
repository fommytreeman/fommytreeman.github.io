// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Project data with placeholder images and info
    const projectsData = {
        1: {
            title: "Project Title 1",
            description: "This is a detailed description of Project 1. It showcases various features and technologies used in the development. The project demonstrates problem-solving skills and technical expertise.",
            images: [
                "https://via.placeholder.com/800x600/2563eb/ffffff?text=Project+1+Image+1",
                "https://via.placeholder.com/800x600/1e40af/ffffff?text=Project+1+Image+2",
                "https://via.placeholder.com/800x600/3b82f6/ffffff?text=Project+1+Image+3",
                "https://via.placeholder.com/800x600/60a5fa/ffffff?text=Project+1+Image+4"
            ],
            github: "https://github.com/fommytreeman/project1"
        },
        2: {
            title: "Project Title 2",
            description: "This is a detailed description of Project 2. It highlights the innovative approach and creative solutions implemented. The project demonstrates full-stack development capabilities.",
            images: [
                "https://via.placeholder.com/800x600/1e40af/ffffff?text=Project+2+Image+1",
                "https://via.placeholder.com/800x600/2563eb/ffffff?text=Project+2+Image+2",
                "https://via.placeholder.com/800x600/60a5fa/ffffff?text=Project+2+Image+3",
                "https://via.placeholder.com/800x600/3b82f6/ffffff?text=Project+2+Image+4"
            ],
            github: "https://github.com/fommytreeman/project2"
        },
        3: {
            title: "Project Title 3",
            description: "This is a detailed description of Project 3. It demonstrates advanced programming techniques and best practices. The project showcases ability to work with complex systems and architectures.",
            images: [
                "https://via.placeholder.com/800x600/3b82f6/ffffff?text=Project+3+Image+1",
                "https://via.placeholder.com/800x600/60a5fa/ffffff?text=Project+3+Image+2",
                "https://via.placeholder.com/800x600/2563eb/ffffff?text=Project+3+Image+3",
                "https://via.placeholder.com/800x600/1e40af/ffffff?text=Project+3+Image+4"
            ],
            github: "https://github.com/fommytreeman/project3"
        }
    };

    let currentProject = null;
    let currentImageIndex = 0;
    let carouselInterval = null;

    // Modal elements
    const modal = document.getElementById('projectModal');
    const modalClose = document.querySelector('.modal-close');
    const carouselImage = document.querySelector('.carousel-image');
    const carouselDotsContainer = document.querySelector('.carousel-dots');
    const modalTitle = document.querySelector('.modal-title');
    const modalDescription = document.querySelector('.modal-description');
    const modalGithub = document.querySelector('.modal-github');

    // Open modal when project card is clicked
    document.querySelectorAll('.project-card[data-project]').forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            openModal(projectId);
        });
    });

    function openModal(projectId) {
        currentProject = projectsData[projectId];
        if (!currentProject) return;

        currentImageIndex = 0;
        
        // Set modal content
        modalTitle.textContent = currentProject.title;
        modalDescription.textContent = currentProject.description;
        modalGithub.href = currentProject.github;

        // Create carousel dots
        carouselDotsContainer.innerHTML = '';
        currentProject.images.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToImage(index));
            carouselDotsContainer.appendChild(dot);
        });

        // Show first image
        updateCarouselImage();

        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Start auto-rotation
        startCarousel();
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        stopCarousel();
    }

    function updateCarouselImage() {
        if (!currentProject) return;
        
        carouselImage.src = currentProject.images[currentImageIndex];
        
        // Update dots
        const dots = carouselDotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentImageIndex);
        });
    }

    function goToImage(index) {
        currentImageIndex = index;
        updateCarouselImage();
        
        // Reset auto-rotation timer
        stopCarousel();
        startCarousel();
    }

    function nextImage() {
        if (!currentProject) return;
        currentImageIndex = (currentImageIndex + 1) % currentProject.images.length;
        updateCarouselImage();
    }

    function startCarousel() {
        stopCarousel();
        carouselInterval = setInterval(nextImage, 10000); // 10 seconds
    }

    function stopCarousel() {
        if (carouselInterval) {
            clearInterval(carouselInterval);
            carouselInterval = null;
        }
    }

    // Close modal events
    modalClose.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
        observer.observe(section);
    });

    // Hero section should be visible immediately
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }

    // Highlight active nav link on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        let current = '';
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const navHeight = document.querySelector('.navbar').offsetHeight;
            
            if (scrollPosition >= (sectionTop - navHeight - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});

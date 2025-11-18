// Main JavaScript file for portfolio website

// Global Header Component
function initializeHeader(pathPrefix = '') {
    const header = document.querySelector('header');
    if (!header) return;

    header.innerHTML = `
        <nav>
            <div class="nav-container">
                <a href="${pathPrefix}index.html" class="logo">BC</a>
                <div class="nav-right">
                    <ul class="nav-links">
                        <li><a href="${pathPrefix}projects.html" class="nav-link-projects">Projects</a></li>
                    </ul>
                    <button id="darkModeToggle" class="dark-mode-toggle" aria-label="Toggle dark mode">
                        <span class="toggle-icon">🌙</span>
                    </button>
                </div>
            </div>
        </nav>
    `;

    // Highlight active page
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'projects.html' || currentPage.includes('demo.html')) {
        const projectsLink = header.querySelector('.nav-link-projects');
        if (projectsLink) projectsLink.classList.add('active');
    }
}

// Dark Mode Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize header first (reads pathPrefix from data attribute if set)
    const header = document.querySelector('header');
    const pathPrefix = header ? (header.dataset.pathPrefix || '') : '';
    initializeHeader(pathPrefix);
    // Check for saved dark mode preference
    const darkModeToggle = document.getElementById('darkModeToggle');
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // Apply saved preference
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        updateToggleIcon(true);
    }

    // Toggle dark mode
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const isEnabled = document.body.classList.contains('dark-mode');

            // Save preference
            localStorage.setItem('darkMode', isEnabled ? 'enabled' : 'disabled');

            // Update icon
            updateToggleIcon(isEnabled);
        });
    }

    function updateToggleIcon(isDark) {
        const icon = document.querySelector('.toggle-icon');
        if (icon) {
            icon.textContent = isDark ? '☀️' : '🌙';
        }
    }

    // Add smooth scrolling for anchor links
    // Smooth scroll for all anchor links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only process if it's a hash link
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add fade-in animation for cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards for animation
    const cards = document.querySelectorAll('.info-card, .project-card, .timeline-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

// You can add more interactive functionality here as needed
// For example: form validation, dynamic content loading, etc.

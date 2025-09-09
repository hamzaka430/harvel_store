// Mobile menu toggle functionality
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.main-menu').classList.toggle('active');
});

// Enhanced dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdownTriggers = document.querySelectorAll('.menu-btn');
    
    dropdownTriggers.forEach(function(trigger) {
        const dropdown = trigger.querySelector('.dropdown-content');
        
        if (dropdown) {
            let hoverTimeout;
            
            // Check if we're on mobile
            function isMobile() {
                return window.innerWidth <= 768;
            }
            
            // Desktop hover functionality
            if (!isMobile()) {
                // Show dropdown on hover
                trigger.addEventListener('mouseenter', function() {
                    clearTimeout(hoverTimeout);
                    dropdown.style.display = 'block';
                    setTimeout(function() {
                        dropdown.style.opacity = '1';
                        dropdown.style.transform = 'translateY(0)';
                    }, 10);
                });
                
                // Hide dropdown on mouse leave with delay
                trigger.addEventListener('mouseleave', function() {
                    hoverTimeout = setTimeout(function() {
                        dropdown.style.opacity = '0';
                        dropdown.style.transform = 'translateY(-10px)';
                        setTimeout(function() {
                            dropdown.style.display = 'none';
                        }, 300);
                    }, 100);
                });
                
                // Prevent dropdown from closing when hovering over it
                dropdown.addEventListener('mouseenter', function() {
                    clearTimeout(hoverTimeout);
                });
                
                dropdown.addEventListener('mouseleave', function() {
                    hoverTimeout = setTimeout(function() {
                        dropdown.style.opacity = '0';
                        dropdown.style.transform = 'translateY(-10px)';
                        setTimeout(function() {
                            dropdown.style.display = 'none';
                        }, 300);
                    }, 100);
                });
            }
            
            // Mobile click functionality
            const triggerLink = trigger.querySelector('a[href="#"]');
            if (triggerLink) {
                triggerLink.addEventListener('click', function(e) {
                    if (isMobile()) {
                        e.preventDefault();
                        trigger.classList.toggle('active');
                        if (trigger.classList.contains('active')) {
                            dropdown.style.display = 'block';
                        } else {
                            dropdown.style.display = 'none';
                        }
                    }
                });
            }
        }
    });
    
    // Close dropdown when clicking outside (desktop only)
    document.addEventListener('click', function(event) {
        if (!isMobile()) {
            const isClickInsideDropdown = event.target.closest('.menu-btn');
            if (!isClickInsideDropdown) {
                document.querySelectorAll('.dropdown-content').forEach(function(dropdown) {
                    dropdown.style.opacity = '0';
                    dropdown.style.transform = 'translateY(-10px)';
                    setTimeout(function() {
                        dropdown.style.display = 'none';
                    }, 300);
                });
            }
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(function(dropdown) {
            dropdown.style.display = 'none';
            dropdown.style.opacity = '';
            dropdown.style.transform = '';
        });
        
        // Remove active classes on resize
        document.querySelectorAll('.menu-btn').forEach(function(btn) {
            btn.classList.remove('active');
        });
    });
    
    function isMobile() {
        return window.innerWidth <= 768;
    }
});
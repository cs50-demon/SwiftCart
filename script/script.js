
// Scroll animation for stat items
document.addEventListener('DOMContentLoaded', () => {
    const statItems = document.querySelectorAll('.stat-item');
    
    // Check if an element is in the viewport
    function isInView(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    // Function to add the 'visible' class when the item is in view
    function animateStats() {
        statItems.forEach(item => {
            if (isInView(item)) {
                item.classList.add('visible');
            }
        });
    }

    // Run the animation function when scrolling
    window.addEventListener('scroll', animateStats);
    
    // Initial check to animate elements that are already in view
    animateStats();
});


// Hamburger menu toggle function
function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
  }
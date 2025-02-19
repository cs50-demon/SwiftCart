
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

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
  
      // Get form values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();
  
      // Email regex pattern
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
      // Validation checks
      if (name === "" || email === "" || message === "") {
        alert("⚠️ Please fill in all required fields.");
        return;
      }
  
      if (!emailPattern.test(email)) {
        alert("⚠️ Please enter a valid email address.");
        return;
      }
  
      // Show success message
      successMessage.style.display = "block";
  
      // Clear form fields
      form.reset();
    });
  });
  
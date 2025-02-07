document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".menu");

    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

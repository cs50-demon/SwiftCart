document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".menu");
    const categories = document.querySelectorAll(".categories li");

    mobileMenu.addEventListener("click", () => {
        categories.forEach((category , e) => {
           category.addEventListener("click", (e) => {
               console.log(e.target.innerText)
           });
        });
        navLinks.classList.toggle("active");
    });
});

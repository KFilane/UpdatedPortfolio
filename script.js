document.addEventListener("DOMContentLoaded", function() {
    const toggleNavButton = document.getElementById("toggleNav");
    const nav = document.querySelector("nav");

    toggleNavButton.addEventListener("click", function() {
        nav.classList.toggle("active");
    });
});

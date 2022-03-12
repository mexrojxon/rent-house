// Animated JS
const navAnim = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLink = document.querySelectorAll('.nav-links li ')

    // Toggle Nav
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active")
    burger.classList.toggle("toggle");
})


};
navAnim();
const menuMobile = document.querySelector(".menu-mobile")
const navbar = document.querySelector(".navbar")

menuMobile.addEventListener("click", () => {
    navbar.classList.toggle("active")
})
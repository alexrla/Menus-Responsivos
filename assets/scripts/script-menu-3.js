const mobileMenu = document.querySelector(".mobile-menu")
const navList = document.querySelector(".nav-list")
const navLinks = document.querySelectorAll(".nav-link")

mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
    navList.classList.toggle("active")
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active")
        navList.classList.remove("active")
    })
})

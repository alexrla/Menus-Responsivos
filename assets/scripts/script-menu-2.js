const mobileMenu = document.querySelector(".mobile-menu")
const navList = document.querySelector(".nav-list")
const navItems = document.querySelectorAll(".nav-item")

mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")

    navList.classList.toggle("active")

    navItems.forEach((item, index) => {
        item.style.animation
        ? (item.style.animation = "")
        : (item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
    })
})

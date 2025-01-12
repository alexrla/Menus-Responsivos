navbar = document.querySelector(".navbar");

function showMenu() {
    navbar.style.width = "100%"
}

function closeMenu() {
    navbar.style.width = "0"
}

navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.style.width = "0"
    })
})

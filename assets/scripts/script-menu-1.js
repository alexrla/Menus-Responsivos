function showMenu() {
    const mobileMenu = document.querySelector(".mobile-menu")
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon")

    if(mobileMenu.classList.contains("open")) {
        mobileMenu.classList.remove("open")
        mobileMenuIcon.setAttribute("src", "../assets/imgs/menu-svgrepo-com.svg")
    } else {
        mobileMenu.classList.add("open")
        mobileMenuIcon.setAttribute("src", "../assets/imgs/xmark-svgrepo-com.svg")
    }
}

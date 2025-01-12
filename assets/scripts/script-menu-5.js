const navList = document.querySelector(".nav-list")
const icon = document.querySelector(".icon")

/*
function showMenu2() {
    if(navList.style.height == "0px") {
        navList.style.height = "calc(100vh - 70px)"
        icon.setAttribute("src", "../assets/imgs/xmark-svgrepo-com.svg")
    }   else {
        navList.style.height = "0px"
        icon.setAttribute("src", "../assets/imgs/menu-svgrepo-com.svg")
    }
}
*/

function showMenu() {
    if(navList.classList.contains("open")) {
        navList.classList.remove("open")
        icon.setAttribute("src", "../assets/imgs/menu-svgrepo-com.svg")
    }   else {
        navList.classList.add("open")
        icon.setAttribute("src", "../assets/imgs/xmark-svgrepo-com.svg")
    }
}
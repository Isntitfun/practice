// dynamic date =================================================
const date = document.querySelector("#date")

date.innerHTML = new Date().getFullYear()
// dynamic date end =============================================

// link toggle ==================================================
const navToggle = document.querySelector(".nav-toggle button")
const menuContainer = document.querySelector(".menu-container")
const menu = document.querySelector(".menu")
const navContainer = document.querySelector(".nav-container")
const navSection = document.querySelector(".nav")
const banner = document.querySelector(".banner-container")

const resizeBanner = (h) =>{
    banner.style.height = `calc(100vh - 90px - ${h}px)`
}

const handleNavToggleClick = () => {
    const menuHeight = menu.getBoundingClientRect().height
    const menuContainerHeight = menuContainer.getBoundingClientRect().height
    if(menuContainerHeight === 0) {
        menuContainer.style.height = `${menuHeight}px`
        navContainer.style.background = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0))`

    } else {
        menuContainer.style.height = 0
        navContainer.style.background = `transparent`
    }


}

navToggle.addEventListener("click", handleNavToggleClick)
// link toggle end ==============================================

// dynamic date =================================================
const date = document.querySelector("#date")

date.innerHTML = new Date().getFullYear()
// dynamic date end =============================================

// link toggle ==================================================
const navToggle = document.querySelector(".nav-toggle button")
const menuContainer = document.querySelector(".menu-container")
const menu = document.querySelector(".menu")
const section = document.querySelector("section")
const sectionContainer = document.querySelectorAll(".section-container")
const navContainer = document.querySelector(".nav-container")
const navSection = document.querySelector(".nav")
const banner = document.querySelector(".banner-container")

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

const handleSectionClick = () =>{
    menuContainer.style.height = 0
    navContainer.style.background = `transparent`
}

navToggle.addEventListener("click", handleNavToggleClick)
section.addEventListener("click", handleSectionClick)
sectionContainer.forEach(item => {
    item.addEventListener("click", handleSectionClick)
}
)   
// link toggle end ==============================================

// fixed nav-bar ================================================
const handleWindowScroll = () => {
const navHeight = navContainer.getBoundingClientRect().height
const scrollHeight = window.scrollY
const bannerHeight = banner.getBoundingClientRect().height
const topLink = document.querySelector(".top-link")
if(scrollHeight > navHeight) {
    navSection.classList.add("fixed-nav")
} else if(scrollHeight <= navHeight) {
    navSection.classList.remove("fixed-nav")
}

if(scrollHeight > bannerHeight) {
    topLink.classList.add("show-link")
}  else{    
    topLink.classList.remove("show-link")
}
}

window.addEventListener("scroll", handleWindowScroll)
// fixed nav-bar end ============================================
// smooth scroll ================================================
const menuItem = document.querySelectorAll(".menu a")

menuItem.forEach(item => {
    item.addEventListener("click", (e) => {
        const targetId = e.currentTarget.getAttribute("href").slice(1)
        const target = document.getElementById(`${targetId}`)
        let position = target.offsetTop
        window.scrollTo(0,position)
        handleSectionClick()
    })
})

// smooth scroll end ============================================

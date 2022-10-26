const btn = document.querySelector(".label")
const video = document.querySelector(".video")
const preloader = document.querySelector(".preloader")

let isplaying = 1

const handleBtnClick = (event) =>{
    if(isplaying === 1) {
        video.pause();
        isplaying = 0;
    } else {
        video.play();
        isplaying = 1;
    }
}

const handleLoad = () =>{
    preloader.classList.add("hide-preloader")
}

btn.addEventListener("click",handleBtnClick)
window.addEventListener("load",handleLoad)

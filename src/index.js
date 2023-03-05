import { changeDotPosition, nextImg, prevImg } from "./carousel";
import { buildMenu } from "./menu";

const home = document.querySelector(".content");
const wrapper = document.querySelector(".wrapper");
const menuWrapper = document.querySelector(".menu-wrapper");

const next = document.getElementById("next");
next.addEventListener("click", (e) => {
    nextImg();
    changeDotPosition(e.target.id);
});

const prev = document.getElementById("prev");
prev.addEventListener("click", (e) => {
    prevImg();
    changeDotPosition(e.target.id);
});


const menu = document.querySelector(".links li:nth-child(2)");
menu.addEventListener("click", () => {
    const footer = document.querySelector("footer");
    wrapper.removeChild(home);
    wrapper.insertBefore(menuWrapper, footer);
    menuWrapper.style.display = "block";
    const iceBackground = document.querySelector(".ice-bg");
    iceBackground.style.display = "none";
    wrapper.style.gridTemplateRows = ".25fr 11fr .325fr";
    footer.style.marginTop = "10rem";
    // menuWrapper.style.padding = "0 2.25rem 0 2.25rem";
    // wrapper.style.minHeight = "198.4vh";
    // wrapper.style.minHeight = "3180.35px";
    // console.log(menuWrapper.getAttribute("height"));
    // console.log(menuWrapper);
});

const logoName = document.querySelector(".logo-name");
logoName.addEventListener("click", () => {
    const footer = document.querySelector("footer");
    wrapper.removeChild(menuWrapper);
    wrapper.insertBefore(home, footer);
    wrapper.style.gridTemplateRows = ".5fr 5fr .325fr";
    if(window.innerWidth > "390") {
        const iceBackground = document.querySelector(".ice-bg");
        iceBackground.style.display = "block";
    }
    console.log(window.innerWidth);
});


function calculateHeight(con) {
    const navbar = document.getElementById("navbar");
    const footer = document.querySelector("footer");
    const total = parseFloat(window.getComputedStyle(navbar).getPropertyValue("height")) + parseFloat(window.getComputedStyle(footer).getPropertyValue("height")) + parseFloat(window.getComputedStyle(con).getPropertyValue("height"));
    console.log(total);
    return total;
}

//MOBILE VIEWING
const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.style.width = "90%";
    hamburger.setAttribute("style", "opacity: 0; transition: all .4s ease;");
});

const close = document.getElementById("close");
close.addEventListener("click", () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.style.width = "0";
    hamburger.setAttribute("style", "opacity: 100; transition: all .4s ease;");
});

const mobileLinks = document.querySelector(".mobile-links");
mobileLinks.addEventListener("click", (e) => {
    const footer = document.querySelector("footer");
    if(e.target.textContent === "menu") {
        const mobileMenu = document.querySelector(".mobile-menu");
        mobileMenu.style.width = "0";
        wrapper.removeChild(home);
        wrapper.insertBefore(menuWrapper, footer);
        menuWrapper.style.display = "block";
        hamburger.style.opacity = "100%";
    }
});

buildMenu();

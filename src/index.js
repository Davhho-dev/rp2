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
    wrapper.style.minHeight = "198.4vh";
});

const logoName = document.querySelector(".logo-name");
logoName.addEventListener("click", () => {
    const footer = document.querySelector("footer");
    wrapper.removeChild(menuWrapper);
    wrapper.insertBefore(home, footer);
    wrapper.style.minHeight = "100vh";
    const iceBackground = document.querySelector(".ice-bg");
    iceBackground.style.display = "block";
});

buildMenu();

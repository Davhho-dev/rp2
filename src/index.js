import { changeDotPosition, nextImg, prevImg } from "./carousel";
import { buildMenu } from "./menu";

const next = document.getElementById("next");
next.addEventListener("click", (e) => {
    nextImg();
    changeDotPosition(e.target.id);
});

const prev = document.getElementById("prev");
prev.addEventListener("click", (e) => {
    prevImg();
    changeDotPosition(e.target.id);
})

const menu = document.querySelector(".links li:nth-child(2)");
menu.addEventListener("click", () => {
    const home = document.querySelector(".content");
    home.style.display = "none";
    const menuWrapper = document.querySelector(".menu-wrapper");
    menuWrapper.style.display = "block";
})
buildMenu();

import { changeDotPosition, nextImg, prevImg } from "./carousel";


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
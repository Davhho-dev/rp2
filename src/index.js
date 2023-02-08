import { changeDotPosition, nextImg } from "./carousel";


const next = document.getElementById("next");
next.addEventListener("click", (e) => {
    nextImg();
    changeDotPosition(e.target.id);
});
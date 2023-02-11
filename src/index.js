import { changeDotPosition, nextImg, prevImg } from "./carousel";
import { createAppetizers, createSalads, createPoBoys, createSpecialitySandwiches, createSandwiches } from "./menu";


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

createAppetizers();
createSalads();
createPoBoys();
createSpecialitySandwiches();
createSandwiches();
let positionArr = ["right: 50.5rem;", "right: 35.5rem;", "right: 17rem;", "right: 8.75rem;", "right: 4rem;"];
let zIndexArr = ["z-index: 1;", "z-index: 2;", "z-index: 3;", "z-index: 2;", "z-index: 1;"];

function prevImg() {
    const arr = getImgPosition();
    const size = getSizeImg();
    let prevIndex = arr.length - 1;
    for(let i = arr.length - 1; i >= 0; i--) {
        prevIndex--; 
        arr[i].setAttribute("style", `${zIndexArr[prevIndex]} ${positionArr[prevIndex]} ${size[prevIndex]} transition: all .5s ease;`);
        if(i === 0) {
            arr[i].setAttribute("style", `${zIndexArr[zIndexArr.length - 1]} ${positionArr[positionArr.length - 1]} ${size[size.length - 1]} transition: all .5s ease;`);
        }
    }    
}

function getImgPosition() {
    const imgArr = [];
    const images = document.querySelectorAll(".img-carousel img");
    images.forEach(img => {
        imgArr.push(img);
    });
    console.log(imgArr);
    return imgArr;
}

function getSizeImg() {
    const imgArr = [];
    const images = document.querySelectorAll(".img-carousel img");
    images.forEach(img => {
        imgArr.push(img.getAttribute("style"));
    });
    console.log(imgArr);
    return imgArr;
}

export {prevImg};
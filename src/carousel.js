let positionArr = ["right: 50.5rem;", "right: 35.5rem;", "right: 17rem;", "right: 8.75rem;", "right: 4rem;"];
let zIndexArr = ["z-index: 1;", "z-index: 2;", "z-index: 3;", "z-index: 2;", "z-index: 1;"];
let dotArr = [true, false, false, false, false];

function nextImg() {
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

function prevImg() {
    const arr = getImgPosition();
    const size = getSizeImg();
    let nextIndex = 0;
    for(let i = 0; i < arr.length - 1; i++) {
        nextIndex++;
        arr[i].setAttribute("style", `${zIndexArr[nextIndex]} ${positionArr[nextIndex]} ${size[nextIndex]} transition: all .5s ease;`);
        if(nextIndex === arr.length - 1) {
            arr[nextIndex].setAttribute("style", `${zIndexArr[0]} ${positionArr[0]} ${size[0]} transition: all .5s ease;`);
        }
    }
}

function getImgPosition() {
    const imgArr = [];
    const images = document.querySelectorAll(".img-carousel img");
    images.forEach(img => {
        imgArr.push(img);
    });
    return imgArr;
}

function getSizeImg() {
    const imgArr = [];
    const images = document.querySelectorAll(".img-carousel img");
    images.forEach(img => {
        imgArr.push(img.getAttribute("style"));
    });
    return imgArr;
}

function changeDotPosition(direction) {
    const dots = document.querySelectorAll(".dot");
    const currentIndex = dotArr.findIndex(dot => dot === true);
    let nextIndex;
    if(direction === "next") {
        nextIndex = currentIndex + 1;
        dots[currentIndex].setAttribute("style", "width: 12px; height: 12px; background-color: #999999;");
        dotArr[currentIndex] = false;
        if(nextIndex > dotArr.length - 1) {
            dots[0].setAttribute("style", "width: 16px; height: 16px; background-color: black;");
            dotArr[0] = true;
        }else {
            dots[nextIndex].setAttribute("style", "width: 16px; height: 16px; background-color: black");
            dotArr[nextIndex] = true;
        }
    }else {
        nextIndex = currentIndex - 1;
        dots[currentIndex].setAttribute("style", "width: 12px; height: 12px; background-color: #999999;");
        dotArr[currentIndex] = false;
        if(nextIndex < 0) {
            dots[dots.length - 1].setAttribute("style", "width: 16px; height: 16px; background-color: black;");
            dotArr[dots.length - 1] = true;
        }else {
            dots[nextIndex].setAttribute("style", "width: 16px; height: 16px; background-color: black;");
            dotArr[nextIndex] = true;
        }
    }
}

export {nextImg, prevImg, changeDotPosition};
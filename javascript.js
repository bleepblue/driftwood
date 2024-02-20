let curImg = 0;
let lastImg;
function cyclePic () {
    const arr = ['.img1', '.img2', '.img3', '.img4'];
    if (typeof lastImg === "number") {
        document.querySelector(arr[lastImg]).removeAttribute('id');
    }
    document.querySelector(arr[curImg]).id="showImage";
    lastImg = curImg;
    curImg++;
    if (curImg == arr.length) {curImg = 0};
}

setInterval(cyclePic, 1000);


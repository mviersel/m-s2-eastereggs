//elements
const blik_object = document.getElementById("klik-blik");
const blik_div = document.getElementsByClassName("blik")[0];
const video_frame = document.getElementsByClassName("video-frame")[0];
const video_object = document.getElementById("video-object");
const info_frame = document.getElementById("info-frame");

//variables
const valClass = "blik-val";
const videoClass = "video-frame-show";
const rood = "rood";
const infoFrame = "info-frame-show";

//events

blik_object.addEventListener("click", function () {
    toggleFall(blik_div, valClass);
})

//functions
function toggleFall(element, className) {
    if (!element.classList.contains(className)) {
        console.log("blik falling");
        element.classList.add(className);
        setTimeout(toggleVideo, 500);
    }
}

function toggleVideo() {
    video_frame.classList.add(videoClass);
    console.log("video shown");
    setTimeout(document.getElementById("video-object").play(), 1000);
}

// video_object.addEventListener("ended", showInfo(), false);

video_object.addEventListener("ended", function () {
    info_frame.classList.add(infoFrame);
    console.log("show info")
})
console.log("Launching script");
const anchors = document.querySelectorAll(".thumbnails-anchor");
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const mainClass = document.querySelector(".main-class");
const HIDDEN = "hidden";
const IS_POINT = "is-point";
const detailsContainer = document.querySelector(".details-container");
const detailsAudio = document.querySelector(".audio");

function setDetails(anchor) {
    detailsImage.setAttribute('src', anchor.getAttribute('data-details-image'));
    detailsTitle.innerHTML = anchor.getAttribute('data-details-title');
    detailsAudio.setAttribute('src', anchor.getAttribute('data-audio'));
}

for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function() {
        showDetails();
        setDetails(anchors[i]);
        playAudio();
    })
}
function showDetails() {
    mainClass.classList.remove(HIDDEN);
    detailsContainer.classList.add(IS_POINT);
    setTimeout(function() {
        detailsContainer.classList.remove(IS_POINT);
    },1);
   
}
function hideDetails() {
    mainClass.classList.add(HIDDEN);
}
function playAudio(){
    detailsAudio.play();
    setTimeout(() => {detailsAudio.pause()}, 5000);
}

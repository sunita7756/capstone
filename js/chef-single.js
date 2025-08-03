
const playVideo = document.getElementById("playVideo");
const videoModal = document.getElementById("videoModal");
const closeModal =document.getElementById("closeModal");
const videoFrame = document.getElementById("videoFrame");

const videoURL = "https://www.youtube.com/embed/4qVQMNRQ60g?autoplay=1";

playVideo.addEventListener("click", () => {
    videoModal.style.display = "flex";
    videoFrame.src = videoURL;
});

closeModal.addEventListener("click", () => {
    videoModal.style.display = "none";
    videoFrame.src = "";
});

window.addEventListener("click", (e) => {
    if (e. target === videoModal) {
        videoModal.style.display = "none";
        videoFrame.src = "";
    }
})

// our shop


const shop = ourShop;
function ourShop() {
    window.location.href = "shop.html";
}
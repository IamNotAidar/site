const images = [
    "../css/images/mountain1.jpg",
    "../css/images/mountain2.jpg",
    "../css/images/mountain3.jpg"
];

let currentIndex = 0;
const galleryImage = document.getElementById("gallery-image");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

function changeImage(index) {
    galleryImage.style.opacity = "0"; 
    setTimeout(() => {
        galleryImage.src = images[index];
        galleryImage.style.opacity = "1"; 
    }, 300);
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(currentIndex);
});

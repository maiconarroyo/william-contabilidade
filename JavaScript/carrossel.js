const banners = document.querySelector('.banner-container');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let index = 0;
let interval;

function showBanner(offset) {
    const totalBanners = banners.children.length;
    index = (index + offset + totalBanners) % totalBanners;
    banners.style.transform = `translateX(-${index * 100}%)`;
}

function startAutoSlide() {
    interval = setInterval(() => showBanner(1), 4000);
}
function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
}

nextButton.addEventListener('click', () => {
    showBanner(1);
    resetAutoSlide();
});

prevButton.addEventListener('click', () => {
    showBanner(-1);
    resetAutoSlide();
});

startAutoSlide();

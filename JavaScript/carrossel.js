const banners = document.querySelector('.banner-container');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    let index = 0;

    function showBanner(offset) {
        const totalBanners = banners.children.length;
        index = (index + offset + totalBanners) % totalBanners;
        banners.style.transform = `translateX(-${index * 100}%)`;
    }

    nextButton.addEventListener('click', () => showBanner(1));
    prevButton.addEventListener('click', () => showBanner(-1));
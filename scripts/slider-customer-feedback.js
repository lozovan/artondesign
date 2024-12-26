const feedbackSlider = document.querySelector('.feedback-slider');
const feedbackSlides = document.querySelectorAll('.feedback-slide');
const prevButton = document.querySelector('.feedback-left-button');
const nextButton = document.querySelector('.feedback-right-button');

if (feedbackSlider && feedbackSlides.length > 0) {
    let feedbackSlideIndex = 1; // Початок із першого реального слайду
    const visibleSlides = 3;  
    const slideWidth = feedbackSlides[0].offsetWidth;

    // Клони
    const firstSlideClone = feedbackSlides[0].cloneNode(true);
    const lastSlideClone = feedbackSlides[feedbackSlides.length - 1].cloneNode(true);
    feedbackSlider.appendChild(firstSlideClone);
    feedbackSlider.insertBefore(lastSlideClone, feedbackSlides[0]);

    // Початкова позиція
    feedbackSlider.style.transform = `translateX(${-slideWidth}px)`;

    let isTransitioning = false;
    let autoSlideInterval = window.innerWidth <= 768 ? 8000 : 6000; // 8 сек на мобільних, 6 сек на ПК
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    // Показ слайду
    function showFeedbackSlide(n) {
        const totalSlides = feedbackSlides.length + 2; // Враховуємо клоновані слайди
        feedbackSlider.style.transition = 'transform 0.5s ease-in-out';

        feedbackSlider.style.transform = `translateX(${-n * slideWidth}px)`;
        feedbackSlideIndex = n;

        feedbackSlider.addEventListener('transitionend', () => {
            if (feedbackSlideIndex === totalSlides - 1) {
                feedbackSlider.style.transition = 'none';
                feedbackSlider.style.transform = `translateX(${-slideWidth}px)`;
                feedbackSlideIndex = 1;
            } else if (feedbackSlideIndex === 0) {
                feedbackSlider.style.transition = 'none';
                feedbackSlider.style.transform = `translateX(${-slideWidth * (feedbackSlides.length)}px)`;
                feedbackSlideIndex = feedbackSlides.length;
            }
        });
    }

    // Наступний слайд
    function nextFeedbackSlide() {
        if (!isTransitioning) {
            isTransitioning = true;
            showFeedbackSlide(feedbackSlideIndex + 1);
            setTimeout(() => (isTransitioning = false), 500);
        }
    }

    // Попередній слайд
    function prevFeedbackSlide() {
        if (!isTransitioning) {
            isTransitioning = true;
            showFeedbackSlide(feedbackSlideIndex - 1);
            setTimeout(() => (isTransitioning = false), 500);
        }
    }

    // Події для кнопок
    if (prevButton) {
        prevButton.addEventListener('click', prevFeedbackSlide);
    }
    if (nextButton) {
        nextButton.addEventListener('click', nextFeedbackSlide);
    }

    // Свайпи для мобільних
    feedbackSlider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    feedbackSlider.addEventListener('touchmove', (e) => {
        if (isDragging) {
            currentX = e.touches[0].clientX;
        }
    });

    feedbackSlider.addEventListener('touchend', () => {
        if (isDragging) {
            const diffX = startX - currentX;
            if (diffX > 50) {
                nextFeedbackSlide();
            } else if (diffX < -50) {
                prevFeedbackSlide();
            }
            isDragging = false;
        }
    });

    // Автоматичний перехід
    setInterval(nextFeedbackSlide, autoSlideInterval);

    // Оновлення інтервалу при зміні розміру
    window.addEventListener('resize', () => {
        autoSlideInterval = window.innerWidth <= 768 ? 5000 : 3000;
    });
} else {
    console.error('Slider not found or no slides.');
}




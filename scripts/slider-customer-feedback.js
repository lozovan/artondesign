const feedbackSlider = document.querySelector('.feedback-slider');
const feedbackSlides = document.querySelectorAll('.feedback-slide');
const prevButton = document.querySelector('.feedback-left-button');
const nextButton = document.querySelector('.feedback-right-button');

// Якщо слайдер і слайди знайдені
if (feedbackSlider && feedbackSlides.length > 0) {
    let feedbackSlideIndex = 0;
    const visibleSlides = 3;  // Кількість слайдів, що видно одночасно

    // Функція для показу потрібного слайда
    function showFeedbackSlide(n) {
        const totalSlides = feedbackSlides.length;
        const maxIndex = totalSlides - visibleSlides;

        if (n > maxIndex) {
            feedbackSlideIndex = 0; // Повернутися до першого слайда, якщо досягли кінця
        } else if (n < 0) {
            feedbackSlideIndex = maxIndex; // Перейти на останній видимий слайд
        } else {
            feedbackSlideIndex = n;
        }

        // Вираховуємо ширину одного слайда для коректного зміщення
        const slideWidth = feedbackSlides[0].offsetWidth;
        feedbackSlider.style.transform = `translateX(${-feedbackSlideIndex * slideWidth}px)`;
    }

    // Наступний слайд
    function nextFeedbackSlide() {
        showFeedbackSlide(feedbackSlideIndex + 1);
    }

    // Попередній слайд
    function prevFeedbackSlide() {
        showFeedbackSlide(feedbackSlideIndex - 1);
    }

    // Обробники подій для кнопок
    if (prevButton) {
        prevButton.addEventListener('click', prevFeedbackSlide);
    }

    if (nextButton) {
        nextButton.addEventListener('click', nextFeedbackSlide);
    }

    // Автоматичне перемикання слайдів (за бажанням можна розкоментувати)
    setInterval(nextFeedbackSlide, 3000);
} else {
    console.error('Слайдер не знайдено або немає слайдів.');
}
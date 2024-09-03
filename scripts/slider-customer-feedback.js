const feedbackSlider = document.querySelector('.feedback-slider');
const feedbackSlides = document.querySelectorAll('.feedback-slide');
const prevButton = document.querySelector('.feedback-left-button');
const nextButton = document.querySelector('.feedback-right-button');

if (feedbackSlider && feedbackSlides.length > 0) {
    let feedbackSlideIndex = 0;

    function showFeedbackSlide(n) {
        if (n >= feedbackSlides.length) {
            feedbackSlideIndex = 0;
        } else if (n < 0) {
            feedbackSlideIndex = feedbackSlides.length - 1;
        } else {
            feedbackSlideIndex = n;
        }
        feedbackSlider.style.transform = `translateX(${-100 * feedbackSlideIndex}%)`;
    }

    function nextFeedbackSlide() {
        showFeedbackSlide(feedbackSlideIndex + 1);
    }

    function prevFeedbackSlide() {
        showFeedbackSlide(feedbackSlideIndex - 1);
    }

    if (prevButton) {
        prevButton.addEventListener('click', prevFeedbackSlide);
    }

    if (nextButton) {
        nextButton.addEventListener('click', nextFeedbackSlide);
    }

    // Автоматичне перемикання слайдів
    //setInterval(nextFeedbackSlide, 3000);
} else {
    console.error('Слайдер не знайдено або немає слайдів.');
}
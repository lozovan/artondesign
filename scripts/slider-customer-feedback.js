const feedbackSlider = document.querySelector('.feedback-slider');
const feedbackSlides = document.querySelectorAll('.feedback-slide');
const prevButton = document.querySelector('.feedback-left-button');
const nextButton = document.querySelector('.feedback-right-button');

if (feedbackSlider && feedbackSlides.length > 0) {
    let feedbackSlideIndex = 0;
    const visibleSlides = 3;  

    function showFeedbackSlide(n) {
        const totalSlides = feedbackSlides.length;
        const maxIndex = totalSlides - visibleSlides;

        if (n > maxIndex) {
            feedbackSlideIndex = 0; 
        } else if (n < 0) {
            feedbackSlideIndex = maxIndex; 
        } else {
            feedbackSlideIndex = n;
        }

        const slideWidth = feedbackSlides[0].offsetWidth;
        feedbackSlider.style.transform = `translateX(${-feedbackSlideIndex * slideWidth}px)`;
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

    setInterval(nextFeedbackSlide, 3000);
} else {
    console.error('Slider not found or no slides.');
}
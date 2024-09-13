const feedbackSlider = document.querySelector('.feedback-slider');
const feedbackSlides = document.querySelectorAll('.feedback-slide');
const prevButton = document.querySelector('.feedback-left-button');
const nextButton = document.querySelector('.feedback-right-button');

if (feedbackSlider && feedbackSlides.length > 0) {
    let feedbackSlideIndex = 0;
    const visibleSlides = 3;  
    const slideWidth = feedbackSlides[0].offsetWidth;

    const firstSlideClone = feedbackSlides[0].cloneNode(true);
    const lastSlideClone = feedbackSlides[feedbackSlides.length - 1].cloneNode(true);
    feedbackSlider.appendChild(firstSlideClone);
    feedbackSlider.insertBefore(lastSlideClone, feedbackSlides[0]);

    let isTransitioning = false;

    function showFeedbackSlide(n) {
        const totalSlides = feedbackSlides.length;
        const maxIndex = totalSlides - visibleSlides;
        feedbackSlider.style.transition = 'transform 0.5s ease-in-out';

        if (n > totalSlides) {
            feedbackSlideIndex = 1;
            feedbackSlider.style.transition = 'none'; 
        } else if (n < 0) {
            feedbackSlideIndex = totalSlides;
            feedbackSlider.style.transition = 'none'; 
        } else {
            feedbackSlideIndex = n;
        }

        feedbackSlider.style.transform = `translateX(${-feedbackSlideIndex * slideWidth}px)`;
    }

    function nextFeedbackSlide() {
        if (!isTransitioning) {
            isTransitioning = true;
            showFeedbackSlide(feedbackSlideIndex + 1);
            setTimeout(() => {
                if (feedbackSlideIndex === feedbackSlides.length) {
                    feedbackSlider.style.transition = 'none'; 
                    feedbackSlider.style.transform = 'translateX(0)';
                    feedbackSlideIndex = 0;
                }
                isTransitioning = false;
            }, 500);
        }
    }

    function prevFeedbackSlide() {
        if (!isTransitioning) {
            isTransitioning = true;
            showFeedbackSlide(feedbackSlideIndex - 1);
            setTimeout(() => {
                if (feedbackSlideIndex === -1) {
                    feedbackSlider.style.transition = 'none'; // Вимкнути анімацію
                    feedbackSlider.style.transform = `translateX(${-slideWidth * (feedbackSlides.length - 1)}px)`;
                    feedbackSlideIndex = feedbackSlides.length - 1;
                }
                isTransitioning = false;
            }, 500);
        }
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

const feedbackSlider = document.querySelector('.feedback-slider');
const feedbackSlides = document.querySelectorAll('.feedback-slide');
const prevButton = document.querySelector('.feedback-left-button');
const nextButton = document.querySelector('.feedback-right-button');

if (feedbackSlider && feedbackSlides.length > 0) {
    let feedbackSlideIndex = 1;
    let slideWidth = feedbackSlides[0].getBoundingClientRect().width;
    const slideGap = 15; // Відступ між слайдами

    // Клонуємо перший і останній слайди для безперервної прокрутки
    const firstSlideClone = feedbackSlides[0].cloneNode(true);
    const lastSlideClone = feedbackSlides[feedbackSlides.length - 1].cloneNode(true);
    feedbackSlider.appendChild(firstSlideClone);
    feedbackSlider.insertBefore(lastSlideClone, feedbackSlides[0]);

    feedbackSlider.style.transform = `translateX(${-slideWidth - slideGap}px)`; // Враховуємо відступ

    function updateSlideWidth() {
        slideWidth = feedbackSlides[0].getBoundingClientRect().width;
        feedbackSlider.style.transition = 'none';
        feedbackSlider.style.transform = `translateX(${-feedbackSlideIndex * (slideWidth + slideGap)}px)`; // Враховуємо відступ
    }

    function showFeedbackSlide(n) {
        const totalSlides = feedbackSlides.length + 2; // Враховуємо клоновані слайди
        feedbackSlideIndex = n;
        feedbackSlider.style.transition = 'transform 0.5s ease-in-out';
        feedbackSlider.style.transform = `translateX(${-feedbackSlideIndex * (slideWidth + slideGap)}px)`; // Враховуємо відступ
    }

    function nextFeedbackSlide() {
        showFeedbackSlide(feedbackSlideIndex + 1);
    }

    function prevFeedbackSlide() {
        showFeedbackSlide(feedbackSlideIndex - 1);
    }

    prevButton.addEventListener('click', prevFeedbackSlide);
    nextButton.addEventListener('click', nextFeedbackSlide);

    feedbackSlider.addEventListener('transitionend', (e) => {
        if (e.propertyName !== 'transform') return;
        const totalSlides = feedbackSlides.length + 2;
        if (feedbackSlideIndex === totalSlides - 1) {
            feedbackSlider.style.transition = 'none';
            feedbackSlider.style.transform = `translateX(${-slideWidth - slideGap}px)`; // Враховуємо відступ
            feedbackSlideIndex = 1;
        } else if (feedbackSlideIndex === 0) {
            feedbackSlider.style.transition = 'none';
            feedbackSlider.style.transform = `translateX(${-slideWidth * feedbackSlides.length - slideGap}px)`; // Враховуємо відступ
            feedbackSlideIndex = feedbackSlides.length;
        }
    });

    window.addEventListener('resize', () => {
        updateSlideWidth();
    });

    setInterval(nextFeedbackSlide, 6000);
}

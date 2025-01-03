const gridImages = document.querySelectorAll('.grid-gallery img');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox.querySelector('img');
  const prevBtn = lightbox.querySelector('.prev');
  const nextBtn = lightbox.querySelector('.next');
  const closeBtn = lightbox.querySelector('.close');

  let currentIndex = 0;

  function showLightbox(index) {
    currentIndex = index;
    lightboxImg.src = gridImages[currentIndex].src;
    lightbox.style.display = 'flex';
  }

  function hideLightbox() {
    lightbox.style.display = 'none';
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + gridImages.length) % gridImages.length;
    lightboxImg.src = gridImages[currentIndex].src;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % gridImages.length;
    lightboxImg.src = gridImages[currentIndex].src;
  }

  gridImages.forEach((img, index) => {
    img.addEventListener('click', () => showLightbox(index));
  });

  closeBtn.addEventListener('click', hideLightbox);
  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) hideLightbox();
  });
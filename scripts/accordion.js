const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        // Додаємо/забираємо клас 'active' для обертання стрілки
        header.classList.toggle('active');

        // Перевіряємо, чи розгорнутий блок
        if (content.style.maxHeight) {
            content.style.maxHeight = null; // Згортаємо блок
        } else {
            // Згортаємо інші відкриті блоки
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.style.maxHeight = null;
                item.previousElementSibling.classList.remove('active'); // Прибираємо клас для стрілок
            });
            content.style.maxHeight = content.scrollHeight + 'px'; // Розгортаємо блок
        }
    });
});
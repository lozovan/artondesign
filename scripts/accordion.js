const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        header.classList.toggle('active');

        if (content.style.maxHeight) {
            content.style.maxHeight = null; 
        } else {
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.style.maxHeight = null;
                item.previousElementSibling.classList.remove('active'); 
            });
            content.style.maxHeight = content.scrollHeight + 'px'; 
        }
    });
});
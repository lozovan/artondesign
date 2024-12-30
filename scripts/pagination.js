const projectsContainer = document.querySelector(".project__info_main");
const projects = document.querySelectorAll(".project-info__info");
const prevBtn = document.querySelector(".pagination-btn.prev");
const nextBtn = document.querySelector(".pagination-btn.next");
const pagesContainer = document.querySelector(".pagination .pages");

let currentPage = 1; // Поточна сторінка
let itemsPerPage = 4; // Фіксована кількість елементів на сторінці

// Функція для створення кнопок пагінації
function createPaginationButtons() {
    const totalPages = Math.ceil(projects.length / itemsPerPage);
    pagesContainer.innerHTML = ""; // Очищаємо попередні кнопки

    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.classList.add("pagination-btn", "page");
        pageBtn.dataset.page = i;
        pageBtn.textContent = i;

        // Додаємо клас активної сторінки
        if (i === currentPage) {
            pageBtn.classList.add("active");
        }

        // Подія на кнопку
        pageBtn.addEventListener("click", () => {
            currentPage = i;
            displayProjects();
        });

        pagesContainer.appendChild(pageBtn);
    }
}

// Функція для відображення проєктів
function displayProjects() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    // Сховати всі проєкти
    projects.forEach((project, index) => {
        if (index >= start && index < end) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });

    // Оновити стан кнопок
    updatePaginationButtons();
}

// Оновлення кнопок "prev" та "next"
function updatePaginationButtons() {
    const totalPages = Math.ceil(projects.length / itemsPerPage);

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    // Оновлюємо активну сторінку в кнопках
    Array.from(pagesContainer.children).forEach((btn) => {
        btn.classList.toggle("active", parseInt(btn.dataset.page, 10) === currentPage);
    });
}

// Події для кнопок "prev" і "next"
prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayProjects();
    }
});

nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(projects.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayProjects();
    }
});

// Ініціалізація
createPaginationButtons();
displayProjects();

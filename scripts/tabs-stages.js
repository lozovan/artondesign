const tabs = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content-item');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentTabIndex = 0;

function updateTabs(index) {
    if (index < 0 || index >= tabs.length) {
        console.error('no index:', index);
        return;
    }

    tabs.forEach(item => item.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    tabs[index].classList.add('active');
    contents[index].classList.add('active');
}

// Додавання подій для вкладок
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        currentTabIndex = index;
        updateTabs(currentTabIndex);
    });
});

leftArrow.addEventListener('click', () => {
    if (currentTabIndex > 0) {
        currentTabIndex--;
        updateTabs(currentTabIndex);
    }
});

rightArrow.addEventListener('click', () => {
    if (currentTabIndex < tabs.length - 1) {
        currentTabIndex++;
        updateTabs(currentTabIndex);
    }
});
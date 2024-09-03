const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentTabIndex = 0;

function updateTabs(index) {
    tabs.forEach(item => item.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    tabs[index].classList.add('active');
    contents[index].classList.add('active');
}

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
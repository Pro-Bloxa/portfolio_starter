const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    cross = document.querySelector('.menu_cross');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

cross.addEventListener('click', () => {
    menu.classList.remove('active');
});
//ниже код для закрытия окна меню при выборе пункта меню
const lists = document.querySelector('.menu_lists');

lists.addEventListener('click', () => {
    menu.classList.remove('active');
});
//========================

const levels = document.querySelectorAll('.skills_level__percent'),
    lines = document.querySelectorAll('.skills_level__competence span');

levels.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

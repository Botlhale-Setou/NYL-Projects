const menuBtn = document.querySelector('.fa-bars');
const menu = document.querySelector('.navBtns');
const exitBtn = document.querySelector('.fa-times');

menuBtn.addEventListener('click', () => {
	menu.style.right = 0;
});

exitBtn.addEventListener('click', () => {
	menu.style.right = '-100vw';
});
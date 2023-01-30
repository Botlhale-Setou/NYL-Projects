const menuBtn = document.querySelector('.fa-bars');
const menu = document.querySelector('.navBtns');
const exitBtn = document.querySelector('.fa-times');

menuBtn.addEventListener('click', () => {
	menu.style.right = 0;
	document.body.style.overflowY = 'none';
});

exitBtn.addEventListener('click', () => {
	menu.style.right = '-100vw';
});

//aos
AOS.init({
	offset: 200,
	delay: 100,
	duration: 400,
	easing: 'ease',
	once: false,
	mirror: false,
	anchorPlacement: 'top-bottom'
});
const swiper = new Swiper('.swiper', {
	// Optional parameters
    slidesPerView: 2,
	direction: 'horizontal',
	loop: true,
	spaceBetween: '2.5%',

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

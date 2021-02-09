// var appendNumber = 4;
// var prependNumber = 1;
// var swiper = new Swiper('.swiper-container', {
//   slidesPerView: 3,
//   centeredSlides: true,
//   spaceBetween: 30,
//   pagination: {
// 	 el: '.swiper-pagination',
// 	 clickable: true,
//   },
//   navigation: {
// 	 nextEl: '.swiper-button-next',
// 	 prevEl: '.swiper-button-prev',
//   },
// });
// document.querySelector('.prepend-2-slides').addEventListener('click', function (e) {
//   e.preventDefault();
//   swiper.prependSlide([
// 	 '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
// 	 '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
//   ]);
// });
// document.querySelector('.prepend-slide').addEventListener('click', function (e) {
//   e.preventDefault();
//   swiper.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
// });
// document.querySelector('.append-slide').addEventListener('click', function (e) {
//   e.preventDefault();
//   swiper.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
// });
// document.querySelector('.append-2-slides').addEventListener('click', function (e) {
//   e.preventDefault();
//   swiper.appendSlide([
// 	 '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
// 	 '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
//   ]);
// });


// //инициализируем WOW js
// new WOW().init();

var swiper = new Swiper('.swiper-container', {
	slidesPerView: 3,
	spaceBetween: 30,
	freeMode: true,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	breakpoints: {
	  '@0.00': {
		 slidesPerView: 1,
		 spaceBetween: 10,
	  },
	  '@0.75': {
		 slidesPerView: 2,
		 spaceBetween: 20,
	  },
	  '@1.00': {
		 slidesPerView: 3,
		 spaceBetween: 40,
	  },
	  '@1.50': {
		 slidesPerView: 4,
		 spaceBetween: 50,
	  },
	}
 });
 

 	// jQuery Табы
$('.tabs-wrapper').each(function() {
	let ths = $(this);
	ths.find('.tab-item').not(':first').hide();
	ths.find('.tab').click(function() {
		ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');
});
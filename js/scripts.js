document.addEventListener('DOMContentLoaded', function () {
	// Articles
	const articles = $('.articles .article')

	articles.each(function(i) {
		$(this).css('z-index', articles.length - i)
	})


	// Direction services slider
	const directionServicesSliders = [],
		directionServices = document.querySelectorAll('.direction_services .swiper')

	directionServices.forEach((el, i) => {
		el.classList.add('direction_services_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 24,
					slidesPerView: 'auto',
					grid: {
						rows: 1
					}
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2,
					grid: {
						rows: 1
					}
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3,
					grid: {
						rows: 1
					}
				},
				1440: {
					spaceBetween: 40,
					slidesPerView: 3,
					grid: {
						rows: parseInt(el.getAttribute('data-rows'))
					}
				},
				1900: {
					spaceBetween: 70,
					slidesPerView: 3,
					grid: {
						rows: parseInt(el.getAttribute('data-rows'))
					}
				}
			}
		}

		directionServicesSliders.push(new Swiper('.direction_services_s' + i, options))
	})


	// All our services slider
	const allOurServicesSliders = [],
		allOurServices = document.querySelectorAll('.all_our_services .swiper')

	allOurServices.forEach((el, i) => {
		el.classList.add('all_our_services_s' + i)

		let options = {
			loop: false,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 24,
			slidesPerView: 1
		}

		allOurServicesSliders.push(new Swiper('.all_our_services_s' + i, options))
	})


	// Cases slider
	const casesSliders = [],
		cases = document.querySelectorAll('.cases .swiper')

	cases.forEach((el, i) => {
		el.classList.add('cases_s' + i)

		let options = {
			loop: false,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			spaceBetween: 24,
			slidesPerView: 1
		}

		casesSliders.push(new Swiper('.cases_s' + i, options))
	})


	// Blog slider
	const blogSliders = [],
		blog = document.querySelectorAll('.blog .swiper')

	blog.forEach((el, i) => {
		el.classList.add('blog_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 24,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1440: {
					spaceBetween: 40,
					slidesPerView: 3
				},
				1900: {
					spaceBetween: 72,
					slidesPerView: 3
				}
			}
		}

		blogSliders.push(new Swiper('.blog_s' + i, options))
	})


	// Mob. menu
	$('header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('lock')
		$('.mob_menu').toggleClass('show')
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Kind of staff
	$('.kind_of_staff .item .name').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next('.sub').slideToggle(300)
	})
})
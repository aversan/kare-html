import Swiper from 'swiper';

export default class ProductDetailSlider {
  constructor(el) {
    this.el = el

    let $main = $(this.el).find('.js-swiper-main');
    let $navigation = $(this.el).find('.js-swiper-navigation');
    var mainSwiper;
    var navigationSwiper;

    $main.each(function(){
        let $wrapper = $(this);
        let $swiperContainer = $wrapper.find('.js-swiper-container');
        let $prev = $wrapper.find('.js-swiper-prev');
        let $next = $wrapper.find('.js-swiper-next');

        mainSwiper = new Swiper($swiperContainer, {
        	navigation: {
	            nextEl: $prev,
	            prevEl: $next,
        	},
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 24,
            initialSlide: '2',
            observer: true,
            observeParents: true,
			breakpoints: {
			    768: {
			        slidesPerView: 'auto',
			        spaceBetween: 16,
			        grabCursor: true,
			        freeMode: true
			    }
			}
        });

		mainSwiper.on('slideChange', function () {
		  navigationSwiper.slideTo(mainSwiper.activeIndex);
		});
    });

    $navigation.each(function(){
        let $wrapper = $(this);
        let $swiperContainer = $wrapper.find('.js-swiper-container');

        navigationSwiper = new Swiper($swiperContainer, {
            slidesPerView: 6,
            centeredSlides: true,
            spaceBetween: 24,
            initialSlide: '2',
            observer: true,
            observeParents: true,
            slideToClickedSlide: true,
			breakpoints: {
			    768: {
			        slidesPerView: 'auto',
			        spaceBetween: 16,
			        grabCursor: true,
			        freeMode: true
			    }
			}
        });

		navigationSwiper.on('slideChange', function () {
		  mainSwiper.slideTo(navigationSwiper.activeIndex);
		});
    });
  }
}


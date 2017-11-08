import Swiper from 'swiper';

export default class ProductSlider {
  constructor(el) {
    this.el = el

    $(this.el).each(function(){
        let $wrapper = $(this);
        let $swiperContainer = $wrapper.find('.js-swiper-container');
        let $prev = $wrapper.find('.js-swiper-prev');
        let $next = $wrapper.find('.js-swiper-next');

        let swiper = new Swiper($swiperContainer, {
        	navigation: {
	            nextEl: $prev,
	            prevEl: $next,
        	},
            slidesPerView: 'auto',
            spaceBetween: 0,
            autoHeight: true,
            observer: true,
            observeParents: true,
            breakpoints: {
                768: {
                    grabCursor: true,
                    freeMode: true
                }
            }
        });
    });
  }
}

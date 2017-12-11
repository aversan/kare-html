import Swiper from 'swiper';

export default class ProductDetailSlider {
  constructor(el) {
    this.el = el;

    if ($(this.el).find('.js-swiper-main .swiper-slide').length <= 1) {
      $(this.el).addClass('product-detail-slider-disabled');
      return;
    }

    const $main = $(this.el).find('.js-swiper-main');
    const $navigation = $(this.el).find('.js-swiper-navigation');
    let mainSwiper;
    let navigationSwiper;

    $main.each(function () {
      const $wrapper = $(this);
      const $swiperContainer = $wrapper.find('.js-swiper-container');
      const $prev = $wrapper.find('.js-swiper-prev');
      const $next = $wrapper.find('.js-swiper-next');

      mainSwiper = new Swiper($swiperContainer, {
        navigation: {
          prevEl: $prev,
          nextEl: $next,
        },
        loop: true,
        setWrapperSize: true,
        loopAdditionalSlides: 6,
        loopedSlides: 6,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 24,
        initialSlide: 0,
        observer: true,
        observeParents: true,
        breakpoints: {
          768: {
            slidesPerView: 'auto',
            spaceBetween: 16,
            grabCursor: true,
            freeMode: true,
          },
        },
      });

      mainSwiper.on('slideChange', () => {
        navigationSwiper.slideTo(mainSwiper.activeIndex);
      });
    });

    $navigation.each(function () {
      const $wrapper = $(this);
      const $swiperContainer = $wrapper.find('.js-swiper-container');

      navigationSwiper = new Swiper($swiperContainer, {
        slidesPerView: 6,
        centeredSlides: true,
        spaceBetween: 24,
        observer: true,
        observeParents: true,
        slideToClickedSlide: true,
        initialSlide: 0,
        loop: true,
        setWrapperSize: true,
        loopAdditionalSlides: 6,
        loopedSlides: 6,
        breakpoints: {
          768: {
            slidesPerView: 'auto',
            spaceBetween: 16,
            grabCursor: true,
            freeMode: true,
          },
        },
      });

      navigationSwiper.on('slideChange', () => {
        mainSwiper.slideTo(navigationSwiper.activeIndex);
      });
    });
  }
}


import $ from 'jquery';
import Swiper from 'swiper/dist/js/swiper.js';

export default class InteriorDetailSlider {
  constructor(el) {
    this.el = el;

    if ($(this.el).find('.js-swiper-main .swiper-slide').length <= 1) {
      $(this.el).addClass('interior-detail-slider-disabled');
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
        loop: false,
        setWrapperSize: true,
        // loopAdditionalSlides: 6,
        // loopedSlides: 6,
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 16,
        initialSlide: 0,
        observer: true,
        observeParents: true,
        breakpoints: {
          // 768: {
          //   slidesPerView: 'auto',
          //   spaceBetween: 16,
          //   grabCursor: true,
          //   freeMode: true,
          // },
          576: {
            spaceBetween: 8,
          },
        },
      });

      mainSwiper.on('slideChange', () => {
        const activeIndex = mainSwiper.activeIndex;
        $(navigationSwiper.slides).removeClass('is-selected');
        $(navigationSwiper.slides).eq(activeIndex).addClass('is-selected');
        navigationSwiper.slideTo(activeIndex, 500, false);
      });
    });

    $navigation.each(function () {
      const $wrapper = $(this);
      const $swiperContainer = $wrapper.find('.js-swiper-container');

      navigationSwiper = new Swiper($swiperContainer, {
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 16,
        observer: true,
        observeParents: true,
        slideToClickedSlide: true,
        initialSlide: 0,
        loop: false,
        setWrapperSize: true,
        // loopAdditionalSlides: 6,
        // loopedSlides: 6,
        breakpoints: {
          // 768: {
          //   slidesPerView: 'auto',
          //   spaceBetween: 16,
          //   grabCursor: true,
          //   freeMode: true,
          // },
          576: {
            spaceBetween: 8,
          },
        },
      });

      navigationSwiper.on('click', () => {
        const clickedIndex = navigationSwiper.clickedIndex;
        navigationSwiper.activeIndex = clickedIndex;
        $(navigationSwiper.slides).removeClass('is-selected');
        $(navigationSwiper.clickedSlide).addClass('is-selected');
        mainSwiper.slideTo(clickedIndex, 500, false);
      });
    });
  }
}


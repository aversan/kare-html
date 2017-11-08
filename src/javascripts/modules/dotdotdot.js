import 'dotdotdot';

export default class DotDotDot {
  constructor(el) {
    this.el = el

    $(this.el).each(function(){
        const $wrapper = $(this);
        const height = $wrapper.data('height') || 100;
        const $text = $wrapper.find('.js-text');
        const $toggle = $wrapper.find('.js-toggle');

        const options = {
            ellipsis: '\u2026',
            wrap: 'word',
            watch: true,
            height: height
        };


        $text.dotdotdot(options);

        $toggle.on('click', function(event) {
            if ($wrapper.hasClass('dotdotdot_full-text')) {
                $wrapper.removeClass("dotdotdot_full-text");
                $text.dotdotdot(options);
            } else {
                $wrapper.addClass('dotdotdot_full-text');
                $text.trigger('destroy.dot');
            }
        });
    });
  }
}

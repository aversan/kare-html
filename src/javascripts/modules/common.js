import 'svgxuse';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/util';
import Drop from 'tether-drop';
// import Popper from 'popper';
import autosize from 'autosize';

$(() => {


    // 60fps scrolling using pointer-events: none
    // https://habrahabr.ru/post/204238/

	let body = document.body,
		timer;

	window.addEventListener('scroll', () => {
		clearTimeout(timer);
		if (!body.classList.contains('disable-hover')) {
			body.classList.add('disable-hover');
		}

		timer = setTimeout(() => {
			body.classList.remove('disable-hover');
		}, 500);
	}, false);

    // drop

	(function () {
		let init, isMobile, setup, _Drop;

		_Drop = Drop.createContext({
			classPrefix: 'drop'
		});

		isMobile = $(window).width() < 567;

		init = function () {
			return setup();
		};

		setup = function () {
			return $('.js-drop').each(function () {
				let $dropwrap, $target, content, drop, openOn, theme, position;
				$dropwrap = $(this);
				theme = $dropwrap.data('theme');
				position = $dropwrap.data('position');
				openOn = $dropwrap.data('open-on') || 'click';
				$target = $dropwrap.find('.drop-target');
				$target.addClass(theme);
				content = $dropwrap.find('.drop-content').html();

				drop = new _Drop({
					target: $target[0],
					classes: theme,
					position,
					constrainToWindow: false,
					constrainToScrollParent: false,
					openOn,
					content,
					hoverOpenDelay: 1000
            // remove: true
				});

				return drop;
			});
		};

		init();

	}).call(this);

    // dropdown

	// $('.js-dropdown-toggle').each(function (){
	// 	const $toggle = $(this);
	// 	const $container = $toggle.parents('.js-dropdown');

	// 	$toggle.dropdown();
	// });

	$(document)
        .on('click' + '.bs.dropdown.data-api', '.dropdown-menu.noclose', function (e) {
			e.stopPropagation();
		});

	$(document).on('click.bs.dropdown.data-api', '[data-dismiss="dropdown"]', function (e){
		$(this).parents('.dropdown').eq(0).find('[data-toggle="dropdown"]').dropdown('toggle');
	});

	// autosize textarea

	autosize($('textarea.js-autosize'));
});

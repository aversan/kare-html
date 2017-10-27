import 'svgxuse';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/util';

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
});

import './modules/common';

$(() => {
  let $sections = $('.js-catalog-filter').find('.catalog-filter__section_collapse');
  $sections.each(function(){
    let $section = $(this);
    let $title = $section.find('.catalog-filter__section-header');
    let $content = $section.find('.catalog-filter__section-body.collapse');

    $title.on('click', function () {
      if ($section.hasClass('catalog-filter__section_collapse_show')) {
        $content.collapse('hide');
        $section.removeClass('catalog-filter__section_collapse_show');
      } else {
        $content.collapse('show');
        $section.addClass('catalog-filter__section_collapse_show');
      }
    })
  })
});


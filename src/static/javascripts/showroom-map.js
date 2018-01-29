function showroomMapHelpers() {
  const ballonHTML = ({ PREVIEW_PIC, ADDRESS, LINK }) => `
      <article class="map-marker-info js-map-marker">
        ${PREVIEW_PIC ? `<div class="map-marker-info__left"><img class="map-marker-info__icon" src="${PREVIEW_PIC}"></div>` : ''}
        ${PREVIEW_PIC ? '<div class="map-marker-info__right">' : ''}
          <p class="map-marker-info__address">
            <span></span>
            <span>${ADDRESS}</span>
          </p>
          <a class="map-marker-info__link" href="${LINK}">Перейти к шоу-руму</a>
        ${PREVIEW_PIC ? '</div>' : ''}
      </article>`;

  return {
    marker: (showroom) => {
      const imageUrl = '/local/templates/kare_new/icons/k-pin.png';
      const imagePartnerUrl = '/local/templates/kare_new/icons/partner-pin.png';
      const lat = +showroom.COORDINATES.lat;
      const lng = +showroom.COORDINATES.long;
      const pinType = +showroom.PIN_TYPE;
      const iconImageHref = pinType === 2 ? imagePartnerUrl : imageUrl;
      const hintContent = showroom.NAME;

      return new ymaps.Placemark([lat, lng], {
        hintContent,
        balloonContent: ballonHTML(showroom),
      }, {
        iconLayout: 'default#image',
        iconImageHref,
        iconImageSize: [36, 51],
        iconImageOffset: [-18, -51],
      });
    },
  };
}

function initShowroomsMap() {
  const myMap = new ymaps.Map('showrooms-map', { center: [55.76, 37.64], zoom: 4, controls: ['zoomControl', 'fullscreenControl'] });
  const helpers = showroomMapHelpers();

  function setMarkers() {
    for (let i = 0; i < SHOWROOMS.length; i++) {
      myMap.behaviors.disable('scrollZoom');
      myMap.geoObjects.add(helpers.marker(SHOWROOMS[i]));
    }
  }
  setMarkers();
  myMap.setBounds(myMap.geoObjects.getBounds());
  myMap.setZoom(myMap.getZoom(), { checkZoomRange: true });
}

function initShowroomMap() {
  const myMap = new ymaps.Map('showroom-map', { center: [+SHOWROOM.COORDINATES.lat, +SHOWROOM.COORDINATES.long], zoom: 4, controls: ['zoomControl', 'fullscreenControl'] });
  const helpers = showroomMapHelpers();

  function setMarkers() {
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(helpers.marker(SHOWROOM));
  }
  setMarkers();
  myMap.setBounds(myMap.geoObjects.getBounds());
  myMap.setZoom(myMap.getZoom(), { checkZoomRange: true });
}

function initPopupShowroomsMap() {
  const myMap = new ymaps.Map('popup-showrooms-map', { center: [55.76, 37.64], zoom: 4, controls: ['zoomControl', 'fullscreenControl'] });
  const helpers = showroomMapHelpers();
  const menuContainer = $('#popup-showrooms-nav');

  function setMarkers() {
    for (let i = 0; i < POPUP_SHOWROOMS.length; i++) {
      myMap.behaviors.disable('scrollZoom');
      myMap.geoObjects.add(helpers.marker(POPUP_SHOWROOMS[i]));
    }
  }
  setMarkers();
  myMap.setBounds(myMap.geoObjects.getBounds());
  myMap.setZoom(myMap.getZoom(), { checkZoomRange: true });

  for (let i = 0; i < POPUP_SHOWROOMS.length; i++) {
    let showroom = POPUP_SHOWROOMS[i];
    (function (name, city, address, count, lat, long) {
      $(`
        <a class="nav-link popup-nav-link d-flex flex-column" href="#">
          <span>
              <span class="font-weight-bold text-gray-dark">${name}</span>
              <span class="text-muted text-nowrap">${count} шт.</span>
          </span>
          <span class="text-gray typo-sm">${city}, ${address}</span>
        </a>`
      )
        .on('click', function() {
          menuContainer.find('a').removeClass('active');
          $(this).addClass('active');
          myMap.panTo([lat, long], { flying: 1 });
          return false;
        })
        .appendTo(menuContainer);
    }(showroom.NAME, showroom.CITY, showroom.ADDRESS, showroom.COUNT, +showroom.COORDINATES.lat, +showroom.COORDINATES.long));
  }
}

var markers = {};

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
      const name = showroom.NAME;
      const id = showroom.ID;
      const region = showroom.REGION;

      return new ymaps.Placemark([lat, lng], {
        hintContent,
        balloonContent: ballonHTML(showroom),
        title: name,
        id: id,
        region: region,
      }, {
        iconLayout: 'default#image',
        iconImageHref,
        iconImageSize: [36, 51],
        iconImageOffset: [-18, -51],
      });
    },
  };
}

function initPartnersMap() {
  const myMap = new ymaps.Map('partners-map', { center: [55.76, 37.64], zoom: 4, controls: ['zoomControl', 'fullscreenControl'] });
  const helpers = showroomMapHelpers();
  var myPointsCollection = new ymaps.GeoObjectCollection();
  function setMarkers() {
    for (let i = 0; i < SHOWROOMS.length; i++) {
      var showroom = SHOWROOMS[i];
      var marker = helpers.marker(showroom);
      markers[showroom.ID] = marker;
      myPointsCollection.add(marker);

      $('.js-partner[data-id='+showroom.ID+']').on('click', function(){
        // for (var key in markers) {
        //   markers[key].setIcon(image);
        // }
        var currentID = $(this).attr('data-id');
        // markers[currentID].setIcon(imageActive);
        myMap.setZoom(15);
        myMap.setCenter(markers[currentID].geometry._coordinates);
      });
    }
    myMap.geoObjects.add(myPointsCollection);
    myMap.setBounds(myPointsCollection.getBounds());
  }
  setMarkers();
  myMap.setBounds(myMap.geoObjects.getBounds());

  $('.js-choose-region').on('click', function(){
    var region = $(this).attr('data-region');

    $('.js-partner').hide();
    $('.js-hidden-part').attr('style', '');
    $('.js-caret').removeClass('active');

    if (region) {
      $('.js-partner[data-region='+region+']').show();
    } else {
      $('.js-partner').show();
    };

    myPointsCollection = new ymaps.GeoObjectCollection();
    for (var key in markers) {
      if (region === '' || markers[key].properties._data.region === region) {
        myPointsCollection.add(markers[key]);
      }
    }
    myMap.geoObjects.add(myPointsCollection);
    myMap.setBounds(myPointsCollection.getBounds());
  });

  $('.js-partner').on('click', function(){
    if(!$(this).hasClass('active')) {
      $('.js-partner').removeClass('active');
      $(this).addClass('active');
    }
  });
  
  $('.js-caret').on('click', function(){
    $(this).siblings('.js-hidden-part').slideToggle();
    $(this).toggleClass('active');
  });
}

function initShowroomsMap() {
  const myMap = new ymaps.Map('showrooms-map', { center: [55.76, 37.64], zoom: 4, controls: ['zoomControl', 'fullscreenControl'] });
  const helpers = showroomMapHelpers();
  var myPointsCollection = new ymaps.GeoObjectCollection();
  function setMarkers() {
    for (let i = 0; i < SHOWROOMS.length; i++) {
      var showroom = SHOWROOMS[i];
      var marker = helpers.marker(showroom);
      markers[showroom.ID] = marker;
      myPointsCollection.add(marker);
    }
    myMap.geoObjects.add(myPointsCollection);
    myMap.setBounds(myPointsCollection.getBounds());
  }
  setMarkers();
  myMap.setBounds(myMap.geoObjects.getBounds());

  $('.js-select-region').on('change', function(){
    var region = $(this).val();

    if (region) {
      $('.js-partner').hide();
      $('.js-partner[data-region='+region+']').show() 
    } else {
      $('.js-partner').show();
    };

    myPointsCollection = new ymaps.GeoObjectCollection();
    for (var key in markers) {
      if (region === '' || markers[key].properties._data.region === region) {
        myPointsCollection.add(markers[key]);
      }
    }
    myMap.geoObjects.add(myPointsCollection);
    myMap.setBounds(myPointsCollection.getBounds());
  });
}

function initShowroomMap() {
  const myMap = new ymaps.Map('showroom-map', { center: [+SHOWROOM.COORDINATES.lat, +SHOWROOM.COORDINATES.long], zoom: 15, controls: ['zoomControl', 'fullscreenControl'] });
  const helpers = showroomMapHelpers();

  function setMarkers() {
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(helpers.marker(SHOWROOM));
  }
  setMarkers();
  myMap.setBounds(myMap.geoObjects.getBounds());
  myMap.setZoom(15, { checkZoomRange: true });
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

let map;
const mapStyles = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dadada',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#c9c9c9',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
];

const infoWindowContent = [];
for (let i = 0; i < showrooms.length; i++) {
  infoWindowContent.push([`<article class="map-marker-info js-map-marker">${
    showrooms[i].PREVIEW_PIC ? `${'<div class="map-marker-info__left">' +
    '<img class="map-marker-info__icon" src="'}${showrooms[i].PREVIEW_PIC}">` +
    '</div>' : ''
  }${showrooms[i].PREVIEW_PIC ? '<div class="map-marker-info__right">' : ''
  }<p class="map-marker-info__address">` +
  '<span></span>' +
  `<span>${showrooms[i].ADDRESS}</span>` +
  '</p>' +
  `<a class="map-marker-info__link" href="${showrooms[i].LINK}">Перейти к шоу-руму</a>${
    showrooms[i].PREVIEW_PIC ? '</div>' : ''
  }</article>`]);
}

function initShowroomsMap() {
  map = new google.maps.Map(document.getElementById('showrooms-map'), {
    center: { lat: 55, lng: 65 },
    zoom: 5,
    disableDefaultUI: true,
    scrollwheel: false,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
    },
    stylers: [
      {
        lightness: 0,
      },
    ],
  });

  map.setOptions({ styles: mapStyles });
  map.data.setStyle(feature => ({
    title: feature.getProperty('name'),
    optimized: false,
  }));
  setMarkers();
  google.maps.event.addDomListener(window, 'resize', () => {
    const center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
  });
}
function setMarkers() {
  const image = {
    url: '/local/templates/kare_new/icons/k-pin.png',
    origin: new google.maps.Point(0, 0),
  };
  const imagePartner = {
    url: '/local/templates/kare_new/icons/partner-pin.png',
    origin: new google.maps.Point(0, 0),
  };
  for (var i = 0; i < showrooms.length; i++) {
    const showroom = showrooms[i];
    const long = +showroom.COORDINATES.long;
    const lat = +showroom.COORDINATES.lat;
    const icon = showroom.PIN_TYPE === "2" ? imagePartner : image;
    const name = showroom.NAME;

    var marker = new google.maps.Marker({
      position: { lat, lng: long },
      map,
      icon: icon,
      title: name,
    });
    var infoWindow = new google.maps.InfoWindow(),
      marker,
      i;
    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        infoWindow.setContent(infoWindowContent[i][0]);
        infoWindow.open(map, marker);
        $('.js-map-marker').closest('div').css('overflow', '');
      };
    }(marker, i)));
  }
}

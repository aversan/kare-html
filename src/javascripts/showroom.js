import './modules/common';
import './modules/index';

(function(){
  const brMap = function(coords, id) {
    const self = this;
    this.coords = coords;
    this.map = null;
    this.marker = null;
    this.id = id;

    this.renderMap = () => {
      if(typeof self.coords === 'undefined'){
        self.coords = [56.1310603, 37.9123714];
      }
      const mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(self.coords[0], self.coords[1]),
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl : true,
        streetViewControlOptions : {
          position: google.maps.ControlPosition.LEFT_BOTTOM,
        },
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_BOTTOM,
        },
        draggable: true,
      };
      const block = document.getElementById('map' + self.id);
      self.map = new google.maps.Map(document.getElementById('map' + self.id), mapOptions);
      self.renderMarker();
    };

    this.redrawMap = () => {
      document.getElementById('map' + self.id).innerHTML = '';
      self.renderMap();
    };

    var image = {
      url: '../images/abis-marker.png',
      size: new google.maps.Size(245, 245),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(45, 100),
    };

    this.renderMarker = () => {
      self.marker = new google.maps.Marker({
        position: new google.maps.LatLng(self.coords[0], self.coords[1] - '0.00020'),
        map: self.map,
        // label: {
        //   text: 'Крайняя улица, 2',
        //   color: 'red',
        //   fontSize: '14px',
        //   fontWeight: 'bold',
        // },
        labelInBackground: false,
        labelAnchor: new google.maps.Point(15, 65),
        labelClass: "marker-label",
        icon: image,
      });
    };

    this.renderMap();
    return this;
  };

  function renderMaps(mapPrints) {
    for(let i in mapPrints){
      if(typeof window.mapDraw[i] === 'undefined'){
        const mapObject = new brMap(window.APP[i], i);
        window.mapDraw[i] = { 'object': mapObject, 'centers': window.APP[i] };
      }
    }
  }

  $(() => {
    window.mapDraw = {};
    if(window.APP && typeof window.APP !== 'undefined'){
      let mapPrints = {};
      mapPrints[1] = {};
      google.maps.event.addDomListener(window, 'load', renderMaps(mapPrints));
    }
  });
})();


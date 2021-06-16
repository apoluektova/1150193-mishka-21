ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [59.93863506417266,30.323117499999945],
    zoom: 17,
    controls: []
  });

  myMap.behaviors.disable("scrollZoom");

  var myPlacemark = new ymaps.Placemark([59.93863506417266,30.323117499999945], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/ svg/map-pin.svg',
    iconImageSize: [67, 100],
    iconImageOffset: [-22, -80]
  });

  myMap.geoObjects.add(myPlacemark);
}

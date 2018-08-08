const mapboxgl=require('mapbox-gl');
const crmarker=require('./markers')
//console.log("Hello from Javascript");

mapboxgl.accessToken = 'pk.eyJ1IjoibWVnaHMyNTEyIiwiYSI6ImNqa2s0aGhtZjBoZ3oza3A4dGRnZTdhNDAifQ.nxn55m6A9DvyaAj_aXa7Gg';

const map = new mapboxgl.Map({
  container:"map",
  center:[-74.009,40.705],
  zoom:12,
  style:"mapbox://styles/mapbox/streets-v10"
});

const markActivity=crmarker('activity',[-73,40.705]);
const markHotel=crmarker('hotel',[-74.009,40.705]);
const markRestaurant=crmarker('restaurant',[-74,40.705]);
markActivity.addTo(map);
markHotel.addTo(map);
markRestaurant.addTo(map);




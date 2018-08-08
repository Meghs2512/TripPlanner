const mapboxgl=require('mapbox-gl');
function createmarker(type,cordinates)
{
  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  if(type=== 'activity')
  {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  }
  else if(type==='hotel')
  {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  }
  else if(type=='restaurant')
  {
    markerDomEl.style.backgroundImage = "url( http://i.imgur.com/cqR6pUI.png)";
  }
  const createMarker = new mapboxgl.Marker(markerDomEl)
  .setLngLat(cordinates);
  return createMarker;
}
module.exports=createmarker;

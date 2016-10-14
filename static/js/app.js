var map;
var code = "1YIj-UIK6aWD8gf4MN9JpQwmfxmjlfjAZStBrq_obZcM"

document.addEventListener('DOMContentLoaded',function(){
  map = L.map('map').setView([49, 17], 7);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  Tabletop.init({
    key: code,
    callback: function(sheet, tabletop){
      for (var i in sheet){
        var place = sheet[i];
        L.marker([place.lat, place.lon])
          .bindPopup(place.name)
          .addTo(map)
          .openPopup();
      }
    },
    simpleSheet: true
  })

})

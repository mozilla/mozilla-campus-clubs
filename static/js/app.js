var map;
var code = "1MkdrvvnNmCePzw9zOBL7wefmtAOW7dEcFJlvXinqtlM"

document.addEventListener('DOMContentLoaded',function(){
  map = L.map('map').setView([49, 17], 3);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

Tabletop.init({
    key: code,
    callback: function(sheet, tabletop){
      for (var i in sheet){
        var place = sheet[i];
        console.log(i);
        L.marker([place.geolatitude, place.geolongitude])
          .bindPopup("<a href=\""+place.mozillian+"\">"+place.fullname+"</a> <br>"+place.city+", "+place.region+", "+place.country+"<br>Status: "+place.status+"<br>Last report: "+place.lastreport)
          .addTo(map)
      }
    },
    simpleSheet: true
  })

Tabletop.init({
    key: "1D3YE6bffcq5g8pDaKnLgiSWaWwZFjaM0cjK8bSzFEQY",
    callback: function(sheet, tabletop){
      for (var i in sheet){
        var place = sheet[i];
        console.log(i);
        L.marker([place.geolatitude, place.geolongitude],{icon: L.spriteIcon('red')})
          .bindPopup("<a href=\""+place.website+"\">"+place.universityname+"</a> <br>"+place.address+"<br>"+place.city+", "+place.region+", "+place.country+"<br>Club Captain: "+"<a href=\""+place.mozillian+"\">"+place.clubcaptain+"</a><br>Status: "+place.status+"<br>Last report: "+place.lastreport)
          .addTo(map)
      }
    },
    simpleSheet: true
  })


})

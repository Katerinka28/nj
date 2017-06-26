function initMap() {
        var uluru = {lat: 39.834, lng: -74.872 };
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
 $("#form").validate();

// 39.833851, -74.871826.
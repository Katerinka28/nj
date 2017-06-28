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
 $("#newform").validate();


$(document).ready(function(){
   //mobile menu 
    $('.header__mob-icon').click(function(e) {
        $('.header__mobile').toggleClass('is-mobile-header');
        $('body').toggleClass('load');
    });
    $('.header__mob-close').click(function(e) {
        $('.header__mobile').removeClass('is-mobile-header');
        $('body').removeClass('load');
    });
});

// 39.833851, -74.871826.
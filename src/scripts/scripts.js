function initMap() {
        var uluru = {lat: 39.834, lng: -74.872 };
        var map = new google.maps.Map(document.getElementById('block4'), {
          zoom: 10,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
$(document).ready(function(){
  $("#form").validate({
    rules:{
      name:{
        required: true,
        minlength: 2
      },
      tel:{
        required: true

      }
    },  
    messages:{
      name:{
        required: "This field is required",
        minlength: "Пожалуйста, введите минимум 2 символа"
      },
      tel:{
        required: "This field is required",
        maxlength: "Максимальное кол-во вводимых символов-10"
      } 
  }      
 });
})  
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



$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top-54}, 1500);
  });
});

$(document).ready(function(){
  $("#menu-mob").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top-66}, 1500);
  });
});



jQuery(function($){
   $("#tel").mask("+38(099) 999-9999"),
   $("#phone").mask("+38(099) 999-9999"),
   $("#date").mask("99/99/9999");

   });

//mini header
$(window).scroll(function() {
  var h1 = $('.top2').offset().top;
  if($(window).scrollTop() > h1 ){
    $(".header").addClass("is-mini-header");
    $(".top2").addClass("is-top");
  }
  else {
    $(".header").removeClass("is-mini-header");
    $(".top2").removeClass("is-top");
  }  
});



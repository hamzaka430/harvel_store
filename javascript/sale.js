$(document).ready(function(){
    $('.sale-slider').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 4000,
     arrows: false,
     dots: false,
     pauseOnHover: false,
     responsive: [{
         breakpoint: 768,
         settings: {
             slidesToShow: 1
         }
     }, {
         breakpoint: 520,
         settings: {
             slidesToShow: 1
         }
     }]
    });
    });
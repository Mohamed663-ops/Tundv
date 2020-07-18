$(function(){

    //owl
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    
  //navbar 
    var nav=$('nav').offset();
    var y = window.scrollY
    window.addEventListener('scroll', function(e) {
    console.log(nav.top);
    });
   //aos
   AOS.init({
            offset: 100, 
            delay: 0, 
            duration: 1300, 
            easing: 'ease',
            disable: function() {
                var maxWidth = 800;
                return window.innerWidth < maxWidth;
            }
        });

});


$(document).ready(function(){


  // preloader 
  setTimeout(function(){
    $('.preloader').fadeToggle();
  }, 3000);

  // smoorth scroll
  
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
  
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - 20;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
    
  })


// landing page mobile menu active

    $('.mobile-menu').click(function() {
        $('.side-menu').addClass('active');
    })
    
    $('.side-menu-hide').click(function() {
        $('.side-menu').removeClass('active');
    })
    

// testimonial-slider


    $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true
      });


// testimonial-slider ends


$('.photo-gl').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
  });

// faq acive
$(".plus1").click(function(){
  $(".line-1,.text1").toggle(300);
});
$(".plus2").click(function(){
  $(".line-2,.text2").toggle(300);
});
$(".plus3").click(function(){
  $(".line-3,.text3").toggle(300);
});
$(".plus4").click(function(){
  $(".line-4,.text4").toggle(300);
});
$(".plus5").click(function(){
  $(".line-5,.text5").toggle(300);
});
$(".plus6").click(function(){
  $(".line-6,.text6").toggle(300);
});
$(".plus7").click(function(){
  $(".line-7,.text7").toggle(300);
});


// md drives faq slider 


  $('.faq-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
  });


// about us page
$('.about-menu-bar').click(function() {
  $('.side-menu').addClass('active');
})

$('.side-menu-hide').click(function() {
  $('.side-menu').removeClass('active');
})

// contact us side bar 

$('.contact-side-bar').click(function() {
  $('.side-menu').addClass('active');
})

$('.side-menu-hide').click(function() {
  $('.side-menu').removeClass('active');
})


// couple page - side bar 

$('.couple-side-bar').click(function() {
  $('.side-menu').addClass('active');
})

$('.side-menu-hide').click(function() {
  $('.side-menu').removeClass('active');
})

// guest page - side bar 

$('.guest-side-bar').click(function() {
  $('.side-menu').addClass('active');
})

$('.side-menu-hide').click(function() {
  $('.side-menu').removeClass('active');
})









});
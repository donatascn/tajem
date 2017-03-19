//paspaudus and burgerio, pakeicia nav listo klase, kurioje yra display: none;
$("div.box-shadow-menu").on("click", function() {
  // event.preventDefault();
  $("ul.mobile-navigation").toggleClass('toggle-mobile-navigation');
});

$(".mobile-navigation > li > a").on("click", function() {
  $("ul.mobile-navigation").toggleClass('toggle-mobile-navigation');
});



$(".carousel").on("touchstart", function(event){
        var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function(event){
        var xMove = event.originalEvent.touches[0].pageX;
        if( Math.floor(xClick - xMove) > 5 ){
            $(".carousel").carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -5 ){
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
    });
});


$("document").ready(function () {
  $(".navigation > li > a").on("click", function(event) {
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
  } // End if
  });

});





$(function () {
  if($(window).innerWidth() >= 1024)
  {
  $(".projektai > div").slice(0, 6).show();

  $(".our-works-body > .mygtukas").on('click', function (e) {
      e.preventDefault();
      $(".projektai > div:hidden").slice(0, 6).slideDown();
      if ($(".projektai > div:hidden").length == 0) {
          $("#loadMore").fadeOut('slow');
      }
  })


};

  if(($(window).innerWidth() >= 768) && ($(window).innerWidth() < 1024) )
  {
  $(".projektai > div").slice(0, 2).show();

  $(".our-works-body > .mygtukas").on('click', function (e) {
      e.preventDefault();
      $(".projektai > div:hidden").slice(0, 2).slideDown();
      if ($(".projektai > div:hidden").length == 0) {
          $("#loadMore").fadeOut('slow');
      }
      // $('html,body').animate({
      //     scrollTop: $(this).offset().top
      // }, 1500);
  })};



  if(($(window).innerWidth() < 768) )
  {
  $(".projektai > div").slice(0, 1).show();

  $(".our-works-body > .mygtukas").on('click', function (e) {
      e.preventDefault();
      $(".projektai > div:hidden").slice(0, 1).slideDown();
      if ($(".projektai > div:hidden").length == 0) {
          $("#loadMore").fadeOut('slow');
      }
      // $('html,body').animate({
      //     scrollTop: $(this).offset().top
      // }, 1500);
  })};



});

// $('a[href=#top]').click(function () {
//   $('body,html').animate({
//       scrollTop: 0
//   }, 600);
//   return false;
// });
//
// $(window).scroll(function () {
//   if ($(this).scrollTop() > 50) {
//       $('.totop a').fadeIn();
//   } else {
//       $('.totop a').fadeOut();
//   }
// });

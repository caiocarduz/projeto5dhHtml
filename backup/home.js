// external js: flickity.pkgd.js

// card

$('.buy').click(function(){
    $('.bottom').addClass("clicked");
  });
  
  $('.remove').click(function(){
    $('.bottom').removeClass("clicked");
  });

  $('.cardSecaoDois').click(function (){

    window.location= $(this).attr ('#id');
    
    });
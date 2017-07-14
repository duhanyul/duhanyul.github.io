// $(document).ready(function(){
  "use strict"
  console.log("JS loaded");
  /************ DROPDOWN MENU **********/
  var dropDown = $('#dropdown');
  var menu = $('.menu');
  var menuItems = $(".menu-content");
  var close = $('.closeBTN');
  menu.hide();
  // CHECK IF ON MOBILE PLATFORM

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

    console.log("MOBILE");
    dropDown.click(function(){
      dropDown.hide();
      menu.animate({
        width: "toggle"
      },850);
      menuItems.animate({
        width: "100%"
      },850);
    });
    close.click(closing)
  }
  // IF NOT ON MOBILE PLATFORM

  else {
    dropDown.click(function(){
      dropDown.hide();
      menu.animate({
        width: "toggle"
      },800);
      menuItems.animate({
        width: "30%"
      },850)
      close.animate(1200)
    });
    close.click(closing)
  }

  // CLOSING ANIMATION FUNCTION

    function closing(){
      menu.animate({
        width: "toggle"
      },800);
      menuItems.animate({
        width: "0%"
      },1000)
      close.animate(1200);
      dropDown.css("display","inline-block");
    }

    /******************** PROJECTS **************/
// });

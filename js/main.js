// $(document).ready(function(){
  "use strict"
  console.log("JS loaded");
  /************ DROPDOWN MENU **********/
  var dropDown = $('#dropdown');
  var menu = $('.menu');
  var menuItems = $(".menu-content");
  var close = $('.closeBTN');
  menu.hide();


    dropDown.click(function(){
      if ($(window).width() > 739) {
        dropDown.hide();
        menu.animate({
          width: "toggle"
        },800);
        menuItems.animate({
          width: "30%"
        },1000)
      }else {
        dropDown.hide();
        menu.animate({
          width: "toggle"
        },800);
        menuItems.animate({
          width: "100%"
        },1000)
      }

    });
    close.click(function(){
      menu.animate({
        width: "toggle"
      },800);
      menuItems.animate({
        width: "0%"
      },1000)
      close.animate(1200);
      dropDown.css("display","inline-block");
    })




// });

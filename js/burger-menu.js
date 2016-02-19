(function() {

  "use strict";

  var burgerMenuIcon = $("#burger-menu-icon");
  var mainNav = $("#main-nav")
  
  burgerMenuIcon.on( "click", function(e) {
    e.preventDefault();
    if(mainNav.hasClass("is-active")){
      mainNav.removeClass("is-active");
      burgerMenuIcon.removeClass('is-active');
    }else{
      mainNav.addClass("is-active");
      burgerMenuIcon.addClass("is-active");
    }
  });


})();
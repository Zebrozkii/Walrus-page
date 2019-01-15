$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").slideToggle();
    $(".walrus-hidden").slideToggle();
  });
});
$(document).ready(function(){
  $(".clickable1").click(function(){
    $(".baby-walrus-hidden").fadeToggle();
    $(".baby-walrus-showing").fadeToggle();
  });
});
$(document).ready(function(){
  $(".clickable2").click(function(){
    $(".walrus-suit-hidden").fadeToggle();
    $(".walrus-suit-showing").fadeToggle();
  });
});

$(document).ready(function(){
  $("button#light").click(function(){
    $("body").removeClass();
    $("body").addClass("light-background");
  });

  $("button#dark").click(function(){
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
});

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

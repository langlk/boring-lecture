$(document).ready(function() {
  $("p").click(function() {
    $(this).addClass("highlighted");
  });

  $("button").click(function() {
    $("p").removeClass("highlighted");
  });
});

$(document).ready(function(){
    $('img').hover(function() {
        $(this).css("cursor", "pointer");
        $(this).toggle({
          effect: "scale",
          percent: "90%"
        },200);
    }, function() {
         $(.map).toggle({
           effect: "scale",
           percent: "80%"
         },200);

    });
}); 
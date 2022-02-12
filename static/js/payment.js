
$("#card").click(function(){
   $(".button").css({display:"none"}); $(".payUsingCard").css({display: "block" });
});

$("#delivery").click(function(){
    $(".button").css({display: "block"}) ; $(".payUsingCard").css({display: "none" });
 });

 
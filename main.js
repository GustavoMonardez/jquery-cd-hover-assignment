$(document).ready(function(){
    $("img").hover(function(){
        $(this).attr("src", $(this).attr("back"));
    },function(){
        $(this).attr("src", $(this).attr("front"));
    });
});
const form = document.querySelector("#map")

const OPEN_CN = "open";

$(".menuBtn").click(function(e){
    e.preventDefault();
    $(".nav").animate({width:"toggle"},100);
    form.classList.add(OPEN_CN); 
});
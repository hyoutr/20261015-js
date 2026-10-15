$(function(){

    let count = $("#slide li").length;

    let current = 1;

    let next = 2;

    let interval = 3000;

    let duration = 500;

    let timer;

    $("#slide li:not(:first-child)").hide();

    timer = setInterval(slideTimer,interval);

    function slideTimer(){
        $("#slide li:nth-child(" + current + ")").fadeOut(duration);
        $("#slide li:nth-child(" + next + ")").fadeIn(duration);

        current = next;

        next = ++next;

        if(next > count){
            next = 1;
        }

        $("#button li a").removeClass("target");

        $("#button li:nth-child(" + current + ") a").addClass("target");
    }

    $("#button a").click(function(){
        next = $(this).html();

    clearInterval(timer);
    timer = setInterval(slideTimer, interval);

    // 初回の関数実行
    slideTimer();

    return false;

    });

});
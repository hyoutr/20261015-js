$(function () {
    //スクロールの方向　−１左　１右
    let dir = -1;

    //スクロールのインターバル（何秒ごとにスクロールさせるか）
    let interval =3000; //3000ミリ秒 = 三秒

    //スクロールのアニメーションの時間
    let duration =700;

    //タイマー用変数
    let timer;

    //liの順番を変更
    $("#slide ul").prepend($("#slide li:last-child"));
    
    //liの位置を変更（画像一枚分けずらす）
    $("#slide ul").css("left",-1000);

    timer = setInterval(slideTimer,interval);

    function slideTimer(){
        //
        if(dir== -1){
            $("#slide ul").animate({ left: "-=1000px"},duration,function()
        {
            $(this).append($("#slide li:first-child"));

            $(this).css("left",-1000);
        });
        }else {
            $("#slide ul").animate({"left":"+=1000px"},duration,
                function(){
                    $(this).prepend($("#slide li:last-child"));

                    $(this).css("left",-1000);

                    dir= -1;
                }
            );
        }
    }

    $("#prevBtn").click(function(){

        dir=1;

        clearInterval(timer);
        timer = setInterval(slideTimer,interval);

        slideTimer();
    });
    $("#nextBtn").click(function(){

        dir= -1;

        clearInterval(timer);
        timer = setInterval(slideTimer,interval);

        slideTimer();
    });
});
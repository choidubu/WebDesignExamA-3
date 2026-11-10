$(function () {
    //메뉴
    $("nav>ul>li").mouseenter(function () {
        $(this).children(".sub").stop().slideDown();
    })

    $("nav>ul>li").mouseleave(function () {
        $(this).children(".sub").stop().slideUp();
    })

    //키보드
    $("nav>ul>li").focusin(function () {
        $(this).children(".sub").stop().slideDown();
        $(this).addClass("on");
    })

    $("nav li li:last-child").focusout(function () {
        $(".sub").slideUp();
        $("nav>ul>li").removeClass("on")
    })


    //팝업
    $(".pp").click(function () {
        $(".popup").show();
        return false;
    })

    $(".button").click(function () {
        $(".popup").hide();
    })

    //탭 메뉴
    $(".tabmenu li").click(function () {
        $(".tabmenu li").removeClass("on")
        $(this).addClass("on");

        var i = $(this).index();

        $(".tabcon").hide();
        $(".tabcon").eq(i).show();
    })

    //슬라이드
    var t = 0;

    function slide() {
        if (t < 2) {
            t++;
        } else { t = 0 }
        $(".slide ul li").fadeOut()
        $(".slide ul li").eq(t).fadeIn()
    }

    setInterval(slide, 2000)
})

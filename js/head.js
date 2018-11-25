$(function(){
    var $top = $(".top");
    $(window).scroll(function(){
        var winPos = $(window).scrollTop();
        if(winPos>200)
            $top.show();
        else
            $top.hide();
    })
})
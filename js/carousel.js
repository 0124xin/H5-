  /*
        1.动态生成ol
        2.鼠标悬浮时显示arrow，鼠标离开时隐藏
        3.点击li是移动图片
        4.上一张，下一张
        5.无缝滚动
        */
        /*
        动态生成ol
        */
       $(function () {
        var time//定时器
        var $parent = $(".box");
        var $ul = $parent.find('.screen ul');
        var $ol = $parent.find('.screen ol');
        var $arrow = $parent.find('.arrow')
        var count = $ul.children().length;
        var imgWidth = $ul.children(':first').width();
        var index = 0;
        for (var i = 0; i < count; i++) {
            $ol.append('<li>' + (i + 1) + '</li>')
        }
        $ol.children(':first').addClass('current');
        $ul.append($ul.children(':first').clone(true))
        $parent.mouseover(function () {
            $arrow.show()
        })
        $parent.mouseout(function () {
            $arrow.hide();
        })
        $('ol li').each(function () {
            $(this).click(function () {
                window.clearInterval(time);
                index = $(this).index();
                console.log(index)
                $ul.stop().animate({
                    left: -index * imgWidth
                })
                $(this).addClass('current').siblings().removeClass('current');
                time = setInterval(() => {
          $arrow.children(':last').trigger('click') 
       }, 8000);
            })
        })
        $arrow.children(':last').click(function(){
            index++;
            if(index<count)
                $ol.children().eq(index).trigger('click');
            else{
                $ul.stop().animate({left:-index*imgWidth},function(){
                    $ol.children(':first').addClass('current').siblings().removeClass('current')
                    index = 0;
                    $ul.css("left",0);
                })
            }
        })
        $arrow.children(':first').click(function(){
            index--;
            if(index>=0)
                $ol.children().eq(index).trigger('click');
            else{
                $ul.css("left",-count*imgWidth)
                index = count-1;
                $ol.children().eq(index).trigger('click');
            }
        })
        time = setInterval(() => {
          $arrow.children(':last').trigger('click') 
       }, 8000);


    })
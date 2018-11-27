var intDiff = parseInt(60000); //初始倒计时秒数

        function timer(intDiff) {
            window.setInterval(function () {
                var hour = 0;
                var minute = 0;
                var second = 0;
                if (intDiff > 0) {
                    hour = Math.floor(intDiff / (60 * 60));
                    minute = Math.floor(intDiff / 60) - hour * 60;
                    second = Math.floor(intDiff) - (hour * 60 * 60) - (minute * 60);
                }
                if (minute < 10) minute = '0' + minute;
                if (second < 10) second = '0' + second;
                $('.sk_left span').eq(0).html(hour);
                $('.sk_left span').eq(1).html(minute);
                $('.sk_left span').eq(2).html(second);
                intDiff--;
                console.log(hour + ':' + minute + ':' + second)
            }, 1000)
        }
        $(function () {
            var $cate_detail = $('.cate_detail'); //分类框
            var $banner = $('.banner') //banner部分
            var $slider_right = $('.slider-right');
            var $lis = $('.slider li') //导航
            $lis.mouseover(function () {
                $cate_detail.show();
                $banner.hide();
                $slider_right.hide();
            })
            $lis.mouseout(function () {
                $cate_detail.hide();
                $banner.show();
                $slider_right.show();
            })
            timer(intDiff)
        })
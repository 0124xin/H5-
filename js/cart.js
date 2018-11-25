$(function () {
    //实现加减
    var $add = $('span.add');
    var $sub = $('span.sub');
    var $checkboxs = $('input:checkbox').not('li input');
    var $allChoose = $('li input');//全选多选框
    
    var $subTotal = $('div.title span.subtotal');
    var $amount = $('div.title span.amount');
    $add.click(function () {
        var $input = $(this).parent().find('input');
        var $price = $(this).parents('.cart-item').find('.price').attr('value');
        var $subTotal = $(this).parents('.cart-item').find('.subtotal');
        var val = $input.val();
        if (val < 10) {
            val++;
            var subTotal = parseInt($price * val) ;
            $subTotal.text('￥' + subTotal);
            $subTotal.attr('value', subTotal);
            $input.val(val);
        }
        calculateSum();
    })
    $sub.click(function () {
        var $input = $(this).parent().find('input');
        var val = parseFloat( $input.val());
        var $price = parseFloat($(this).parents('.cart-item').find('.price').attr('value')) ;
        var $subTotal = $(this).parents('.cart-item').find('.subtotal');
        if (val > 0) {
            val--;
            var subTotal = parseInt($price * val) ;
            $subTotal.text('￥' + subTotal);
            $subTotal.attr('value', subTotal);
            $input.val(val);
        }
        calculateSum();
    })

    //计算商品价格总和
    function calculateSum() {
        $subTotal.text('￥'+0.00);
        var totalSum = 0;//结算商品总价格
        var amount = 0;//已选商品数量
        $amount.text(0);
        $checkboxs.each(function () {
            if ($(this).is(':checked')) {
                var subTotal = parseInt($(this).parents('.cart-item').find('.subtotal').attr('value')) ;
                totalSum += subTotal;  
                amount++;
                console.log(totalSum);                    
                $subTotal.text('￥' + totalSum);
                $amount.text(amount);
            }
        })
    }
    //给多选框添加点击事件
    $checkboxs.each(function () {
        $(this).click(function () {
            calculateSum();
        })
    })

    //给全选多选框添加点击事件
    $allChoose.click(function(){
        if($(this).is(':checked')){
           $checkboxs.prop('checked',true);
           calculateSum();
        }else{
            $checkboxs.prop('checked',false)
            calculateSum();
        }
    })

})
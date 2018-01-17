(function ($) {
    $.extend({
        "tan":function (options) {
            var opts = $.extend({}, defaluts, options); //使用jQuery.extend 覆盖插件默认参数
            var strAdd;
            if(opts.btn2 && opts.btn1){                               //有两个按钮时
                strAdd=`<div class="tan-btn1"><a href="${opts.btn1.url}">${opts.btn1.name}</a></div>
            <div class="tan-btn1"><a href="${opts.btn2.url}">${opts.btn2.name}</a></div>`
            }else if(opts.btn1){                                      //有一个按钮，且有链接时
                strAdd=`<div class="only-btn"><a href="${opts.btn1.url}">${opts.btn1.name}</a></div>`
            }else{                                                     //只有一条提示信息时
                strAdd=`<div class="only-btn only-close">关闭</div>`
            }
            var str=`<div class="fix-body">
                        <div class="tan-box">
                            <div class="close-fix">关闭</div>
                                <div class="tan-message">
                                    ${opts.message}
                                </div>
                                <div class="tan-btn">
                                    ${strAdd}
                                </div>
                            </div>
                        </div>`;
            $('body').append(str);
            var defaluts = {
                message: '欢迎使用',

            };
            $('.close-fix').click(function () {
                $(this).parents('.fix-body').remove()
            });
            $('.only-close').click(function () {
                $(this).parents('.fix-body').remove()
            })
        }
    })
})($)
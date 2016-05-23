/**
 * Created by chenJJ on 14-12-2.
 */
//* 隐藏页面只显示加载效果
if(navigator.appName != "Microsoft Internet Explorer"){
    document.documentElement.className += 'hidenELE';
}

//加载动画并把效果居中
function loadingSet(loading_type,loading_time){

    var _height = $(window).height();
    var _width = $(window).width();
    //动态图gif加载特效
    if(loading_type == 1){

        var loading_height = (_height - $('#loading_img').height())/2 + 'px';
        var loading_width = (_width - $('#loading_img').width())/2 + 'px';

        $('.hidenELE #loading_layer #loading_img').css('top',loading_height);
        $('.hidenELE #loading_layer #loading_img').css('left',loading_width);

    }
    //css3加载特效
    else if(loading_type == 2){

        var spinner_height = (_height - $('#spinner').height())/2 + 'px';
        var spinner_width = (_width - $('#spinner').width())/2 + 'px';

        $('.hidenELE #loading_layer .spinner').css('top',spinner_height);
        $('.hidenELE #loading_layer .spinner').css('left',spinner_width);
    }

    //* 隐藏加载效果显示页面
    setTimeout('$("html").removeClass("hidenELE")',loading_time);
    // 启动淡化效果 200为等待加载效果关闭
    setTimeout(colseBG,200);
    function colseBG(){
        $(".background_Frame_div_bg").animate({
            'opacity':'0'
        },1500);
        //关闭遮罩层 4000为等待淡化效果结束
        setTimeout(function(){$(".background_Frame_div_bg").hide();},1500);
    }
}
//调用加载效果设置方法（延时100毫秒是为了保证gif已经下载好）
//loadingSet第一个参数为类型，1为gif动态图，2为css3效果，1000为毫秒数
if(navigator.appName != "Microsoft Internet Explorer"){
    setTimeout("loadingSet(1,1000)",100);
}

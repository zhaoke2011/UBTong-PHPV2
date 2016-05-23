/**
 * Created by yu_xing_cheng on 14-12-2.
 */
jQuery(document).ready(function() {
    function iconAnimoF(thisEle){
        thisEle.animate({
            'height':'70px',
            'width':'70px'
        },100);
        thisEle.animate({
            'height':'77px',
            'width':'77px'
        },100);
    }
    var iconTF;//图标定时动态事件
    var thisiconEle;//图标元素
    $(".icon-animo").on("mouseover",function(){
        thisiconEle=$(this);
        //iconAnimoF(thisiconEle);
        //注意setInterval里面函数不能代参数
        iconTF=setInterval(function(){iconAnimoF(thisiconEle);},300);
    });
    $(".icon-animo").on("mouseout",function(){
        var thisEle=$(this);
        clearInterval(iconTF);
    });
    //子系统下 元素动态效果
    var domoveEle;
    var doMoveTime=0;
    $(".buyServer-goods > a").on("mouseover",function(){
        domoveEle=$(this);
        doMoveTime=0;
        //setTimeout(doMoveEF,100);
        setTimeout(state1(),90);
    });
    function doMoveEF(){
        domoveEle.effect("shake",10,1);
    }
    function state1(){
        if(doMoveTime>4){doMoveTime=0;return;}
        domoveEle.removeClass("r2");
        domoveEle.addClass("r1");
        setTimeout(state2,90);
    }
    function state2(){
        doMoveTime++;
        domoveEle.removeClass("r1");
        domoveEle.addClass("r2");
        setTimeout(state1,90);
    }
})
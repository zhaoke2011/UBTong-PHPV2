/**
 * Created by chenjianjun on 14-12-16.
 */
var navigator_type=new Array("IE","Firefox","Chrome","Opera","Safari");
function getExplorerInfo() {
    var explorer = window.navigator.userAgent.toLowerCase() ;
    //ie
    if (explorer.indexOf("msie") >= 0) {
        var ver=explorer.match(/msie ([\d.]+)/)[1];
        return {type:"IE",version:ver,num:0};
    }
    //firefox
    else if (explorer.indexOf("firefox") >= 0) {
        var ver=explorer.match(/firefox\/([\d.]+)/)[1];
        return {type:"Firefox",version:ver,num:1};
    }
    //Chrome
    else if(explorer.indexOf("chrome") >= 0){
        var ver=explorer.match(/chrome\/([\d.]+)/)[1];
        return {type:"Chrome",version:ver,num:2};
    }
    //Opera
    else if(explorer.indexOf("opera") >= 0){
        var ver=explorer.match(/opera.([\d.]+)/)[1];
        return {type:"Opera",version:ver,num:3};
    }
    //Safari
    else if(explorer.indexOf("Safari") >= 0){
        var ver=explorer.match(/version\/([\d.]+)/)[1];
        return {type:"Safari",version:ver,num:4};
    }
}
//alert("type:"+getExplorerInfo().type+"nversion:"+getExplorerInfo().version);

function startLoading(){
    //* 隐藏页面只显示加载效果
    if(navigator.appName != "Microsoft Internet Explorer"){
        document.documentElement.className += 'hidenELE';
    }
    //调用加载效果设置方法（延时100毫秒是为了保证gif已经下载好）
    //loadingSet第一个参数为类型，1为gif动态图，2为css3效果，1000为毫秒数
    if(navigator.appName != "Microsoft Internet Explorer"){
        setTimeout("loadingSet(1,1000)",100);
    }
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
    $(".background_Frame_div_bg").show();
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

$(function(){
    //搜索框事件 start
    $(".input_search_div_1").on("mouseover",function(){
        $(this).addClass("input_search_div_mouseover");
    });
    $(".input_search_div_1").on("mouseout",function(){
        $(this).removeClass("input_search_div_mouseover");
    });
    $(".input_search_1").focus(function(){
        $(this).parent().parent(".input_search_div_1").addClass("input_search_div_focus");
    });
    $(".input_search_1").focusout(function(){
        $(this).parent().parent(".input_search_div_1").removeClass("input_search_div_focus");
    });
    //搜索框事件 end
});
//全局组件js
var componentFunction={
    //初始化输入框提示
    initRemindInputF: function(){
        $("body").append('<div class="errorModel" id="errorModel"></div>');
        return true;
    },
    //展示输入框提示
    showRemindInputF : function(eleDom,str){
        if($('#errorModel').length==0){
            this.initRemindInputF();
        }
        if(str==""){
        	$('#errorModel').html('请注意输入的信息');
        }else{
        	 $('#errorModel').html(str);
        }
        
        var set_top = eleDom.offset().top ;
        var set_left = eleDom.offset().left ;
        $('#errorModel').css('top',set_top + 'px');
        $('#errorModel').css('left',set_left+10 + 'px');
        $('#errorModel').css('display','inline');
        $('#errorModel').css('display','block');
        $('#errorModel').animate({
            'top':set_top+20+"px",
            'opacity':'1'
        },1000);
        setTimeout(function(){
                $('#errorModel').animate({
                'top':set_top-10+"px",
                    'opacity':'0'
            },1000);
            setTimeout(function(){
                $("#errorModel").hide();
            },1000);
        },2000);
        return true;
    },
    //关闭输入框提示
    closeRemindInputF : function(){
        $("#errorModel").hide();
        return true;
    },
    //下拉框
    select_style_1:function(){
        $(".select_style_1").each(function(){
            var s=$(this);
            var z=parseInt(s.css("z-index"));
            var dt=$(this).children("dt");
            var dd=$(this).children("dd");
            var set_top = $(this).offset().top ;
            dd.attr("opacity",0);
            dd.animate({
                'top':dt.scrollTop()+"px"
            },500);
            var _show=function(){
                dd.css('display','block');
                dd.animate({
                    'top':dt.scrollTop()+34+"px",
                    'opacity':'1'
                },500);
                dt.addClass("cur");
                s.css("z-index",z+1);
            };
            var _hide=function(){
                dd.animate({
                    'top':dt.scrollTop()+"px",
                    'opacity':'0'
                },400);
                dd.delay(100).fadeOut("fast",function(){
                    dd.css('display','none');
                });
                dt.removeClass("cur");
                s.css("z-index",z);
            };
            s.find("li:last").css("border","0px");
            dt.click(function(){
                dd.is(":hidden")?_show():_hide();
            });
            dd.find(".option_value").click(function(){
                dt.find(".selected_value").html($(this).html());
                if($(this).attr("title")!=undefined){
                    dt.find("input").val($(this).attr("title"));
                }else{
                    dt.find("input").val($(this).html());
                }
                _hide();
            });
            dd.bind("focusout",function(){
                _hide();
            });
        })
    },
    //单选框事件 name 单选框的名称 id 为哪项被初始化为选中 -1为没选中
    radio_style_1 : function(radio_name,radio_id){
        var radio_label=$("."+radio_name);
        var radio_span_con=radio_label.children(".input_radio_icon");
        var input_radio_1=radio_label.children(".input_radio_1");
        if(radio_id!=-1){
            radio_span_con.eq(radio_id).addClass("input_radio_icon3");
            input_radio_1.eq(radio_id).attr("checked","true");
        }
        var input_radio_checked;
        var radio_cli_num=0;
        radio_label.bind("click",function(){
            if(getExplorerInfo().num==0){
                radio_cli_num=0;
            }
            if(radio_cli_num==1){
                radio_cli_num=0;return ;
            }
            radio_span_con.removeClass("input_radio_icon3");
            var ele=$(this).children(".input_radio_icon");
            ele.addClass("input_radio_icon3");
            radio_cli_num=1;
        });
        radio_label.on("mousemove",function(){
            var ele=$(this).children(".input_radio_icon");
            if(ele.hasClass("input_radio_icon3")){
                ele.addClass("input_radio_icon4");
            }else{
                ele.addClass("input_radio_icon2");
            }
            return false;
        });
        radio_label.on("mouseout",function(){
            var ele=$(this).children(".input_radio_icon");
            if(ele.hasClass("input_radio_icon3")){
                ele.removeClass("input_radio_icon4");
            }else{
                ele.removeClass("input_radio_icon2");
            }
            return false;
        });
    },
    //复选框事件 checkbox_name复选框名字 checkbox_array初始化数组
    checkbox_style_1 : function(checkbox_name,checkbox_array){
        var checkbox_label=$("."+checkbox_name);
        var input_checkbox_icon=checkbox_label.children(".input_checkbox_icon");
        var input_checkbox_1=checkbox_label.children(".input_checkbox_1");
        var cli_num=0;
        if(checkbox_array!=null){
            var ii=0;
            for(i in checkbox_array){
                if(checkbox_array[i]==1){
                    input_checkbox_icon.eq(ii).addClass("input_checkbox_icon3");
                    input_checkbox_1.eq(ii).attr("checked","true");
                }
                ii=ii+1;
            }
        }
        checkbox_label.bind("click",function(){
            var input_checkbox_1=$(this).children(".input_checkbox_1");
            var checkbox_1=$(this).children(".input_checkbox_icon");
            //* 隐藏页面只显示加载效果
            if(getExplorerInfo().num==0){
                cli_num=0;
            }
            if(cli_num==1){
                cli_num=0;return;
            }
            if(checkbox_1.hasClass("input_checkbox_icon3")){
                checkbox_1.removeClass("input_checkbox_icon3");
                checkbox_1.removeClass("input_checkbox_icon4");
            }else{
                checkbox_1.addClass("input_checkbox_icon3");
            }
            cli_num=1;
        });
        checkbox_label.on("mousemove",function(){
            var ele=$(this).children(".input_checkbox_icon");
            if(ele.hasClass("input_checkbox_icon3")){
                ele.addClass("input_checkbox_icon4");
            }else{
                ele.addClass("input_checkbox_icon2");
            }
            return false;
        });
        checkbox_label.on("mouseout",function(){
            var ele=$(this).children(".input_checkbox_icon");
            if(ele.hasClass("input_checkbox_icon3")){
                ele.removeClass("input_checkbox_icon4");
            }else{
                ele.removeClass("input_checkbox_icon2");
            }
            return false;
        });
    },
    //确认框事件 str提示语 event回调事件
    confirmFrame : function(str,event){
        try{
            //主功能对象 _内页 a全局设置
            _mainFunction_a =window.parent.mainFunction;
            _mainFunction_a.alertFrameShowF4(str,event);
        }catch (excetion){
            if(confirm(str)){
                if(event!=null && (typeof(event)== "function"))
                    setTimeout(event,0);
            }
        }
    },
    //提示框事件 str提示语 event回调事件
    alertFrame : function(str,event){
        try{
            //主功能对象 _内页 a全局设置
            _mainFunction_a =window.parent.mainFunction;
            _mainFunction_a.alertFrameShowF5(str,event);
        }catch (excetion){
            if(alert(str)){
                if(event!=null && (typeof(event)== "function"))
                    setTimeout(event,0);
            }
        }
    },
    //返回顶部事件
    returnTop : function(){
        //定义返回顶部点击向上滚动的动画
        $(".return_top_div").click(function(){
                $('html,body').animate({scrollTop:0},300,function(){
                    $(".return_top_div").fadeOut(200);
                });
        });
        //为窗口的scroll事件绑定处理函数
        $(window).scroll(function(){
            //获取窗口的滚动条的垂直位置
            var s = $(window).scrollTop();
            //当窗口的滚动条的垂直位置大于页面的最小高度时，让返回顶部元素渐现，否则渐隐
            if( s < 50){
                $(".return_top_div").fadeOut(200);
            }else{
                $(".return_top_div").fadeIn(100);
            };
        });
    }
};
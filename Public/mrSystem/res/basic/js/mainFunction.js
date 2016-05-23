/**
 * Created by chenJJ on 14-12-8.
 * 主函数js 用于首页
 */
//全局变量值
var dom_window_content_width;//dom对象可见窗口主内容的宽度
var dom_window_content_height;//dom对象可见窗口主内容的高度
var jQu_window_content_width=$(window).width();//jQuery对象可见窗口主内容的宽度
var jQu_window_content_height=$(window).height();//jQuery对象可见窗口主内容的高度

//提示框跳转url 全局设置
var alert_url="mainPage.html";
//全局功能类
var mainFunction={
    //alert提示框动作 风格1
    runAlertToShow : function() {
        var el = $('.alert_Frame_style1');
        el.show().addClass("animated flipInX").on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass("animated flipInX");
        });
    },
    //alert提示框动作 风格2
    runAlertToShow2 : function() {
        var el = $('.alert_Frame_style2');
        el.show().addClass("animated flipInX").on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass("animated flipInX");
        });
    },
    //alert提示框动作 风格3
    runAlertToShow3 : function() {
        var el = $('.alert_Frame_style3');
        el.show().addClass("animated flipInX").on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass("animated flipInX");
        });
    },
    //提示框 风格1 urlStr 确定时的跳转网址 title "标题" conStr "提示内容"
    //当参数为"false"为设置为默认
    alertFrameShowF : function(urlStr,title,conStr){
        if(urlStr=="false" || urlStr==""){
            alert_url="isCloseAlertFrame";//无跳转事件,关闭提示框
        }else
            alert_url=urlStr;
        if(title=="false" || title==""){
            title="友爱提示";
        }
        if(conStr=="false" || conStr==""){
            conStr="你确定要进行此操作?";
        }
        $(".alert_title_span").html(title);
        $(".alert_conStr").text(conStr);
        $(".background_Frame_div").show();
        this.runAlertToShow();
    },
    //提示框 风格2 title "标题" conStr "提示内容" callback "回调函数"
    //当参数为"false"为设置为默认
    alertFrameShowF2 : function(title,conStr,callback){
        if(title=="false" || title==""){
            title="友爱提示";
        }
        if(conStr=="false" || conStr==""){
            conStr="你确定要进行此操作?";
        }
        $(".alert_title_span").html(title);
        $(".alert_conStr").text(conStr);
        $(".background_Frame_div").show();
        this.runAlertToShow2();
        //提示框 确定按钮事件
        $(".alert_button_true2").bind("click",function(event){
            $(".background_Frame_div").hide();
            $(".alert_Frame").hide();
            $(".alert_box_result").val("true");
            if(typeof(callback)=="function"){
                setTimeout(callback,0);
            }
            $(this).off();
        });
        return true;
    },
    //提示框 风格3 title "标题" conStr "提示内容" callback "回调函数"
    //当参数为"false"为设置为默认
    alertFrameShowF3 : function(title,conStr,callback){
        if(title=="false" || title==""){
            title="友爱提示";
        }
        if(conStr=="false" || conStr==""){
            conStr="你确定要进行此操作?";
        }
        $(".alert_title_span").html(title);
        $(".alert_conStr").text(conStr);
        $(".background_Frame_div").show();
        this.runAlertToShow3();
        //提示框 确定按钮事件
        $(".alert_button_true3").on("click",function(event){
            $(".background_Frame_div").hide();
            $(".alert_Frame").hide();
            $(".alert_box_result").val("true");
            if(typeof(callback)=="function"){
                setTimeout(callback,0);
            }
            $(this).off();
        });
        return true;
    },
    //提示框 风格4 conStr "提示内容" callback "回调函数"
    //当参数为"false"为设置为默认
    alertFrameShowF4 : function(conStr,callback){
        if(conStr=="false" || conStr==""){
            conStr="你确定要进行此操作?";
        }
        $(".alert4_span").text(conStr);
        //提示框 确定按钮事件
        $(".alert4_btn_sure").on("click",function(event){
            $(".alert4_btn_off").click();
            if(typeof(callback)=="function"){
                setTimeout(callback,0);
            }
            $(this).off();
        });
        $("#model_btn_confirm").click();
        return true;
    },
    closeAlertFrameF : function(){
        $(".background_Frame_div").hide();
        $(".alert_Frame").hide();
        return false;
    },
    //提示框 风格4 conStr "提示内容" callback "回调函数"
    //当参数为"false"为设置为默认
    alertFrameShowF5 : function(conStr,callback){
        if(conStr=="false" || conStr==""){
            conStr="你确定要进行此操作?";
        }
        $(".alert5_span").text(conStr);
        //提示框 确定按钮事件
        $(".alert5_btn_sure").on("click",function(event){
            $(".background_Frame_div").fadeOut(300);
            $(".alert5_btn_off").click();
            if(typeof(callback)=="function"){
                setTimeout(callback,0);
            }
            $(this).off();
        });
        $(".background_Frame_div").fadeIn(300);
        $("#model_btn_alert").click();
        $(".modal-backdrop").hide();
        return true;
    },
    closeAlertFrameF : function(){
        $(".background_Frame_div").hide();
        $(".alert_Frame").hide();
        return false;
    },
    //模态框
    alertModelShowF : function(e){
        //$("#model_btn").click();
    }
};
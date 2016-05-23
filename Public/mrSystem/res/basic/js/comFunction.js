/**
 * Created by chenJJ on 14-12-8.
 * 共用函数区
 */
//全局共用函数
//父框架对象 _内页 a全局设置
var _parentDom_a=window.parent;
var _mainFunction_a;
var comFunction={
    //兼容浏览器
    //提示框 urlStr 确定时的跳转网址 title "标题" conStr "提示内容"
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
        if(alert_url=="isCloseAlertFrame"){
            alert(conStr);
        }else{
            if(confirm(conStr)){
                window.location.href=conStr;
            }
        }
    },
    //初始化输入框提示
    initRemindInputF: function(){
        $("body").append('<div class="errorem" id="errorem"></div>'+
        '<div class="error" id="error"></div>');
        return true;
    },
    //展示输入框提示
    showRemindInputF : function(eleDom,str){
        if($('#error').length==0){
            this.initRemindInputF();
        }
        if($('#error').html().length == 0){
            if(str=="")
                $('#error').html('请注意输入的信息');
            else
                $('#error').html(str);
        }
        var set_top = eleDom.offset().top ;
        var set_left = eleDom.offset().left ;
        $('#error').css('top',set_top + 45 + 'px');
        $('#error').css('left',set_left + 'px');
        $('#errorem').css('top',set_top + 25 +'px');
        $('#errorem').css('left',set_left + 5 + 'px');

        $('#error').css('display','inline');
        $('#errorem').css('display','block');
        return true;
    },
    //关闭输入框提示
    closeRemindInputF : function(){
        $('#error').html('');
        $('#error').css('display','none');
        $('#errorem').css('display','none');
        return true;
    }
}
try{
    //主功能对象 _内页 a全局设置
    _mainFunction_a =_parentDom_a.mainFunction;
}catch (excetion){
    _mainFunction_a=comFunction;
}

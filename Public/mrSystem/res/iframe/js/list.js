/**
 * Created by chenJJ on 14-12-5.
 */

$(function(){
    $('.productName').blur(function(){
        if($('.productName').val().length == 0 && $('.productName').val().length <= 8 ){
            comFunction.showRemindInputF($(this),"请输入值,不能为空");
        }else{
            comFunction.closeRemindInputF();
        }
    });
    $('.productName').focus(function(){
        comFunction.closeRemindInputF();
    });
});
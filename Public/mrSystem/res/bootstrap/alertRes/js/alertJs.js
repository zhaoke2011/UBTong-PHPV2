/**
 * Created by yu_xing_cheng on 14-12-1.
 */
jQuery(document).ready(function() {
    Main.init();
    $(".del_btn").click(function(){
        alerFrameShow();
    });
    $(".alert_Frame_closeE").click(function(){
        alerFrameHide();
    });
    function alerFrameShow(){
        $(".background_Frame_div").show();
        Login.init();
    }
    function alerFrameHide(){
        $(".background_Frame_div").hide();
        $(".alert_Frame").hide();
    }
    //提示框 确定按钮事件
    $(".alert_button_true").on("click",function(){
        if(alert_url!="isCloseAlertFrame"){
            $("#iframeContain").attr("src",alert_url);
            //window.location.href=alert_url;
        }
        $(".background_Frame_div").hide();
        $(".alert_Frame").hide();
        $(".alert_box_result").val("true");
    });
    $(".exitUser_btn_sure").click(function(){

    });
});
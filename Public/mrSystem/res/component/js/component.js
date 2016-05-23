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
    //* ����ҳ��ֻ��ʾ����Ч��
    if(navigator.appName != "Microsoft Internet Explorer"){
        document.documentElement.className += 'hidenELE';
    }
    //���ü���Ч�����÷�������ʱ100������Ϊ�˱�֤gif�Ѿ����غã�
    //loadingSet��һ������Ϊ���ͣ�1Ϊgif��̬ͼ��2Ϊcss3Ч����1000Ϊ������
    if(navigator.appName != "Microsoft Internet Explorer"){
        setTimeout("loadingSet(1,1000)",100);
    }
}

//���ض�������Ч������
function loadingSet(loading_type,loading_time){

    var _height = $(window).height();
    var _width = $(window).width();
    //��̬ͼgif������Ч
    if(loading_type == 1){

        var loading_height = (_height - $('#loading_img').height())/2 + 'px';
        var loading_width = (_width - $('#loading_img').width())/2 + 'px';

        $('.hidenELE #loading_layer #loading_img').css('top',loading_height);
        $('.hidenELE #loading_layer #loading_img').css('left',loading_width);

    }
    //css3������Ч
    else if(loading_type == 2){

        var spinner_height = (_height - $('#spinner').height())/2 + 'px';
        var spinner_width = (_width - $('#spinner').width())/2 + 'px';

        $('.hidenELE #loading_layer .spinner').css('top',spinner_height);
        $('.hidenELE #loading_layer .spinner').css('left',spinner_width);
    }
    $(".background_Frame_div_bg").show();
    //* ���ؼ���Ч����ʾҳ��
    setTimeout('$("html").removeClass("hidenELE")',loading_time);
    // ��������Ч�� 200Ϊ�ȴ�����Ч���ر�
    setTimeout(colseBG,200);
    function colseBG(){
        $(".background_Frame_div_bg").animate({
            'opacity':'0'
        },1500);
        //�ر����ֲ� 4000Ϊ�ȴ�����Ч������
        setTimeout(function(){$(".background_Frame_div_bg").hide();},1500);
    }
}

$(function(){
    //�������¼� start
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
    //�������¼� end
});
//ȫ�����js
var componentFunction={
    //��ʼ���������ʾ
    initRemindInputF: function(){
        $("body").append('<div class="errorModel" id="errorModel"></div>');
        return true;
    },
    //չʾ�������ʾ
    showRemindInputF : function(eleDom,str){
        if($('#errorModel').length==0){
            this.initRemindInputF();
        }
        if(str==""){
        	$('#errorModel').html('��ע���������Ϣ');
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
    //�ر��������ʾ
    closeRemindInputF : function(){
        $("#errorModel").hide();
        return true;
    },
    //������
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
    //��ѡ���¼� name ��ѡ������� id Ϊ�����ʼ��Ϊѡ�� -1Ϊûѡ��
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
    //��ѡ���¼� checkbox_name��ѡ������ checkbox_array��ʼ������
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
            //* ����ҳ��ֻ��ʾ����Ч��
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
    //ȷ�Ͽ��¼� str��ʾ�� event�ص��¼�
    confirmFrame : function(str,event){
        try{
            //�����ܶ��� _��ҳ aȫ������
            _mainFunction_a =window.parent.mainFunction;
            _mainFunction_a.alertFrameShowF4(str,event);
        }catch (excetion){
            if(confirm(str)){
                if(event!=null && (typeof(event)== "function"))
                    setTimeout(event,0);
            }
        }
    },
    //��ʾ���¼� str��ʾ�� event�ص��¼�
    alertFrame : function(str,event){
        try{
            //�����ܶ��� _��ҳ aȫ������
            _mainFunction_a =window.parent.mainFunction;
            _mainFunction_a.alertFrameShowF5(str,event);
        }catch (excetion){
            if(alert(str)){
                if(event!=null && (typeof(event)== "function"))
                    setTimeout(event,0);
            }
        }
    },
    //���ض����¼�
    returnTop : function(){
        //���巵�ض���������Ϲ����Ķ���
        $(".return_top_div").click(function(){
                $('html,body').animate({scrollTop:0},300,function(){
                    $(".return_top_div").fadeOut(200);
                });
        });
        //Ϊ���ڵ�scroll�¼��󶨴�����
        $(window).scroll(function(){
            //��ȡ���ڵĹ������Ĵ�ֱλ��
            var s = $(window).scrollTop();
            //�����ڵĹ������Ĵ�ֱλ�ô���ҳ�����С�߶�ʱ���÷��ض���Ԫ�ؽ��֣�������
            if( s < 50){
                $(".return_top_div").fadeOut(200);
            }else{
                $(".return_top_div").fadeIn(100);
            };
        });
    }
};
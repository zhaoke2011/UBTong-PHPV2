/**
 * Created by chenJJ on 14-12-8.
 * 共用函数Js 用于每个页面
 */

$(document).ready(function() {
	$("#HeadNav li a").wrapInner( '<span class="out"></span>' );
	
	$("#HeadNav li a").each(function() {
		if($(this).text().length>=4){
			$(this).css("width","100px");
		}
		$( '<span class="over">' +  $(this).text() + '</span>' ).appendTo(this);
	});
	$("#HeadNav li a").hover(function() {
		$(".out",this).stop().animate({'top':'70px'},300); 
		$(".over",this).stop().animate({'top':'0px'},300); 

	}, function() {
		$(".out",this).stop().animate({'top':'0px'},300); 
		$(".over",this).stop().animate({'top':'-70px'},300); 
	});
});

$(function(){
	var _btn = $('#HeadNav li a');
	var _item = $('#Left .tabs-items');
	//初始化
	_item.eq(0).show();
	_btn.eq(0).addClass('act');
	
	$.each(_btn, function(i,e){
		var _this = $(e);
		_this.click(function(){
			_btn.removeClass('act');
			_this.addClass('act');
			_item.hide();
			_item.eq(i).show();
		});
	});

	var _ul_level3=$(".ul_level3");
	var _li=_ul_level3.find('li');
	for(var i=1;i<_li.length;i++){
		_li.eq(i).css("left",i*105+22+"px");
		_li.eq(i).css("z-index",_li.eq(i).css("z-index")-i);
	}
	var _sli=_li.find(".act").parent("li");
	_sli.css("z-index",100);
});

$(function(){

	var jQu_window_content_width=$(window).width();//jQuery对象可见窗口主内容的宽度
	var jQu_window_content_height=$(window).height();//jQuery对象可见窗口主内容的高度

	var _head = $('#Head');
	var _left = $('#Left');
	var _right = $('#Right');
	var _btnup = $('#AUp');
	var _btnleft = $('#ALeft');
	
	_head.width($(window).width());
	_left.height($(window).height()-70);
	_right.width($(window).width()-146);
	_right.find('.level').width($(window).width()-169);
	setIframe(0);
	//设置iframe
	function setIframe(setId){
		//setId表示窗口状态 0为初始化 1为左边关闭 2 全屏模式 3左边打开 4上边关闭 5为上边打开
		if(setId==0) {
			jQu_window_content_width = jQu_window_content_width - _left.width();
			jQu_window_content_height = jQu_window_content_height - _head.height() - 35;
		}else if(setId==1){
			jQu_window_content_width = jQu_window_content_width + _left.width();
			jQu_window_content_height = jQu_window_content_height- _head.height();
		}else if(setId==2){
			jQu_window_content_width = jQu_window_content_width + _left.width();
			jQu_window_content_height = jQu_window_content_height + _head.height() ;
		}else if(setId==3){
			jQu_window_content_width = jQu_window_content_width - _left.width();
			jQu_window_content_height = jQu_window_content_height ;
		}else if(setId==4){
			jQu_window_content_width = jQu_window_content_width ;
			jQu_window_content_height = jQu_window_content_height + _head.height() ;
		}else if(setId==5){
			jQu_window_content_width = jQu_window_content_width ;
			jQu_window_content_height = jQu_window_content_height - _head.height() ;
		}
		iframeSetFunc(jQu_window_content_width,jQu_window_content_height);
	}
	//iframe页面设置
	function iframeSetFunc(_width,_height){
		var iframeContain=$(".iframeContain");

		//宽已经设置自适应 暂时不采用计算
		//if(_width)
			//iframeContain.width(_width);
		if(_height){
			iframeContain.animate({
				'height':_height
			},'slow');
		}
		$("#iframeContain2").hide();
	}
	_btnleft.click(function(){
		if(_btnleft.hasClass('lefthover'))
		{
			_head.show();
			_head.animate({
				'top':'0px'
			},'slow');
			_left.show();
			_left.animate({
				'left':'0'
			},'slow');
			_right.animate({
				'width':$(window).width()-146,
				'left':'146px',
				'top':"70px"
			},'slow');
			_right.find('.level').animate({
				'width':$(window).width()-109,
				'padding-left':'23px'
			},'slow');
			//_right.find('.level').width($(window).width()-169);
			_right.find('.level').css('padding-left','23px');
			_btnleft.animate({
				'top':'82px',
				'left':'121px'
			},'slow');
			_btnleft.removeClass('lefthover');
			setIframe(1);
		}else{
			_head.animate({
				'top':'-70px'
			},'slow',function(){
				_head.hide();
			});
			_left.animate({
				'left':'-146px'
			},'slow',function(){
				_left.hide();
			});
			_right.animate({
				'width':$(window).width(),
				'top':'0px',
				'left':'0'
			},'slow');
			_right.find('.level').width($(window).width());
			_btnleft.animate({
				'top':'11px',
				'left':'9px'
			},'slow');
			_btnleft.addClass('lefthover');
			setIframe(2);
		}
	})
});

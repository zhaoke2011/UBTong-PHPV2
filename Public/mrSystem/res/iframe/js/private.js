// JavaScript Document

//������
function nav(){

	var _nav = $(".nav");
	var _hover = $(".nav ul li");
	
	_hover.each(function () { 
		var url = window.location.pathname;
		var temp = $(this).find("a").attr("href"); 
		
		
		if (url.indexOf(temp) >= 0) {
			$(this).find("a").attr("class", "n-act");
			}
		});
	
	}

//��ҳ
function position(){
	//ҳ���м䶨λ	
	var winH = $(window).height();
	var cen =$(".index-center");
	var cenH = cen.height();
	
	cen.css("top",(winH-cenH-100)/2-50);
	
	//��������
	var _hl = $(".index-hotline");
	var _hlH = _hl.height();
	var _hlBtn = $(".i-hotline");
	_hl.css("margin-top",-(_hlH/2));
	_hlBtn.mouseenter(function(){
		$(".index-hover").animate({"right":"-70px"},500);
		_hl.animate({"right":"0px"},500);
		
		});
		
	_hl.mouseleave(function(){
		$(".index-hover").animate({"right":"0px"},500);
		_hl.animate({"right":"-155px"},500);
		
		});
		
	//������ѯ
	var _c = $(".index-consult");
	var _cH = _c.height();
	var _cBtn = $(".i-consult");
	_c.css("margin-top",-(_cH/2));
	_cBtn.mouseenter(function(){
		$(".index-hover").animate({"right":"-70px"},500);
		_c.animate({"right":"0px"},500);
		
		});
		
	_c.mouseleave(function(){
		$(".index-hover").animate({"right":"0px"},500);
		_c.animate({"right":"-155px"},500);
		
		});
	};
	
	
	
	
//������־ ��ʾ����
function timeline(){
	var _tlBtn = $(".log-tlYears");
	var _tlBox = $(".log-timeline");
	_tlBox.find("dl").first().addClass("log-tlNew");
	_tlBox.find("dd").first().addClass("log-tlNewInfor");
	_tlBtn.click(function(){
		$(this).parents("dl").find("dd").toggle();
		
		});
	
	};
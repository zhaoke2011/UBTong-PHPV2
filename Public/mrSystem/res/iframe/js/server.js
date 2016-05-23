// JavaScript Document



/*---------------------------------------------------------------------店铺后台----------------------------------------------------------------*/
function StoreBackground(){
	/* 鼠标经过 */
	$(".s-table ul li:first").find(".maskLayer").show();
	/*$(".s-table ul li:first").find(".open-button").hide();*/
    $(".s-template").mouseover(function(){
		$(this).find(".maskLayer-box").show();
		}).mouseout(function(){
			$(this).find(".maskLayer-box").hide();
			});
	
	/* 弹出窗口 */
	
	
	
	

	/*var _button=_table.find(".preview-button,.s-template .image");
	var _pre=$(".preview");
	var _prepreBG=$(".previewBG,.preview");*/
	
	
    /*_button.click(function(){
		
		var _src=$(this).parents(".s-template").find("img").attr("src");
		_pre.find("img").attr("src",_src);
		
		_prepreBG.show().click(function(){
			_prepreBG.hide();
			});
			
		var p_height=_pre.height();
		var p_width=_pre.width();
		
		_pre.css("top",(_height-p_height)/2);
		_pre.css("left",(_width-p_width)/2+90);
		
		
		
		userAgent = window.navigator.userAgent.toLowerCase();
		_preBG.css("height",_height);
		
		if($.browser.version == "6.0"){
			_preBG.css("height",_height+_tableH-100);
				var _preH = $(this).parents(".s-template").find("img").offset().top;
				_pre.css("top",_preH);
			}
		
		});	*/
	};

/*-------------------------------------------------------------------------列表经过效果--------------------------------------------------------------------*/
function setOutline(id){
	var _product = $('#' + id);
	$.each(_product,function(){
		var _li = $(this).find('li');
		_li.mouseenter(function(){
			_li.find('.stencil').removeClass('act');
			$(this).find('.stencil').addClass('act');
		}).mouseleave(function(){
			_li.find('.stencil').removeClass('act');
		});
	})
	
}


/*-------------------------------------------------------------------------star--------------------------------------------------------------------*/
function _star(){
		var stepW = 24;
		$(".showb").css("width",0);
		$("#oftenUseList ul").each(function(index, element) {
			 var stars = $(this).find(".oftenUse-star > li")
			stars.each(function(i){
				$(stars[i]).click(function(e){
					var n = i+1;
					$(this).parents(".oftenUse-listScore").find(".showb").css({"width":stepW*n});
					$(this).find('a').blur();
					
				});
			});
		
		
		});
	}


//切换版本下拉
function _select(){		
	$(function(){
		$(".selectTable").each(function(){
			var s=$(this);
			var z=parseInt(s.css("z-index"));
			var dt=$(this).children("dt");
			var dd=$(this).children("dd");
			var _show=function(){dd.slideDown(200);dt.addClass("cur");s.css("z-index",z+1);};   //展开效果
			var _hide=function(){dd.slideUp(200);dt.removeClass("cur");s.css("z-index",z);};    //关闭效果
			s.find("li:last").css("border","0px");
			
			dt.toggle(
			  function () {
		  			if(dd.is(":hidden")){
					   dd.show();
					   dt.addClass("selectAct");
		  			}
			  },
			  function () {
			  		if(!dd.is(":hidden")){
					   dd.hide();
		   		   		dt.removeClass("selectAct");
		  			}
			  }
			); 
			
			dd.find("a").click(function(){
				dt.html($(this).html());
				_hide();
				dt.toggleClass("selectAct");
				
			});  
			
		})
	})
};
//切换版本下拉
function _select1(){		
	$(function(){
		$(".selectTable1").each(function(){
			var s=$(this);
			var z=parseInt(s.css("z-index"));
			var dt=$(this).children("dt");
			var dd=$(this).children("dd");
			var _show=function(){dd.slideDown(200);dt.addClass("cur");s.css("z-index",z+1);};   //展开效果
			var _hide=function(){dd.slideUp(200);dt.removeClass("cur");s.css("z-index",z);};    //关闭效果
			s.find("li:last").css("border","0px");
			
			dt.toggle(
			  function () {
		  			if(dd.is(":hidden")){
					   dd.show();
					   dt.addClass("selectAct");
		  			}
			  },
			  function () {
			  		if(!dd.is(":hidden")){
					   dd.hide();
		   		   		dt.removeClass("selectAct");
		  			}
			  }
			); 
			
			dd.find("a").click(function(){
				dt.html($(this).html());
				_hide();
				dt.toggleClass("selectAct");
				
			});  
			
		})
	})
};
//切换版本下拉
function _select2(){		
	$(function(){
		$(".selectTable2").each(function(){
			var s=$(this);
			var z=parseInt(s.css("z-index"));
			var dt=$(this).children("dt");
			var dd=$(this).children("dd");
			var _show=function(){dd.slideDown(200);dt.addClass("cur");s.css("z-index",z+1);};   //展开效果
			var _hide=function(){dd.slideUp(200);dt.removeClass("cur");s.css("z-index",z);};    //关闭效果
			s.find("li:last").css("border","0px");
			
			dt.toggle(
			  function () {
		  			if(dd.is(":hidden")){
					   dd.show();
					   dt.addClass("selectAct");
		  			}
			  },
			  function () {
			  		if(!dd.is(":hidden")){
					   dd.hide();
		   		   		dt.removeClass("selectAct");
		  			}
			  }
			); 
			
			dd.find("a").click(function(){
				dt.html($(this).html());
				_hide();
				dt.toggleClass("selectAct");
				
			});  
			
		})
	})
};
//切换版本下拉
function _select3(){		
	$(function(){
		$(".selectTable3").each(function(){
			var s=$(this);
			var z=parseInt(s.css("z-index"));
			var dt=$(this).children("dt");
			var dd=$(this).children("dd");
			var _show=function(){dd.slideDown(200);dt.addClass("cur");s.css("z-index",z+1);};   //展开效果
			var _hide=function(){dd.slideUp(200);dt.removeClass("cur");s.css("z-index",z);};    //关闭效果
			s.find("li:last").css("border","0px");
			
			dt.toggle(
			  function () {
		  			if(dd.is(":hidden")){
					   dd.show();
					   dt.addClass("selectAct");
		  			}
			  },
			  function () {
			  		if(!dd.is(":hidden")){
					   dd.hide();
		   		   		dt.removeClass("selectAct");
		  			}
			  }
			); 
			
			dd.find("a").click(function(){
				dt.html($(this).html());
				_hide();
				dt.toggleClass("selectAct");
				
			});  
			
		})
	})
};

	
/*-------------------------------------------------------------------------评价管理-表单提示文字-------------------------------------------------------------------*/
function setFocus(){
	 var _ab = $("#oftenUseList ul");
	 var _ac = $("#oftenUseList ul li textarea");
	$.each(_ab,function(){
		$(_ac).focus(function(){
			$(this).text('');
			
			});
		$(_ac).blur(function() {
			var str = $(this).text();
			  if(str==''){
				  $(this).text('等待你的评论...');
				  }
				  });
		})
}


/*---------------------------------------------------------------------产品二维码系统----------------------------------------------------------------*/
function _printcode(){
	
	
	var _height=$(window).height();
	var _width = $(window).width();
	var _pre = $(".preview");
	var p_height=_pre.height();
	var p_width=_pre.width();
	
	_pre.css("top",(_height-p_height)/2);
	_pre.css("left",(_width-p_width)/2+90);
	
	
	//打印弹出层
	var _pribtn = $(".printBtn");
	var _print = $(".print");
	var _close = $(".a-close");
	_pribtn.click(function(){
		_print.show();
		
		});
	_close.click(function(){
		_print.hide();

		});
		
	
	//推广运营弹出层
	var _sBBtn = $(".scoreButton,.a-batch,.a-batch2");
	var _sBShow = $(".scoreBox");
	var _sBclose = $(".sB-cancel");
	_sBBtn.click(function(){
		_sBShow.show();
		
		});
	_sBclose.click(function(){
		_sBShow.hide();
		
		});
		
	var _table=$(".inventory");
	var _tableH=_table.height();	
	var _preBG=$(".previewBG,.previewBG,.salesPreviewBG");

	var userAgent;
	userAgent = window.navigator.userAgent.toLowerCase();
		_preBG.css("height",_height);
		
		if('undefined' == typeof(document.body.style.maxHeight)){
			_preBG.css("height",_height+_tableH-150);	
			}
		
	};


//评分弹出层表单提示文字
function sBContent(){

	 var _sB = $(".sB-textarea");
	 var _sBText = $(".sB-textarea").text();

	$(_sB).focus(function(){
		var _thText = $(this).text();
		if(_thText==_sBText)
		{
			$(this).text("");
			$(this).css("color","#000");
			}
		
		});
	$(_sB).blur(function() {
		  var sBstr = $(this).text();
		  if(sBstr==""){
			  $(this).text(_sBText);
			  $(this).css("color","#a3abbe");
			  }
			  });
		  

}


//微官网
function addColumn(){
	//添加栏目
	var _aCbtn = $(".Btn-addColumn");
	var _aCpop = $(".addColumnPop");
	var _aCpopBG = $(".addColumnPopBG");
	var _iconpop = $(".iconpop");
	var _ipBtn = $(".Btn-aCSelect");
	var _ipClose= $(".Btn-ipClose");
	var _ilBtn = $(".Btn-aCLink");
	var _linkpop = $(".linkPop");
	
	_aCbtn.click(function(){
		_aCpopBG.show();
		_aCpop.show();
		
	});	
	
	_aCpopBG.click(function(){
		_aCpopBG.hide();
		_aCpop.hide();	
		_iconpop.hide();
		_linkpop.hide();
		
	});	
	
	//选择图标

	_ipBtn.click(function(){
		_iconpop.show();
			
	});

	//点击选择图标
	
	var _select = $(".iconpop-list ul li span");
	
	_select.click(function(){
		_select.removeClass("iPact");
		$(this).toggleClass("iPact");	
	
	});
	
	//选择连接
	_ilBtn.click(function(){
		
		_linkpop.show();	
		
	});
	
	
	
	_ipClose.click(function(){
		_iconpop.hide();
		_linkpop.hide();
			
	});
	

};



//微信自定义菜单管理-菜单添加
function chooseOtherType(){
	//选择其他类型
	var _btn = $(".Btn-link");	
	var _show = $(".blackBG,.chooseOtherTypePop");
	var _close = $(".Btn-close");
	_btn.click(function(){
	
		_show.show();
		
	});
	_close.click(function(){
	
		_show.hide();
		
	});
	
	//选择图文
	var _cgBtn = $(".Btn-chooseGraphic");
	var _cgShow = $(".chooseGraphicPop");
	var _cgCancel =$(".Btn-cgCancel");
	_cgBtn.click(function(){
	
		_cgShow.show();
		//pubuliu();
		GetWater();
		
	});
	_cgCancel.click(function(){
	
		_cgShow.hide();
	});
	
	//单图文添加
	var _sgBtn = $(".Btn-singleGraphic");
	var _sgShow = $(".singleGraphicPop");
	var _sgCancel =$(".Btn-sgCancel");
	_sgBtn.click(function(){
	
		_sgShow.show();
		
		
	});
	_sgCancel.click(function(){
	
		_sgShow.hide();
		
	});
	
	
	
	//多图文添加
	var _mgBtn = $(".Btn-moreGraphic");
	var _mgShow = $(".moreGraphicPop");
	var _mgCancel =$(".Btn-mgCancel");
	_mgBtn.click(function(){
	
		_mgShow.show();
		
		
	});
	_mgCancel.click(function(){
	
		_mgShow.hide();
		
	});
	
	
	$(function(){
		var _addbtn = $(".container .imgShow");
		
		_addbtn.click(function(){
			_addbtn.find(".addact").hide();
			$(this).find(".addact").height($(this).find('.cot-singleGraphic').height());
			$(this).find(".addact").show();
			
			
		});	
		
	})
}

//微信自定义菜单管理-图文库
function chooseOtherType2(){
	//选择其他类型
	var _btn = $(".Btn-link");	
	var _show = $(".blackBG,.chooseOtherTypePop");
	var _close = $(".Btn-close");
	_btn.click(function(){
	
		_show.show();
		
	});
	_close.click(function(){
	
		_show.hide();
		
	});
	
	//选择图文
	var _cgBtn = $(".Btn-chooseGraphic");
	var _cgShow = $(".chooseGraphicPop");
	var _cgCancel =$(".Btn-cgCancel");
	_cgBtn.click(function(){
	
		_cgShow.show();
		//pubuliu();
		GetWater();
		
	});
	_cgCancel.click(function(){
	
		_cgShow.hide();
	});
	
	//单图文添加
	var _sgBtn = $(".Btn-singleGraphic");
	var _sgShow = $(".singleGraphicPop");
	var _sgCancel =$(".Btn-sgCancel");
	_sgBtn.click(function(){
	
		_sgShow.show();
		
		
	});
	_sgCancel.click(function(){
	
		_sgShow.hide();
		
	});
	
	
	
	//多图文添加
	var _mgBtn = $(".Btn-moreGraphic");
	var _mgShow = $(".moreGraphicPop");
	var _mgCancel =$(".Btn-mgCancel");
	_mgBtn.click(function(){
	
		_mgShow.show();
		
		
	});
	_mgCancel.click(function(){
	
		_mgShow.hide();
		
	});
	
	
}

function GetWater(){
	 //瀑布流
	var max_load_num = 0; //最多加载次数 (如果是用ajax加载数据，对应总页数)
	var opt={
	  getResource:function(index,render){
		   //index为已加载次数 初始值为1
		   //render为渲染接口函数,接受一个dom集合或jquery对象作为参数。
		   //通过ajax等异步方法得到的数据可以传入该接口进行渲染，如 render(elem)
		  
		  if(index<max_load_num){
			  index++;
			  var _content = ''; //存放将要填充的html内容
			  for(var i=0;i<0;i++){
				 _content += '<div class="imgShow"><div class="addact"><div></div></div><div class="cot-singleGraphic">';
				 _content += '<div class="singleGraphic-padd"><h2>传统连锁企业进军O2O四大原则</h2><span class="time">2014-8-13</span><span class="image"><img src="../../../res/img/server/img007.jpg" /></span>';
				 _content += '<span class="infor">O2O以及电商对传统连锁企业造成的冲击是一个逐渐发展的过程。</span></div>';
				 _content += '<div class="singleGraphic-btn"><span class="s-edit"><a class="a-edit" href="#">修改</a></span><span><a class="a-del" href="#">删除</a></span></div></div></div>';
			  }
			  render($(_content));
		  }
		   
	  },
	  auto_imgHeight:true,
	  insert_type:1
	  
	}
	$('#WaterFlow1').waterfall(opt);	
}

//瀑布流效果
function pubuliu(){
	
	
	
	/*document.getElementsByClassName = function(className, tag, elm) {   
		var testClass = new RegExp("(^|\s)" + className + "(\s|$)");   
		var tag = tag || "*";   
		var elm = elm || document;   
		var elements = (tag == "*" && elm.all)? elm.all : elm.getElementsByTagName(tag);   
		var returnElements = [];   
		var current;   
		var length = elements.length;   
		for(var i=0; i<length; i++){   
			current = elements[i];   
			if(testClass.test(current.className)){   
				returnElements.push(current);   
			}   
		}   
		return returnElements;   
	}*/
		   
	var margin = 10;
	var boxes = document.getElementsByClassName('imgShow');
	var con = document.getElementsByClassName('container');
	var text = document.getElementsByTagName('h4');
	var boxWidth = boxes[0].offsetWidth+margin;
	function show () {
		var columnHeight=[];
		var bodyWidth = 910;
		var n = parseInt(bodyWidth/boxWidth);
		var columnNum = n==0?1:n;
		var bodyLeft = bodyWidth>=boxWidth?bodyWidth-columnNum*boxWidth:0;
		con[0].style.left = parseInt(bodyLeft/2)-margin/2+'px';
		for (var i = 0,l=boxes.length; i <l ; i++) {
			if (i<columnNum) {
				columnHeight[i]=boxes[i].offsetHeight+margin;
				boxes[i].style.top = 0;
				boxes[i].style.left = i*boxWidth+margin+'px';
			} else{
				var innsertColumn = min(columnHeight),
					imgHeight = boxes[i].offsetHeight+margin;
				boxes[i].style.top = columnHeight[innsertColumn]+'px';
				boxes[i].style.left = innsertColumn*boxWidth+margin+'px';
				columnHeight[innsertColumn] +=imgHeight; 
			};
	
		};
	};
	function min (heightAarry) {
		var minColumn = 0;
		var minHeight = heightAarry[minColumn];
		for (var i = 1,len=heightAarry.length; i < len; i++) {
			var temp = heightAarry[i];
			if (temp < minHeight) {
				minColumn = i;
				minHeight = temp;
			};
		};
		return minColumn;
	}
	
	
	window.onload = function(){show();};
	window.onresize = function(){show();};
	
	$(function(){
		
		if( $(".chooseGraphicPop").show()){
			
			show();	
			
		}	
		
	})
	
	$(function(){
		var _addbtn = $(".container .imgShow");
		
		_addbtn.click(function(){
			_addbtn.find(".addact").hide();
			$(this).find(".addact").show();
			
			
			
		});	
		
	})
		
	

}


//菜单添加-多张图片效果
/*function GetPop(){
	var _obj = $('#BoxPop');
	var _dd = _obj.find('.dd-lists');
	$.each(_dd, function(i,e){
		$(this).mousemove(function(){
			$(this).find('.title-bg').show();
		}).mouseleave(function(){
			$(this).find('.title-bg').hide();
		})
		
		$(this).find('.a-edit').click(function(){
			_obj.find('.addInfor').css('margin-top',_obj.find('dl dt').height()+_dd.eq(i).height()*(i+1)+20*(i+1)-155);
		})
	})
}*/


/*二维码推广系统*/
function GetCode(){
	var _obj = $('#tableHeight');
	var _box = 	_obj.find('.boxs-activity');
	
	$.each(_box, function(i,e){
		$(this).find('.a-open').click(function(){
			if(_box.eq(i).hasClass('act'))
			{
				_box.eq(i).removeClass('act');
				_box.eq(i).find('.boxs-actcon').slideUp(300);
				$(this).css('background-position','0 0');
			}else{
				_box.eq(i).addClass('act');
				_box.eq(i).find('.boxs-actcon').slideDown(300);
				$(this).css('background-position','0 -45px');
			}
			
		})
	})
}

/*二维码推广系统-活动添加*/
function GetActivit(){
	var _box = $('#BoxSelection');
	var _li = $('#BoxSelection li');
	var _btn = $('#BtnExtens');
	var _bg = $('#BackgroundDiv');
	var _left,_top,_h,userAgent;
	_btn.click(function(){
		_box.show();
		_bg.show();
		BgLocation();
	})
	_bg.click(function(){
		_box.hide();
		_bg.hide();
	});
	function BgLocation(){
		_left= ($(window).width()-_box.outerWidth())/2 +110;
		_top = ($(window).height()-_box.outerHeight())/2 + 135;
		_box.css({'left':_left,'top':_top});
		_h = $(document).height();
		//判断浏览器的类型
		userAgent = window.navigator.userAgent.toLowerCase();
		_bg.css({'height':_h});
		if($.browser.msie){ //IE浏览器
			_bg.css({'height':_h});
		};
		/*if($.browser.mozilla){ //火狐浏览器
			_bg.css({'height':_h + 310});
		};
		if($.browser.safari){ //
			_bg.css({'height':_h + 390});
		}*/
		_bg.css({'opacity':'0'}).show();
	}
	$.each(_li,function(){
		$(this).click(function(){
			_li.removeClass('act');
			$('.s-icon').remove();
			$(this).addClass('act');
			$(this).append('<span class="s-icon"></span>');
		},function(){
			
		});
	})
}

/*二维码推广-启用关闭效果*/
function GetEnable(){
	var _obj = $('#tableHeight');
	var _btn = $('#BtnEnable');
	var _btns = $('#BtnShut');
	var _a = _obj.find('tr .a-probtn');
	var _as = _obj.find('tr .a-pro');
	_btn.click(function(){
		_obj.find('.tr-inp').show();
	})
	_btns.click(function(){
		_obj.find('.tr-inp').hide();
	})
	
	$.each(_a,function(i, e) {
		$(this).click(function(){
			_a.removeClass('act');
			$(this).addClass('act');	
		})
	});
	$.each(_as,function(i, e) {
		$(this).click(function(){
			_as.removeClass('act');
			$(this).addClass('act');	
		})
	});
}

/*二维码推广-添加成功弹出框*/
function GetAdd(){
	var _btn = $('#BtnSave');
	var _box = $('#BoxActsuccess');
	var _a = _box.find('.a-return');
	var _bg = $('#Background');
	var _left,_top,_h,userAgent;
	_btn.click(function(){
		_box.show();
		_bg.show();
		BgLocation();
	})
	_a.click(function(){
		_box.hide();
		_bg.hide();
	})
	function BgLocation(){
		_left= ($(window).width()-_box.outerWidth())/2 ;
		_top = ($(window).height()-_box.outerHeight())/2;
		_box.css({'left':_left,'top':_top});
		_h = $(document).height();
		//判断浏览器的类型
		userAgent = window.navigator.userAgent.toLowerCase();
		_bg.css({'height':_h});
		if($.browser.msie){ //IE浏览器
			_bg.css({'height':_h});
		};
		_bg.css({'opacity':'0.6'}).show();
	}
}









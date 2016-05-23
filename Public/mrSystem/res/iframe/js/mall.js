/*-------------------------------------------------------------------------����Ч��--------------------------------------------------------------------*/
function setLeftNav(){
	var _obj = $('#nav');
	var _navtitle = _obj.find('.navtitle');
	var _detail = _obj.find('.details');
	
	$.each(_navtitle,function(i,e){
		$(this).click(function(){
			if(!$(this).hasClass('act')){
				_navtitle.removeClass('act');
				_detail.slideUp();
				$(this).addClass('act');
				$(this).next('.details').slideToggle();
			}else{
				$(this).next('.details').slideUp();
				$(this).removeClass('act');
			}
		});
	});
	
	_detail.find('a').click(function(){
		$(this).parents('.details').show();
	});
}

/*-------------------------------------------------------------------------��������Ч��--------------------------------------------------------------------*/
function Getdetails(){
	var _obj = $('#tabProduct');
	var _table = _obj.find('.table');
	var _main = $('#orderMain');
	var _btn = _main.find('.a-reason');
	var _reason = _btn.find('.s-reason');
	var _box = _main.find('.box-cancel');
	var _order = $('#orderMain');
	var _close = _order.find('.close');
	var _box2 = _order.find('.close-order');
	var _a = _box2.find('.a-cancel');
	if(_table.height() < 340)
	{
		_table.height('340');
	}
	
	_btn.click(function(){
		_box.slideToggle();
	}).parent().mouseleave(function(){
		_box.hide();
	});
	_box.find('a').click(function(){
		_reason.html(this.innerHTML);
		_box.hide();
	});
	
	_close.click(function(){
		_box2.slideDown();	
	})
	_a.click(function(){
		_box2.slideUp();
	})
}

/*-------------------------------------------------------------------------��д���--------------------------------------------------------------------*/
function GetMoney(){
	var _obj =	$('#tabProduct');
	var _inp = _obj.find('.inp-money');
	
	if(_inp.val() == ''){
		_inp.val(_inp.attr('prompt'));
	}
	
	_inp.focus(function(){
		if(_inp.val() == _inp.attr('prompt')){
			_inp.val('');
		}
	}).blur(function(){
		if(_inp.val() == '' || _inp.val() == _inp.attr('prompt')){
			_inp.val(_inp.attr('prompt'));
		}
	})
}

/*-------------------------------------------------------------------------��д�˺�--------------------------------------------------------------------*/
function GetInput(){
	var _obj =	$('#tabProduct');
	var _recharge = _obj.find('.recharge-money');
	var _inp = _recharge.find('input');
	
	$.each(_inp,function(i,e){
		var _this = $(e);
		if(_this.val() == ''){
			_this.val(_this.attr('prompt'));
		}
		
		$(this).focus(function(){
			if(_this.val() == _this.attr('prompt')){
				_this.val('');
			}
		}).blur(function(){
			if(_this.val() == '' || _this.val() == _this.attr('prompt')){
				_this.val(_this.attr('prompt'));
			}
		})
	})
}

function GetShop(){
	var _obj = $('#TelBox');
	var _text = _obj.find('.new-tel');
	$.each(_text,function(i,e){
		var _this = $(e);
		if(_this.val() == ''){
			_this.val(_this.attr('prompt'));
		}
		
		$(this).focus(function(){
			if(_this.val() == _this.attr('prompt')){
				_this.val('');
			}
		}).blur(function(){
			if(_this.val() == '' || _this.val() == _this.attr('prompt')){
				_this.val(_this.attr('prompt'));
			}
		})
	})
}

function GetTime(){
	var _product = $('.money');
	$.each(_product,function(){
		var _li = $(this).find('li');
		_li.mouseenter(function(){
			_li.removeClass('linkOn');
			$(this).addClass('linkOn');
		}).mouseleave(function(){
			_li.removeClass('linkOn');
		});
	})	
}


//�������򵯴�
function checkBox(){
	var _cbShowBtn = $(".orderIm-check");	
	var _cbCloseBtn= $(".cB-close");
	var _cbShow = $(".checkBoxBG,.checkBox")
	_cbShowBtn.click(function(){
		_cbShow.show();
		});
	_cbCloseBtn.click(function(){
		_cbShow.hide();
		
		});
	
}

//�ҵĶ���-�鿴����Ч��
function logisticsInfor(){
	var _liShowBtn = $(".state-logistics");
	var _liCloseBtn = $(".lB-close");
	var _liShow = $(".logisticsBox");
	_liShowBtn.mouseover(function(){
		_liShow.show();
		var _procH = $(".Pro-process").height();
		var _procLH = _addCss.last().height();
		var _timeLine = $(".Pro-timeline");
		_timeLine.css("height",_procH-_procLH);
		});
	_liShowBtn.mouseout(function(){
		_liShow.hide();
		});
	var _addCss = $(".Pro-process ul li");
	_addCss.first().addClass("pro-bg");
	_addCss.first().find("span").css("color","#f76d02");
	
}



function cPreview(){
	
	//����Ԥ������
	var _cPBtn = $(".state-CPBtn");
	var _cPShow = $(".contentPreview");
	var _cPShowBG = $(".contentPreviewBG");
	var _cPClose = $(".cP-close");
	
	//���㱳���߶�
	var _cPWindowH=$(window).height();
	var _cPbodyH=$(".body-pd").height();
	var _cPtable=$(".inventory");
	var _cPtableH=_cPtable.height();
	var userAgent;
	userAgent = window.navigator.userAgent.toLowerCase();
	_cPShowBG.css("height",_cPbodyH);
	if('undefined' == typeof(document.body.style.maxHeight)){
		_cPShowBG.css("height",_cPbodyH+_cPtableH-150);	
		}
		
	//����Ԥ���Ķ�������
	var _cPShowBGH = _cPShowBG.height();
	var _cPShowH = _cPShow.height();
	_cPShow.css("top",(_cPShowBGH-_cPShowH)/2);
	
	//����Ԥ������Ч��	
	_cPBtn.click(function(){
		_cPShowBG.show();
		_cPShow.show();
		
		});
	_cPClose.click(function(){
		_cPShowBG.hide();
		_cPShow.hide();
		
		});
	
	
	
	//���ص���
	var _aDBtn = $(".state-download");
	var _aDShow = $(".attaDownload");
	
	//���صĶ�������
	var _aDShowH = _aDShow.height();
	_aDShow.css("top",(_cPWindowH-_aDShowH)/2);
	
	//���ص���Ч��
	_aDBtn.click(function(){
		_cPShowBG.show();
		_aDShow.show();
		
		});
	_cPClose.click(function(){
		_cPShowBG.hide();
		_aDShow.hide();
		
		});
		
	//�������
	var _rBtn = $(".state-review");
	var _rShow = $(".review");
	var _rClose = $(".r-close");
	
	//������˵���Ч��
	_rBtn.click(function(){
		_rShow.show();
		
		});
	_rClose.click(function(){
		_rShow.hide();
		
		});
	
	
}
//���ֵ��������ʾ����
function review(){

	 var _r = $(".r-textarea");
	 var _rText = _r.text();

	$(_r).focus(function(){
		var _thText = $(this).text();
		if(_thText==_rText)
		{
			$(this).text("");
			$(this).css("color","#000");
			}
		});
	$(_r).blur(function() {
		  var rstr = $(this).text();
		  if(rstr==""){
			  $(this).text(_rText);
			  $(this).css("color","#ced3df");
			  }
		  });
		  

}

//���ֽ̳�
function newbie(){

	var _newbieBtn = $(".newbie");
	var _exitBtn = $(".Btn-exit,.steps-return");
	var _newbieBG = $(".newbiepopBG");
	var _newbieBox = $(".newbiepopBox");
	var _i = 1;
	var _prevBtn = $(".steps-prev");
	var _nextBtn = $(".steps-next");
	var _nav = $(".nav ul li");

	_newbieBtn.click(function(){
		
		 
		$.each(_nav,function(){
		
			$(this).find(".details").css("display","none");	
		
		});	
		_newbieBG.show();
		_newbieBox.show();
		$(".steps"+_i).show();
		
				
	});	
	
	_exitBtn.click(function(){
		$(".steps"+_i).hide();
		_newbieBG.hide();
		_newbieBox.hide();
		
		return _i=1;
		
	});
	
	_nextBtn.click(function(){
		
		$(".steps"+_i).hide();
		$(".steps"+(_i+1)).show();
		++_i;
		
		return false;
	
	});
	_prevBtn.click(function(){
	
		$(".steps"+_i).hide();
		$(".steps"+(_i-1)).show();
		--_i;
		
		return false;	
		
	});
	
};

//����
function skin(){

	var _btn = $(".Btn-skin");
	var _pop = $(".skinpop");
	var _close = $(".Btn-close");
	var _select = $(".skin-color li");
	//����Ƥ��ѡ���
	_btn.click(function(){
		
		_pop.show();
	
	});
	
	_close.click(function(){
	
		_pop.hide();	
		
	});
	
	_select.click(function(){
		_select.removeClass("skin-select");
		$(this).toggleClass("skin-select");
		
	});
};

//��Ʒ����-�����Ʒ �л��汾����1
function _select(){		
	$(function(){
		$(".selectTable").each(function(){
			var s=$(this);
			var z=parseInt(s.css("z-index"));
			var dt=$(this).children("dt");
			var dd=$(this).children("dd");
			var _show=function(){dd.slideDown(200);dt.addClass("cur");s.css("z-index",z+1);};   //չ��Ч��
			var _hide=function(){dd.slideUp(200);dt.removeClass("cur");s.css("z-index",z);};    //�ر�Ч��
			s.find("li:last").css("border","0px");
			
			dt.click(function(){
				dd.is(":hidden")?dd.show():dd.hide();
				dt.toggleClass();
			});
			
			dd.find("a").click(function(){
				dt.html($(this).html());
				_hide();
				dt.toggleClass("selectAct");
				
			});  
			
		})
	})
};
//��Ʒ����-�����Ʒ �л��汾����2
function _select1(){		
	$(function(){
		$(".selectTable1").each(function(){
			var s=$(this);
			var z=parseInt(s.css("z-index"));
			var dt=$(this).children("dt");
			var dd=$(this).children("dd");
			var _show=function(){dd.slideDown(200);dt.addClass("cur");s.css("z-index",z+1);};   //չ��Ч��
			var _hide=function(){dd.slideUp(200);dt.removeClass("cur");s.css("z-index",z);};    //�ر�Ч��
			s.find("li:last").css("border","0px");
			
			dt.toggle(
			  function () {
		  			if(dd.is(":hidden")){
					   dd.show();
		   		   		dt.removeClass("selectAct");
		  			}
			  },
			  function () {
			  		if(!dd.is(":hidden")){
					    dd.hide();
					   dt.addClass("selectAct");
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
//��Ʒ����-�����Ʒ ��Ӹ��൯����

function addMore(){
	
	var _btn = $(".Btn-addProduct");	
	var _show = $(".addmorepop");
	var _close = $(".Btn-Close");
	
	_btn.click(function(){
	
		_show.toggle();	
		var _bodyH = $(".body-pd").height();
		$("body").css("height",_bodyH+45);
		
	});
	
	/*_close.click(function(){
		
		_show.hide();
		
	});*/

};


//΢�Ź���ϵͳ-΢�Žӿ�����

function addWechatID(){

	var _btn = $(".Btn-editor,.Btn-add");	
	var _show = $(".blackBG,#addWechatID");
	var _close = $(".blackBG");
	
	_btn.click(function(){
	
		_show.show();	
		
		
	});
	_close.click(function(){
		
		_show.hide();	
		
	});
	
}


//΢�Ź���ϵͳ-���õ�����

function addConfigur(){
	var _table = $('#productManage table')
	var _btn = _table.find('td .Btn-config');
	var _show = $(".blackBG,#Configuration");
	var _close = $(".blackBG");
	
	$.each(_btn,function(i,e){
		$(this).click(function(){
			_show.show();	
		})
	})
	_close.click(function(){
		_show.hide();	
	});
}





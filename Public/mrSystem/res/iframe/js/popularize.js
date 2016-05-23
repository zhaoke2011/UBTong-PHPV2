/*-------------------------------------------------------------------------列表经过效果--------------------------------------------------------------------*/
function setLists(id){
	var _product = $('#' + id);
	$.each(_product,function(){
		var _li = $(this).find('li');
		_li.mouseenter(function(){
			_li.find('a').removeClass('act');
			$(this).find('a').addClass('act');
		}).mouseleave(function(){
			_li.find('a').removeClass('act');
		});
	})
	
}

/*-------------------------------------------------------------------------时间经过效果--------------------------------------------------------------------*/
function GetTime(){
	var _product = $('.p-money');
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
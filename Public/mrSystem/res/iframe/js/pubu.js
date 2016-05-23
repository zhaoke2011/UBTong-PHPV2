
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
		var _addbtn = $(".container .imgShow");
		
		_addbtn.click(function(){
			_addbtn.find(".addact").hide();
			$(this).find(".addact").show();
			
			
			
		});	
		
	})
		
	

}


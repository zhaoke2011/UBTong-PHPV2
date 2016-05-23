$(function(){
 	if(parent.window.document.getElementById('iframeContain') ){
		var iframeContain = window.parent.document.getElementById('iframeContain');
  		var iframeContain2 = window.parent.document.getElementById('iframeContain2');
  		$(iframeContain2).hide();
  		$(iframeContain).css({'opacity':'1'}).fadeIn(800);
	}else if(parent.parent.window.document.getElementById('iframeContain')){
		var iframeContain = window.parent.parent.document.getElementById('iframeContain');
  		var iframeContain2 = window.parent.parent.document.getElementById('iframeContain2');
  		$(iframeContain2).hide();
  		$(iframeContain).css({'opacity':'1'}).fadeIn(800);
	}	
});

window.onunload = function(){
	if(parent.window.document.getElementById('iframeContain') ){
		var iframeContain = window.parent.document.getElementById('iframeContain');
  		var iframeContain2 = window.parent.document.getElementById('iframeContain2');
  		$(iframeContain2).show();
  		$(iframeContain).hide();
	}else if(parent.parent.window.document.getElementById('iframeContain')){
		var iframeContain = window.parent.parent.document.getElementById('iframeContain');
  		var iframeContain2 = window.parent.parent.document.getElementById('iframeContain2');
  		$(iframeContain2).show();
  		$(iframeContain).hide();
	}
};
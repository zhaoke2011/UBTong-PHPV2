		$(function(){
			//��ѡ��ȫѡ��ȡ��ȫѡ
			$('#tb_check').on('ifChecked', function(event){
			  $('input').iCheck('check');
			});
			$('#tb_check').on('ifUnchecked', function(event){
			  $('input').iCheck('uncheck');
			});
			
			//�����������ʾ������ʾ
			$('#query_start_time').focus(function(){
			  if($('#error').html().length == 0){
			    $('#error').html('�밴��yyyy-mm-dd�ĸ�ʽ��������');
		      }
			  remindError('#query_start_time');
			});
			$('#query_end_time').focus(function(){
			  if($('#error').html().length == 0){
			    $('#error').html('�밴��yyyy-mm-dd�ĸ�ʽ��������');
		      }
			  remindError('#query_end_time');
			});
			$('#query_user_name').focus(function(){
			  if($('#error').html().length == 0){
			    $('#error').html('������ģ����ƣ���󳤶�Ϊ8');
			  }
			  remindError('#query_user_name');
			});
			
			
			//����������ݽ����жϲ���ʾ�����Ϸ�����������
			$('#query_start_time').blur(function(){	  
			  if($('#query_start_time').val().length != 10 && $('#query_start_time').val().length != 0){
				$('#error').html('sdsd');
			    $('#query_start_time').focus();
			  }else{
			    $('#error').html('');
			    $('#error').css('display','none');
			    $('#errorem').css('display','none');
			  }
			});
			
			$('#query_end_time').blur(function(){	  
			  if($('#query_end_time').val().length != 10 && $('#query_end_time').val().length != 0){
				$('#error').html('��ʽ������ȷ��ʽΪyyyy-mm-dd');
			    $('#query_end_time').focus();
			  }else{
			    $('#error').html('');
			    $('#error').css('display','none');
			    $('#errorem').css('display','none');
			  }
			});
			
			$('#query_user_name').blur(function(){	  
			  if($('#query_user_name').val().length > 8){
				$('#error').html('�������ȣ����Ϊ8��');
			    $('#query_user_name').focus();
			  }else{
			    $('#error').html('');
			    $('#error').css('display','none');
			    $('#errorem').css('display','none');
			  }
			});
			
			$("#toTop").click(function(){
				$('body,html').animate({scrollTop:0},1000);
				return false;
			});			
			
		});
		
		//��������·���ʾ������ʾ��elemΪjqueryѡ��������
		function remindError(elem){
			  var set_top = $(elem).offset().top ;
			  var set_left = $(elem).offset().left ;
			  
			  $('#error').css('top',set_top + 55 + 'px');
			  $('#error').css('left',set_left + 'px');
			  $('#errorem').css('top',set_top + 35 +'px');
			  $('#errorem').css('left',set_left + 5 + 'px');
			  
			  $('#error').css('display','inline');
			  $('#errorem').css('display','block');			
		}
		
		//���ض�������Ч�����
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
		  
		  //* ���ؼ���Ч����ʾҳ��
		  setTimeout('$("html").removeClass("hidenELE")',loading_time);
		}

/**
 ************************************************************
 ***@project jquery�ٲ������
 ***@author hcp0209@gmail.com
 ***@ver version 1.0
 ************************************************************
 */
;(function($){
   var 
   //����
   setting={
      column_width:320,//�п�
	  column_className:'waterfall_column',//�е�����
	  column_space:10,//�м��
	  cell_selector:'.imgShow',//Ҫ���е�ש���ѡ������contextΪ�����ⲿ����
	  img_selector:'img',//Ҫ���ص�ͼƬ��ѡ����
	  auto_imgHeight:true,//�Ƿ���Ҫ�Զ�����ͼƬ�ĸ߶�
	  fadein:true,//�Ƿ�������
	  fadein_speed:200,//�������ʣ���λ����
	  insert_type:1, //��Ԫ����뷽ʽ��1Ϊ����������У�2Ϊ������������
	  getResource:function(index){ }  //��ȡ��̬��Դ����,���뷵��һ��ש��Ԫ�ؼ���,�������Ϊ���صĴ���
   },
   //
   waterfall=$.waterfall={},//������Ϣ����
   $container=null;//����
   waterfall.load_index=0, //���ش���
   $.fn.extend({
       waterfall:function(opt){
		  opt=opt||{};  
	      setting=$.extend(setting,opt);
		  $container=waterfall.$container=$(this);
		  waterfall.$columns=creatColumn();
		  render($(this).find(setting.cell_selector).detach(),false); //�����Ѵ���Ԫ��ʱǿ�Ʋ�����
		  waterfall._scrollTimer2=null;
		  $(window).bind('scroll',function(){
		     clearTimeout(waterfall._scrollTimer2);
			 waterfall._scrollTimer2=setTimeout(onScroll,300);
		  });
		  waterfall._scrollTimer3=null;
		  $(window).bind('resize',function(){
		     clearTimeout(waterfall._scrollTimer3);
			 waterfall._scrollTimer3=setTimeout(onResize,300);
		  });
	   }
   });
   function creatColumn(){//������
      waterfall.column_num=calculateColumns();//����
	  //ѭ��������
	  var html='';
	  for(var i=0;i<waterfall.column_num;i++){
	     html+='<div class="'+setting.column_className+'" style="width:'+setting.column_width+'px; display:inline-block; *display:inline;zoom:1; margin-left:'+setting.column_space/2+'px;margin-right:'+setting.column_space/2+'px; vertical-align:top; overflow:hidden"></div>';
	  }
	  $container.prepend(html);//������
	  return $('.'+setting.column_className,$container);//�м���
   }
   function calculateColumns(){//������Ҫ������
      var num=Math.floor(($container.innerWidth())/(setting.column_width+setting.column_space));
	  if(num<1){ num=1; } //��֤������һ��
	  return num;
   }
   function render(elements,fadein){//��ȾԪ��
      if(!$(elements).length) return;//û��Ԫ��
      var $columns = waterfall.$columns;
      $(elements).each(function(i){										
		  if(!setting.auto_imgHeight||setting.insert_type==2){//���������ͼƬ�߶ȣ������ǰ�˳����룬�򲻱ص�ͼƬ��������ܼ����еĸ߶���
		     if(setting.insert_type==1){ 
			    insert($(elements).eq(i),setting.fadein&&fadein);//����Ԫ��
			 }else if(setting.insert_type==2){
			    insert2($(elements).eq(i),i,setting.fadein&&fadein);//����Ԫ��	 
		     }
			 return true;//continue
		  }						
		  if($(this)[0].nodeName.toLowerCase()=='img'||$(this).find(setting.img_selector).length>0){//������ͼƬ����ͼƬ
		      var image=new Image;
			  var src=$(this)[0].nodeName.toLowerCase()=='img'?$(this).attr('src'):$(this).find(setting.img_selector).attr('src');
			  image.onload=function(){//ͼƬ���غ�����Զ�������ߴ�
			      image.onreadystatechange=null;
				  if(setting.insert_type==1){ 
				     insert($(elements).eq(i),setting.fadein&&fadein);//����Ԫ��
				  }else if(setting.insert_type==2){
					 insert2($(elements).eq(i),i,setting.fadein&&fadein);//����Ԫ��	 
				  }
				  image=null;
			  }
			  image.onreadystatechange=function(){//����IE��������Ļ������⣺ͼƬ����󲻻��ٴ���onload�¼�
			      if(image.readyState == "complete"){
					 image.onload=null;
					 if(setting.insert_type==1){ 
					    insert($(elements).eq(i),setting.fadein&&fadein);//����Ԫ��
					 }else if(setting.insert_type==2){
					    insert2($(elements).eq(i),i,setting.fadein&&fadein);//����Ԫ��	 
					 }
					 image=null;
				  }
			  }
			  image.src=src;
		  }else{//���ÿ���ͼƬ����
		      if(setting.insert_type==1){ 
				 insert($(elements).eq(i),setting.fadein&&fadein);//����Ԫ��
			  }else if(setting.insert_type==2){
				 insert2($(elements).eq(i),i,setting.fadein&&fadein);//����Ԫ��	 
			  }
		  }						
	  });
   }
   function public_render(elems){//ajax�õ�Ԫ�ص���Ⱦ�ӿ�
   	  render(elems,true);	
   }
   function insert($element,fadein){//��Ԫ�ز��������
      if(fadein){//����
	     $element.css('opacity',0).appendTo(waterfall.$columns.eq(calculateLowest())).fadeTo(setting.fadein_speed,1);
	  }else{//������
         $element.appendTo(waterfall.$columns.eq(calculateLowest()));
	  }
   }
   function insert2($element,i,fadein){//������������Ԫ��
      if(fadein){//����
	     $element.css('opacity',0).appendTo(waterfall.$columns.eq(i%waterfall.column_num)).fadeTo(setting.fadein_speed,1);
	  }else{//������
         $element.appendTo(waterfall.$columns.eq(i%waterfall.column_num));
	  }
   }
   function calculateLowest(){//������̵����е�����
      var min=waterfall.$columns.eq(0).outerHeight(),min_key=0;
	  waterfall.$columns.each(function(i){						   
		 if($(this).outerHeight()<min){
		    min=$(this).outerHeight();
			min_key=i;
		 }							   
	  });
	  return min_key;
   }
   function getElements(){//��ȡ��Դ
      $.waterfall.load_index++;
      return setting.getResource($.waterfall.load_index,public_render);
   }
   waterfall._scrollTimer=null;//�ӳٹ������ؼ�ʱ��
   function onScroll(){//��������
      clearTimeout(waterfall._scrollTimer);
	  waterfall._scrollTimer=setTimeout(function(){
	      var $lowest_column=waterfall.$columns.eq(calculateLowest());//�����
		  var bottom=$lowest_column.offset().top+$lowest_column.outerHeight();//����еײ�������������ڶ����ľ���
		  var scrollTop=document.documentElement.scrollTop||document.body.scrollTop||0;//����������
		  var windowHeight=document.documentElement.clientHeight||document.body.clientHeight||0;//���ڸ߶�
		  if(scrollTop>=bottom-windowHeight){
			 render(getElements(),true);
		  }
	  },100);
   }
   function onResize(){//��������ʱ��������
      if(calculateColumns()==waterfall.column_num) return; //����δ�ı䣬����Ҫ����
      var $cells=waterfall.$container.find(setting.cell_selector);
	  waterfall.$columns.remove();
	  waterfall.$columns=creatColumn();
      render($cells,false); //��������Ԫ��ʱǿ�Ʋ�����
   }
})(jQuery);
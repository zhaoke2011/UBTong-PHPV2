<?php
//通过店铺id获取店铺名称
function getshopidbyname($shop_id){
    $shop_name=M('users')->where('id='.$shop_id)->getField('user_nicename');
    return $shop_name;
}
function getoidbystatus($o_id){
    $orderinfo=M('order')->where('o_id='.$o_id)->find();
   if ($orderinfo['order_status']==0) {
      if ($orderinfo['pay_status']==0) {
          return '等待买家支付';
      }
      else{
            if($orderinfo['is_deliver']==0){
                return '等待商家发货';
            }
            else{
                return '等待买家确认';
            }
      }
   }
   else if($orderinfo['order_status']==1){
        return '交易成功';
   }
   else if($orderinfo['order_status']==2){
        return '已退款';
   }
   else{
        return '交易关闭';
   }
}
function sp_get_url_route(){
	$apps=Dir::getList(SPAPP);
	$host=(is_ssl() ? 'https' : 'http')."://".$_SERVER['HTTP_HOST'];
	$routes=array();
	foreach ($apps as $a){
	
		if(is_dir(SPAPP.$a)){
			if(!(strpos($a, ".") === 0)){
				$navfile=SPAPP.$a."/nav.php";
				$app=$a;
				if(file_exists($navfile)){
					$navgeturls=include $navfile;
					foreach ($navgeturls as $url){
						//echo U("$app/$url");
						$nav= file_get_contents($host.U("$app/$url"));
						$nav=json_decode($nav,true);
						if(!empty($nav) && isset($nav['urlrule'])){
							if(!is_array($nav['urlrule']['param'])){
								$params=$nav['urlrule']['param'];
								$params=explode(",", $params);
							}
							sort($params);
							$param="";
							foreach($params as $p){
								$param.=":$p/";
							}
							
							$routes[strtolower($nav['urlrule']['action'])."/".$param]=$nav['urlrule']['action'];
						}
					}
				}
					
			}
		}
	}
	
	return $routes;
}




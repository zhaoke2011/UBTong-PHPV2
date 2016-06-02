<?php

class OrderAction extends AdminbaseAction {
    public function orderlist(){
        $op=I('get.op');
        //待支付
        if ($op==0) {
            $where['order_status']=0;
            $where['pay_status']=0;
        }
        //已支付
        else if($op==1) {
            $where['order_status']=0;
            $where['pay_status']=1;
        }
        //已退款
        else if($op==2) {
            $where['order_status']=2;
        }
        //已关闭
        else if($op==3) {
            $where['order_status']=3;
        }
        //已完成
        else if($op==4) {
            $where['order_status']=1;
        }
         //所有订单
        else if($op==5){
            $where='';
        }
        $orderlist=M('order')->where($where)->order('add_time')->page($_GET['p'],2)->select();
        foreach ($orderlist as $k => $vo) {
            $orderlist[$k]['orderitems']=M('order_detail')->where('o_id='.$vo['o_id'])->field('num,price,merchandise_name,merchandise_picture')->select();
            $orderlist[$k]['count']=M('order_detail')->where('o_id='.$vo['o_id'])->count(); 
        }
        $count=M('order')->count();
        $page=$this->page($count,2);
        // $show=$Page->show();
        $this->assign('orderlist',$orderlist);
        $this->assign('page',$page->GetCurrentPage());
        $this->assign('op',$op);
    	$this->display();
    }
   public function orderssearch(){
        $op=I('get.op');
         // dump($op);
         // exit();
        //待支付
        if ($op==0) {
            $where['order_status']=0;
            $where['pay_status']=0;
        }
        //已支付
        else if($op==1) {
            $where['order_status']=0;
            $where['pay_status']=1;
        }
        //已退款
        else if($op==2) {
            $where['order_status']=2;
        }
        //已关闭
        else if($op==3) {
            $where['order_status']=3;
        }
        //已完成
        else if($op==4) {
            $where['order_status']=1;
        }
        //所有订单
        else if($op==5){
            
            $where='';
        }
        //店铺名称
        // dump($where);
        // exit;
        $shopname=I('shop_name');
        if (empty($shopname)) {
            $shopname='_';
        }
        //商品名称
        $mesname=I('mes_name');
        if (empty($mesname)) {
            $mesname='_';
        }
        //订单编号
        $ordersn=I('order_sn');
        if (empty($ordersn)) {
            $ordersn='_';
        }
        //下单开始时间
        $starttime=I('start_time');
        if (empty($starttime)) {
            $starttime='2000-05-06 09:00:00';
        }
        //下单结束时间
        $endtime=I('end_time');
        if (empty($endtime)) {
            $endtime=date('Y-m-d H:i:s',time());
        }
        $as_id=M('a_shop')->where("shop_name like '%".$shopname."%'")->getfield('as_id',true);
        $o_id=M('order_detail')->where("merchandise_name like '%".$mesname."%'")->getfield('o_id',true);
         $where['a_shop_id']=array('in',$as_id);    
         $where['o_id']=array('in',$o_id);
         $where['order_sn']=array('like','%'.$ordersn.'%');
         $where['add_time']=array('between',array($starttime,$endtime));

         $orderlist=M('order')->where($where)->order('add_time')->page($_GET['p'],5)->select();
       foreach ($orderlist as $k => $vo) {
            $orderlist[$k]['orderitems']=M('order_detail')->where("o_id=".$vo['o_id'])->field('num,price,merchandise_name,merchandise_picture')->select();
            $orderlist[$k]['count']=M('order_detail')->where('o_id='.$vo['o_id'])->count();
        }
        $count=M('order')->where($where)->count();
        $Page= new \Think\Page($count,5);
        $show=$Page->show();
        $this->assign('orderlist',$orderlist);
        $this->assign('page',$show);
        $this->assign('op',$op);
        $this->display('orderlist');
        
   }
    
}
?>
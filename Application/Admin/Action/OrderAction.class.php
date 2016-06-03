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
        $orderlist=M('order')->where($where)->order('add_time')->page($_GET['p'],5)->select();
        foreach ($orderlist as $k => $vo) {
            $orderlist[$k]['orderitems']=M('order_detail')->where('o_id='.$vo['o_id'])->field('num,price,merchandise_name,merchandise_picture')->select();
            $orderlist[$k]['count']=M('order_detail')->where('o_id='.$vo['o_id'])->count(); 
        }
        $count=M('order')->count();
        $page=$this->page($count,5);
        $this->assign('orderlist',$orderlist);
        $this->assign('page',$page->show());
        $this->assign('op',$op);
    	$this->display();
    }
   public function orderssearch(){
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
        //店铺名称
        // dump($where);
        // exit;
        $shopname=I('post.shop_name');
        if (empty($shopname)) {
            $shopname='_';
        }
        //商品名称
        $mesname=I('post.mes_name');
        if (empty($mesname)) {
            $mesname='_';
        }
        //订单编号
        $ordersn=I('post.order_sn');
        if (empty($ordersn)) {
            $ordersn='_';
        }
        //下单开始时间
        $starttime=I('post.start_time');
        if (empty($starttime)) {
            $starttime='2000-05-06';
        }
        //下单结束时间
        $endtime=I('post.end_time');
        if (empty($endtime)) {
            $endtime=date('Y-m-d',time());
        }
        $as_id=M('shop')->where("shop_name like '%".$shopname."%'")->getfield('id',true);
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
        $page=$this->page($count,5);
        $this->assign('orderlist',$orderlist);
        $this->assign('shopname',$shopname=='_' ? '':$shopname);
        $this->assign('mesname',$mesname=='_' ? '':$mesname);
        $this->assign('ordersn',$ordersn=='_' ? '':$ordersn);
        $this->assign('starttime',$starttime=='2000-05-06' ? '':$starttime);
        $this->assign('endtime',$endtime== date('Y-m-d',time())? '':$endtime);
        $this->assign('page',$page->show());
        $this->assign('op',$op);
        $this->display('orderlist');
        
   }
    
}
?>
<?php
namespace Pub\Controller;
use Think\Controller;
class OrdersController extends Controller {
   public function ordersselect(){
        $orderlist=M('order')->order('add_time')->page($_GET['p'],10)->select();
        foreach ($orderlist as $k => $vo) {
            $orderlist[$k]['orderitems']=M('order_detail')->where('o_id='.$vo['o_id'])->field('num,price,merchandise_name,merchandise_picture')->select();
        }
        $count=M('order')->count();
        $Page= new \Think\Page($count,5);
        $orderlist[0]['show']=$Page->show();
        return $orderlist;
   }
   public function orderssearch(){
        //店铺名称
        $shopname=I('shop_name');
        if (empty($shopname)) {
            $shopname='%';
        }
        //商品名称
        $mesname=I('mes_name');
        if (empty($mesname)) {
            $mesname='%';
        }
        //订单编号
        $ordersn=I('order_sn');
        if (empty($ordersn)) {
            $ordersn='%';
        }
        //下单开始时间
        $starttime=I('start_time');
        if (empty($starttime)) {
            $starttime=0;
        }
        //下单结束时间
        $endtime=I('end_time');
        if (empty($endtime)) {
            $endtime=time();
        }
        $orderlist=M()->table('order o,order_detail od,a_shop a')->where("o.o_id=od.o_id and o.a_shop_id=a.as_id and a.shop_name like '%".$shopname."%' and o.order_sn like '%".$ordersn."%' and od.merchandise_name like '%".$mesname."%' and (o.add_time between ".$starttime." and ".$endtime.")")->field('o.order_sn,o.buyer_name,o.add_time,o.remark,o.wl_money,o.total_money,o.o_id,a.shop_name,od.merchandise_picture,od.merchandise_name,od.price,od.num')->group('od.o_id')->select();
   }
}

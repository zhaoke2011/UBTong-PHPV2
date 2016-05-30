<?php
class ShopAction extends AdminbaseAction {
    function _initialize() {
        parent::_initialize();
        $this->initMenu();
    }
    //显示店铺信息 欧阳龙泉 05.17
    public function index(){
       
        // $time=time();
        // $ashop=M('a_shop')->select();
        // $this->assign('time',$time);
        // $this->assign('shop',$ashop);
    	$this->display();
    }
    //计算两个时间戳的时间长度 欧阳龙泉 05.17
    protected function daysDiff($timestamp1, $timestamp2) {
        $date1 = strtotime(date('Y-m-d', $timestamp1)); 
        $date2 = strtotime(date('Y-m-d', $timestamp2));
        return intval(($date1-$date2)/86400);
    }
    //重置密码 欧阳龙泉 05.17
    public function reset(){
        $id=$_GET['id'];
        $data['pwd']=123456;
        $reset=M('a_shop')->where('as_id='.$id)->save($data);
        if($reset){
            $this->success('重置密码成功');
        }else{
            $this->error('重置密码失败');
        }
    }
    //冻结账号 欧阳龙泉 05.17
    public function freeze(){
        $id=$_GET['id'];
        $data['status']=1;
        $freeze=M('a_shop')->where('as_id='.$id)->save($data);
        if($freeze){
            
            $this->success('冻结成功');
        }else{
            $this->error('冻结失败');
        }
    }
    //取消冻结账号 欧阳龙泉 05.17
    public function nofreeze(){
        $id=$_GET['id'];
        $data['status']=0;
        $freeze=M('a_shop')->where('as_id='.$id)->save($data);
        if($freeze){
            
            $this->success('取消冻结成功');
        }else{
            
            $this->error('取消冻结失败');
        }
    }
    //批量冻结 欧阳龙泉 05.17
    public function belfreeze(){
        $ids=I('post.ids');
        $data['status']=1;
        foreach ($ids as $key => $value) {
            $st=M('a_shop')->where('as_id='.$value)->save($data);
        }
        if($st){
            $this->success('冻结成功');
        }else{
            $this->error('冻结失败');
        }
    } 
}
?>
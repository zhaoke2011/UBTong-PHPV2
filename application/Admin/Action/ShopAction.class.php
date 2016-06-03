<?php
class ShopAction extends AdminbaseAction {
    function _initialize() {
        parent::_initialize();
        $this->initMenu();
    }
    //显示店铺信息
    public function index(){  
        $shopuser=M('users')->where('id='.$_SESSION['ADMIN_ID'])->find();
        if($shopuser['shop_type']==1){
            $shop=M('users')->where('shop_type=2')->select();
            $count=M('users')->where('shop_type=2')->count();
        }
        if($shopuser['shop_type']==2){
            $shop=M('users')->where('shop_type=3')->select();
            $count=M('users')->where('shop_type=3')->count();
        }
        $page=$this->page($count,10);
        $this->assign('page',$page->show());
        $this->assign('shop',$shop);
    	$this->display();
    }
    //计算两个时间戳的时间长度 
    protected function daysDiff($timestamp1, $timestamp2) {
        $date1 = strtotime(date('Y-m-d', $timestamp1)); 
        $date2 = strtotime(date('Y-m-d', $timestamp2));
        return intval(($date1-$date2)/86400);
    }
    //重置密码
    public function reset(){
        $id=$_GET['id'];
        $data['user_pass']=sp_password(123456);
        $reset=M('users')->where('id='.$id)->save($data);
        if($reset){
            $this->success('重置密码成功');
        }else{
            $this->error('重置密码失败');
        }
    }
    //冻结账号
    public function freeze(){
        $id=$_GET['id'];
        $data['user_status']=0;
        $freeze=M('users')->where('id='.$id)->save($data);
        if($freeze){
            $this->success('冻结成功');
        }else{
            $this->error('冻结失败');
        }
    }
    //取消冻结账号
    public function nofreeze(){
        $id=$_GET['id'];
        $data['user_status']=1;
        $freeze=M('users')->where('id='.$id)->save($data);
        if($freeze){
            
            $this->success('取消冻结成功');
        }else{
            
            $this->error('取消冻结失败');
        }
    }
    //批量冻结
    public function belfreeze(){
        $ids=I('post.ids');
        $data['user_status']=0;
        $where['id']=array('in',$ids);
        $st=M('users')->where($where)->save($data);
        if($st){
            $this->success('批量冻结成功');
        }else{
            $this->error('批量冻结失败');
        }
    }
    //添加店铺
    public function addshop(){
        $this->display();
    }
    //店铺搜索
    public function shopsearch(){
        if(isset($_POST['login'])){
            $where['user_login']=array('like',"%".$_POST['login']."%");
        }
        if(isset($_POST['name'])){
            $where['user_name']=array('like',"%".$_POST['name']."%");
        }
        $shopuser=M('users')->where('id='.$_SESSION['ADMIN_ID'])->find();
        if($shopuser['shop_type']==1){
            $where['shop_type']=2;
        }
        if($shopuser['shop_type']==2){
            $where['shop_type']=3;
        }
        $shop=M('users')->where($where)->select();
        $count=M('users')->where($where)->count();
        $page=$this->page($count,10);
        $this->assign('page',$page->show());
        $this->assign('shop',$shop);
        $this->assign('formget',$_POST);
        $this->display('index');
    }
    //财务管理
    public function Fmindex(){
        $shopuser=M('users')->where('id='.$_SESSION['ADMIN_ID'])->find();
        if($shopuser['shop_type']==1){
            $shop_type=2;
        }
        if($shopuser['shop_type']==2){
            $shop_type=3;
        }
        $fm=M('finace_manage')->order('add_time desc')->select();
        foreach ($fm as $key => $value) {
            $shop_name=M('users')->where('id='.$value['a_shop_id'].' and shop_type='.$shop_type.'')->find();//查询店铺名称
            $fm[$key]['user_nicename']=$shop_name['user_nicename'];
        }
        $count=count($fm);
        $page=$this->page($count,10);
        $this->assign('term',2);
        $this->assign('page',$page->show());
        $this->assign('fm',$fm);
        $this->display();
    }
    //审核搜索
    public function fmsearch(){
        $shopuser=M('users')->where('id='.$_SESSION['ADMIN_ID'])->find();
        if($shopuser['shop_type']==1){
            $shop_type=2;
        }
        if($shopuser['shop_type']==2){
            $shop_type=3;
        }
        if($_POST['term']==2){
            $fm=M('finace_manage')->order('add_time desc')->select();
            foreach ($fm as $key => $value) {
                $shop_name=M('users')->where('id='.$value['a_shop_id'].' and shop_type='.$shop_type.'')->find();//查询店铺名称
                $fm[$key]['user_nicename']=$shop_name['user_nicename'];
            }
        }else{
            $fm=M('finace_manage')->where('sh_status='.$_POST['term'])->order('add_time desc')->select();
            foreach ($fm as $key => $value) {
                 $shop_name=M('users')->where('id='.$value['a_shop_id'].' and shop_type='.$shop_type.'')->find();//查询店铺名称
                $fm[$key]['user_nicename']=$shop_name['user_nicename'];
            }
        }
        $count=count($fm);
        $page=$this->page($count,10);
        $this->assign('term',$_POST['term']);
        $this->assign('page',$page->show());
        $this->assign('fm',$fm);
        $this->display('Fmindex');
    }
    //财务审核
    public function setstatus(){
        $id=$_GET['id'];
        $fm=M('finace_manage')->where('fm_id='.$id)->find();
        $shop=M('users')->where('id='.$fm['a_shop_id'])->find();
        $time=strtotime("+".$shop['continuted_time']." day",$shop['out_time']);
        $datas['out_time']=$time;
        $s=M('users')->where('id='.$shop['id'])->save($datas);
        $data['sh_status']=1;
        $data['sh_time']=time();
        $data['admin_id']=$_SESSION['ADMIN_ID'];
        $st=M('finace_manage')->where('fm_id='.$id)->save($data);
        if($st){
            $this->success('审核成功');
        }else{
            $this->error('审核失败');
        }
    }
    //批量审核
    public function belstatus(){
        $ids=I('post.ids');
        $where['id']=array('in',$ids);
        $data['sh_status']=1;
        $data['sh_time']=time();
        $data['admin_id']=$_SESSION['ADMIN_ID'];
        foreach ($ids as $key => $value) {
            $fm=M('finace_manage')->where('fm_id='.$value)->find();
            $shop=M('users')->where('id='.$fm['a_shop_id'])->find();
            $time=strtotime("+".$shop['continuted_time']." day",$shop['out_time']);
            $datas['out_time']=$time;
            $s=M('users')->where('id='.$shop['id'])->save($datas);

        }
        $st=M('finace_manage')->where($where)->save($data);
        if($st){
            $this->success('审核成功');
        }else{
            $this->error('审核失败');
        }
    }

}
?>
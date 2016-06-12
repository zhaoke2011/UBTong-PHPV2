<?php
class ShopAction extends AdminbaseAction {
    function _initialize() {
        parent::_initialize();
        $this->initMenu();
        $this->Role = D("Role");
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
            $this->success('批量冻结成功',U('index'));
        }else{
            $this->error('批量冻结失败',U('index'));
        }
    }
    //添加店铺
    public function addshop(){
        $data = $this->Role->where('uid='.$_SESSION['ADMIN_ID'])->order(array("listorder" => "asc", "id" => "asc"))->select();
        $this->assign("roles", $data);
        $this->display();
    }
    //添加店铺表单处理
    public function post_addshop(){
        $shopuser=M('users')->where('id='.$_SESSION['ADMIN_ID'])->find();
        if($shopuser['shop_type']==1){
            $shop_type=2;
            $data['parent_id']=0;
        }
        if($shopuser['shop_type']==2){
            $shop_type=3;
            $data['parent_id']=$_SESSION['ADMIN_ID'];
        }
        $data['user_login']=$_POST['account'];
        $data['user_pass']=sp_password($_POST['password']);
        $data['user_nicename']=$_POST['mc'];
        $data['user_email']=$_POST['model'];
        $data['create_time']=date('Y-m-d H:i:s',time());
        $data['user_status']=1;
        $data['roleid']=$_POST['role_id'];
        $data['user_level']=$shopuser['user_level']+1;
        $data['wx_name']=$_POST['action'];
        $time=strtotime("+30 day",time());
        $data['out_time']=$time;
        $data['continuted_time']=30;
        $data['shop_type']=$shop_type;
        $data['user_logo']=$_POST['slide_pic'];
        $users=M('users')->add($data);
        if($users){
            $this->success('添加成功',U('addshop'));
        }else{
            $this->error('添加失败',U('addshop'));
        }
    }
    //店铺搜索
    public function shopsearch(){
        if(isset($_POST['login'])){
            $where['user_login']=array('like',"%".$_POST['login']."%");
        }
        if(isset($_POST['name'])){
            $where['user_nicename']=array('like',"%".$_POST['name']."%");
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
        $startime=$_POST['start_time'];//开始时间
          $endtime=$_POST['end_time'];//结束时间
          $sh_status=$_POST['term'];//状态（审核、未审核）
          if($sh_status!=2){
            $data['sh_status']=$sh_status;
          }
          if(!empty($startime)&&!empty($endtime)){
            $data['add_time']=array('between',array($startime,$endtime));
          }
          $fm=M('finace_manage')->where($data)->order('add_time desc')->select();
          $count=count($fm);
          $page=$this->page($count,10);
          $this->assign('term',$_POST['term']);
          $this->assign('page',$page->show());
          $this->assign('startime',$startime);
          $this->assign('endtime',$endtime);
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
            if($fm['sh_status']==1){
                $this->error('此店铺已审核',U('Fmindex'));
            }else{
                $shop=M('users')->where('id='.$fm['a_shop_id'])->find();
                $time=strtotime("+".$shop['continuted_time']." day",$shop['out_time']);
                $datas['out_time']=$time;
                $s=M('users')->where('id='.$shop['id'])->save($datas);
            }
        }
        $st=M('finace_manage')->where($where)->save($data);
        if($st){
            $this->success('审核成功',U('Fmindex'));
        }else{
            $this->error('审核失败',U('Fmindex'));
        }
        
    }
     //店铺分类
     public function shopCategory(){

        $uid=$_SESSION['ADMIN_ID'];
        $rolelist=M('role')->where('uid='.$uid)->order('listorder')->select();
        $this->assign("rolelist",$rolelist);
        $this->display();
    }  
    //添加分类
    public function addCategory(){
        if(IS_POST){
             if($_SESSION['ADMIN_ID']){
                $data['uid']=$_SESSION['ADMIN_ID'];
                $data['name']=I('post.name');
                $data['remark']=I('post.remark');
                $data['status']=I('post.status');
                $data['create_time']=time();
                $orderby=M('role')->max('listorder');
                if($orderby==""){
                    $data['listorder']=1;
                }else{
                    $data['listorder']=$orderby+1;
                }
                $role=M('role')->add($data);
                if($role){
                    $this->success("添加角色成功",U("Shop/shopCategory"));
                }else{
                    $this->error("添加失败！");
                }

          }
       }
        else{
            $this->display();
        }
    }

     /**
     * 编辑分类
     */
    public function roleedit() {
        $id = intval(I("get.id"));
        if ($id == 0) {
            $id = intval(I("post.id"));
        }
        if ($id == 1) {
            $this->error("超级管理员角色不能被修改！");
        }
        $data = $this->Role->where(array("id" => $id))->find();
        if (!$data) {
            $this->error("该角色不存在！");
        }

        $this->assign("data", $data);
        $this->display();
    }
    public function updaterole(){   
        if(IS_POST){
            $id = intval(I("post.id"));
            $data['name']=I('post.name');
            $data['remark']=I('post.remark');
            $data['status']=I('post.status');
            $data['update_time']=time();
            $updatedata=M('role')->where('id='.$id)->save($data);
            
            if($updatedata){
                $this->success('修改成功!',U('Shop/shopCategory'));
            }else{
                $this->error('修改失败！',U('Shop/shopCategory'));
            }
        }
    }

     /**
     * 删除分类
     */
    public function roledelete() {
        $users_obj = D("Users");
        $id = intval(I("get.id"));
        if ($id == 1) {
            $this->error("超级管理员角色不能被删除！");
        }
        $count=$users_obj->where("role_id=$id")->count();
        if($count){
            $this->error("该角色已经有用户！");
        }else{
            $status = $this->Role->delete($id);
            if ($status!==false) {
                $this->success("删除成功！", U('Shop/shopCategory'));
            } else {
                $this->error("删除失败！");
            }
        }
        
    }

}
?>
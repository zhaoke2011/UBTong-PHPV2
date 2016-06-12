<?php
class MainAction extends AdminbaseAction {
	
	function _initialize() {
	}
    public function index(){
    	//数据统计
    	$info = array();
        $loginname=M('users')->where('id='.$_SESSION['ADMIN_ID'])->find();
        if($loginname['shop_type']==1){
            $where['shop_type']=$loginname['shop_type']+1;
            $where['parent_id']=0;
            $shopcount=M('users')->where($where)->count();
            $ordercount=M('order')->count();
        }
        if($loginname['shop_type']==2){
            $where['shop_type']=$loginname['shop_type']+1;
            $where['parent_id']=$_SESSION['ADMIN_ID'];
            $shopcount=M('users')->where($where)->count();
            $ordercount=M('order')->where('a_shop_id='.$_SESSION['ADMIN_ID'])->count();
        }
        $info[0]['shopcount']=$shopcount;
        $info[0]['ordercount']=$ordercount; 
        $data=array(
            '官网'=>'www.ubaitong.com',
            '系统发布'=>'优百通后台V2.1.0'
            );
        $this->assign('data',$data);
    	$this->assign('server_info', $info);
    	$this->display();
    }
}
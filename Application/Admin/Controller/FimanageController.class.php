<?php
namespace Admin\Controller;

class FimanageController extends AdminController {
    public function _initialize(){
        parent::_initialize();
    }

    //查询店铺充值情况 欧阳龙泉 05.17
    public function index(){
    	$fm=M('finace_manage')->order('add_time desc')->select();
    	foreach ($fm as $key => $value) {
    		$shop_name=M('a_shop')->where('as_id='.$value['a_shop_id'])->find();//查询店铺名称
    		$fm[$key]['shop_name']=$shop_name['account'];
    	}
    	$count=M('finace_manage')->where('sh_status=0')->count();
    	$this->assign('count',$count);
    	$this->assign('fm',$fm);
    	$this->display();
    }
    //审核 欧阳龙泉 05.17
    public function setstatus(){
    	$id=$_GET['id'];
        $fm=M('finace_manage')->where('fm_id='.$id)->find();
        $shop=M('a_shop')->where('as_id='.$fm['a_shop_id'])->find();
        $time=strtotime("+".$shop['continuted_time']." day",$shop['out_time']);
        $datas['out_time']=$time;
        $s=M('a_shop')->where('as_id='.$shop['as_id'])->save($datas);
    	$data['sh_status']=1;
    	$data['sh_time']=time();
    	$data['admin_id']=UID;
    	$st=M('finace_manage')->where('fm_id='.$id)->save($data);
    	if($st){
    		action_log('finace_sh', 审核成功, $id, UID);
    		$this->success('审核成功');
    	}else{
    		action_log('finace_sh', 审核失败, $id, UID);
    		$this->error('审核失败');
    	}
    }
    //批量审核 欧阳龙泉 05.17
    public function belstatus(){
    	$ids=I('post.ids');
    	$data['sh_status']=1;
    	$data['sh_time']=time();
    	$data['admin_id']=UID;
    	foreach ($ids as $key => $value) {
            $fm=M('finace_manage')->where('fm_id='.$value)->find();
            $shop=M('a_shop')->where('as_id='.$fm['a_shop_id'])->find();
            $time=strtotime("+".$shop['continuted_time']." day",$shop['out_time']);
            $datas['out_time']=$time;
            $s=M('a_shop')->where('as_id='.$shop['as_id'])->save($datas);
    		$st=M('finace_manage')->where('fm_id='.$value)->save($data);
    		if($st){
    			action_log('finace_sh', 审核成功, $value, UID);
    		}else{
    			action_log('finace_sh', 审核失败, $value, UID);
    		}
    	}
    	if($st){
    		$this->success('审核成功');
    	}else{
    		$this->error('审核失败');
    	}
    }
    
}
?>
<?php

class MerchandiseAction extends AdminbaseAction {

    protected $Role;
    function _initialize() {
        parent::_initialize();
        $this->Role = D("Role");
    }
    //商品管理
    public function merCategory(){
    	$this->display();
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
	    			$this->success("添加角色成功",U("Merchandise/shopCategory"));
	    		}else{
	    			$this->error("添加失败！");
	    		}

    	  }
       }
    	else{
    		$this->display();
    	}
    }
     //商品分类添加
     public function merchadd(){
        if(IS_POST){
             if($_SESSION['ADMIN_ID']){

                $data['uid']=$_SESSION['ADMIN_ID'];
                $data['category_name']=I('post.category_name');
                $data['category_picture']=I('post.slide_pic');
                $data['category_url']=I('post.category_url');
                $data['category_description']=I('post.category_description');
                $merchandise=M('merchandisecategory');
                $tianja=$merchandise->data($data)->add();
                if($tianja){
                    $this->success("添加成功",U("Merchandise/merchadd"));
                }else{
                    $this->error("添加失败！");
                }                          
          }
       }
       else{
           $this->display();
       }
     }
     //商品分类首页
     public function merlist(){
      $mer=M('merchandisecategory');
      $count=$mer->count();
      $page=$this->Page($count,5);
      $list  = $mer->order('mc_id asc')->limit($page->firstRow . ',' . $page->listRows)->select();
      $this->assign('page',$page->show());
      $this->assign('list',$list);
      $this->assign('page',$page->show());
      $this->display();
    }
    //商品分类搜索
     public function sortsearch(){
       $mer=M('merchandisecategory');
      if(isset($_POST['caname'])&& $_POST['caname']!=NULL){
        $where['category_name']=array('like',"%{$_POST['caname']}%");    
        }
      $count = $mer->where($where)->count();// 查询满足要求的总记录数
      $page  = $this->Page($count,3);// 实例化分页类
      $nowPage = isset($_GET['p'])?$_GET['p']:1;
      $arr=$mer->where($where)->page($nowPage.','.$page->listRows)->select();
      $this->assign('list',$arr);
      $this->assign('page',$page->show());
      $this->display('merlist');

    }
     //商品分类编辑页面
    public function merchedit(){
        $mc_id=I("get.mc_id");
  
        $info=D("merchandisecategory")->where('mc_id='.$mc_id)->find();
         
        $this->assign("info",$info);
        $this->display();
            }
    //商品分类编辑
    public function merchdoedit(){
      
        if(IS_POST){
            $mc_id=I("get.mc_id");
            $data['category_name']=I('post.category_name');
            $data['category_picture']=I('post.slide_pic');
            $data['category_url']=I('post.category_url');
            $data['category_description']=I('post.category_description');
            $merch=M('merchandisecategory');
            $edit=$merch->where('mc_id='.$mc_id)->save($data);
            if($edit){
              $this->success("修改成功",U("Merchandise/merlist"));
            }
            else{
               $this->success("修改失败",U("Merchandise/merchedit"));
            }
        }
       }
       //商品分类删除
       public function merchdelete(){
         $merch=M('merchandisecategory');
         $mc_id=I("get.mc_id");
         $count=$merch->delete($mc_id);
         if($count>0){
             $this->success("删除数据成功");
            }else{
                $this->error("删除数据失败");
          }
       }

    
    public function merforsale()
    {
      $this->display();
    }

    

}
?>
<?php
/*测试权限 林汀津 5.17*/
namespace Admin\Controller;
  
class TestController extends AdminController {
 
    public function index(){
        //$this->error('cg',U('bb'));
    	$this->display();
    }
  	public function aaa(){
		//echo 1;	
		$this->ajaxReturn($_SERVER['HTTP_REFERER']);
	}
	public function bb(){
		$a1=array("a","b",2,3,4);//dump($a1);
		//dump(array_filter($a1,array($this,'test_odd')));
		$this->display();
	}
  	function test_odd($var)
		{
		return($var & 1);
		}
}
?>
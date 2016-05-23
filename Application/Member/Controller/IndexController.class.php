<?php
// +----------------------------------------------------------------------
// | OneThink [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013 http://www.onethink.cn All rights reserved.
// +----------------------------------------------------------------------
// | Author: 麦当苗儿 <zuojiazi@vip.qq.com> <http://www.zjzit.cn>
// +----------------------------------------------------------------------

namespace Member\Controller;
use Think\Controller;
/**
 * 成员登录注册
 * 个人信息
 */
class IndexController extends Controller {

	//登录页
    public function index(){
		//$User = M('User','other_','mssql://sa:123@192.168.1.64,14551/weidian'); dump($User);
       $this->display();
    }
	/* 验证码，用于登录和注册 */
	public function verify(){
		$verify = new \Think\Verify();
		$verify -> useCurve  = false;//是否使用混淆曲线
		$verify -> fontSize  = 30;//字体大小
		$verify -> slantRange = array(-10,20);//字体倾斜范围
		$verify -> fontttf = '4.ttf';//字体选择
		$verify -> entry(1);
	}
}
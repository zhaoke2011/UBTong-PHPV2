<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- HTML5 shim for IE8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <![endif]-->

	<link href="__ROOT__/statics/simpleboot/themes/<?php echo C('SP_ADMIN_STYLE');?>/theme.min.css" rel="stylesheet">
    <link href="__ROOT__/statics/simpleboot/css/simplebootadmin.css" rel="stylesheet">
    <link href="__ROOT__/statics/js/artDialog/skins/default.css" rel="stylesheet" />
    <link href="__ROOT__/statics/simpleboot/font-awesome/4.2.0/css/font-awesome.min.css"  rel="stylesheet" type="text/css">
    <style>
		.length_3{width: 180px;}
	</style>
	<!--[if IE 7]>
	<link rel="stylesheet" href="__ROOT__/statics/simpleboot/font-awesome/4.2.0/css/font-awesome-ie7.min.css">
	<![endif]-->
<script type="text/javascript">
//全局变量
var GV = {
    DIMAUB: "__ROOT__/",
    JS_ROOT: "statics/js/",
    TOKEN: ""
};
</script>
<!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="__ROOT__/statics/js/jquery.js"></script>
    <script src="__ROOT__/statics/js/wind.js"></script>
    <script src="__ROOT__/statics/simpleboot/bootstrap/js/bootstrap.min.js"></script>
<?php if(APP_DEBUG): ?><style>
		#think_page_trace_open{
			z-index:9999;
		}
	</style><?php endif; ?>

<body>
	<!-- 标题栏 -->
<!-- 	<div class="main-title">
		<h2>待审核(<?php echo ($count); ?>)</h2>
	</div> -->

    <div class="tools auth-botton">
      <!--   <button class="btn" target-form="ids" onclick="tosubmit1();">取 消 冻 结</button> -->
        <button class="btn ajax-post confirm" target-form="ids" onclick="tosubmit();">冻 结</button>
    </div>
<script>
	function tosubmit(){
		$('#form1').submit();
		$('#form1').attr('action','');
	}
</script>
	<!-- 数据列表 -->
	<div class="data-table table-striped">
			<table class="">
    <thead>
        <tr>
		<th class="row-selected row-selected"><input class="check-all" type="checkbox"/></th>
		<th class="">编号</th>
		<th class="">店铺账号</th>
		<th class="">密码</th>
		<th class="">微信公众号</th>
		<th class="">注册时间</th>
		<th class="">过期时间</th>
		<th class="">状态</th>
		<th class="">操作</th>
		</tr>
    </thead>
    <tbody>
    	<form action="<?php echo U('Shop/belfreeze');?>" method="post" id="form1">
    	
		<?php if(is_array($shop)): $i = 0; $__LIST__ = $shop;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><tr>
            <td><input class="ids" type="checkbox" name="ids[]" value="<?php echo ($vo["as_id"]); ?>" /></td>

			<td><?php echo ($vo["as_id"]); ?></td>
			<td><?php echo ($vo["account"]); ?></td>
			<td><?php echo ($vo["pwd"]); ?></td>
			<td><?php echo ($vo["wecha_name"]); ?></td>
			<td><?php echo (date("Y-m-d H:i:s",$vo["register_time"])); ?></td>
			<td><?php echo (date("Y-m-d H:i:s",$vo["out_time"])); ?></td>
			<?php if($vo["out_time"] < $time): ?><td>店铺已过期</td>
			<?php else: ?>
			<?php if($vo["status"] == 0): ?><td>正常</td>
			<?php else: ?>
			<td>冻结</td><?php endif; endif; ?>
			<td><?php if($vo["status"] == 0): ?><a href="<?php echo U('Shop/freeze?id='.$vo['as_id']);?>" class="confirm ajax-get">冻结</a><?php endif; ?>
			<?php if($vo["status"] == 1): ?><a href="<?php echo U('Shop/nofreeze?id='.$vo['as_id']);?>" class="confirm ajax-get">取消冻结</a><?php endif; ?>
			<a href="<?php echo U('Shop/reset?id='.$vo['as_id']);?>" class="confirm ajax-get">重置密码</a>
            </td>
		</tr><?php endforeach; endif; else: echo "" ;endif; ?>

		</form>
	</tbody>
    </table> 
        
	</div>
    <div class="page">
        <?php echo ($_page); ?>
    </div>
</body>
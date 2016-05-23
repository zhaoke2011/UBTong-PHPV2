<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title><?php echo ($meta_title); ?>|OneThink管理平台</title>
    <link href="/v2/Public/favicon.ico" type="image/x-icon" rel="shortcut icon">
    <link rel="stylesheet" type="text/css" href="/v2/Public/Admin/css/base.css" media="all">
    <link rel="stylesheet" type="text/css" href="/v2/Public/Admin/css/common.css" media="all">
    <link rel="stylesheet" type="text/css" href="/v2/Public/Admin/css/module.css">
    <link rel="stylesheet" type="text/css" href="/v2/Public/Admin/css/style.css" media="all">
	<link rel="stylesheet" type="text/css" href="/v2/Public/Admin/css/<?php echo (C("COLOR_STYLE")); ?>.css" media="all">
     <!--[if lt IE 9]>
    <script type="text/javascript" src="/v2/Public/static/jquery-1.10.2.min.js"></script>
    <![endif]--><!--[if gte IE 9]><!-->
    <script type="text/javascript" src="/v2/Public/static/jquery-2.0.3.min.js"></script>
    <script type="text/javascript" src="/v2/Public/Admin/js/jquery.mousewheel.js"></script>
    <!--<![endif]-->
    
</head>
<body>
    <!-- 头部 -->
    <div class="header">
        <!-- Logo -->
        <span class="logo"></span>
        <!-- /Logo -->
		
        <!-- 主导航 -->
        <ul class="main-nav">
            <?php if(is_array($__MENU__["main"])): $i = 0; $__LIST__ = $__MENU__["main"];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$menu): $mod = ($i % 2 );++$i;?><li class="<?php echo ((isset($menu["class"]) && ($menu["class"] !== ""))?($menu["class"]):''); ?>"><a href="<?php echo (u($menu["url"])); ?>"><?php echo ($menu["title"]); ?></a></li><?php endforeach; endif; else: echo "" ;endif; ?>
        </ul>
        <!-- /主导航 -->
        
        <!-- 用户栏 -->
        <div class="user-bar">
            <a href="javascript:;" class="user-entrance"><i class="icon-user"></i></a>
            <ul class="nav-list user-menu hidden">
                <li class="manager">你好，<em title="<?php echo session('user_auth.username');?>"><?php echo session('user_auth.username');?></em></li>
                <li><a href="<?php echo U('User/updatePassword');?>">修改密码</a></li>
                <li><a href="<?php echo U('User/updateNickname');?>">修改昵称</a></li>
                <li><a href="<?php echo U('Public/logout');?>">退出</a></li>
            </ul>
        </div>
    </div>
    <!-- /头部 -->
    <!-- 边栏 -->
    <div class="sidebar">
        <!-- 子导航 -->
        
    

        <!-- /子导航 -->
    </div>
    <!-- /边栏 -->

    <!-- 内容区 -->
    <div id="main-content">
        <div id="top-alert" class="fixed alert alert-error" style="display: none;">
            <button class="close fixed" style="margin-top: 4px;">&times;</button>
            <div class="alert-content">这是内容</div>
        </div>
        <div id="main" class="main">
            
            <!-- nav -->
            <?php if(!empty($_show_nav)): ?><div class="breadcrumb">
                <span>您的位置:</span>
                <?php $i = '1'; ?>
                <?php if(is_array($_nav)): foreach($_nav as $k=>$v): if($i == count($_nav)): ?><span><?php echo ($v); ?></span>
                    <?php else: ?>
                    <span><a href="<?php echo ($k); ?>"><?php echo ($v); ?></a>&gt;</span><?php endif; ?>
                    <?php $i = $i+1; endforeach; endif; ?>
            </div><?php endif; ?>
            <!-- nav -->
            

            
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

        </div>
        <div class="cont-ft">
            <div class="copyright">
                <div class="fl">感谢使用<a href="http://www.onethink.cn" target="_blank">OneThink</a>管理平台</div>
                <div class="fr">V<?php echo (ONETHINK_VERSION); ?></div>
            </div>
        </div>
    </div>
    <!-- /内容区 -->
    <script type="text/javascript">
    (function(){
        var ThinkPHP = window.Think = {
            "ROOT"   : "/v2", //当前网站地址
            "APP"    : "/v2/index.php?s=", //当前项目地址
            "PUBLIC" : "/v2/Public", //项目公共目录地址
            "DEEP"   : "<?php echo C('URL_PATHINFO_DEPR');?>", //PATHINFO分割符
            "MODEL"  : ["<?php echo C('URL_MODEL');?>", "<?php echo C('URL_CASE_INSENSITIVE');?>", "<?php echo C('URL_HTML_SUFFIX');?>"],
            "VAR"    : ["<?php echo C('VAR_MODULE');?>", "<?php echo C('VAR_CONTROLLER');?>", "<?php echo C('VAR_ACTION');?>"]
        }
    })();
    </script>
    <script type="text/javascript" src="/v2/Public/static/think.js"></script>
    <script type="text/javascript" src="/v2/Public/Admin/js/common.js"></script>
    <script type="text/javascript">
        +function(){
            var $window = $(window), $subnav = $("#subnav"), url;
            $window.resize(function(){
                $("#main").css("min-height", $window.height() - 130);
            }).resize();

            /* 左边菜单高亮 */
            url = window.location.pathname + window.location.search;
            url = url.replace(/(\/(p)\/\d+)|(&p=\d+)|(\/(id)\/\d+)|(&id=\d+)|(\/(group)\/\d+)|(&group=\d+)/, "");
            $subnav.find("a[href='" + url + "']").parent().addClass("current");

            /* 左边菜单显示收起 */
            $("#subnav").on("click", "h3", function(){
                var $this = $(this);
                $this.find(".icon").toggleClass("icon-fold");
                $this.next().slideToggle("fast").siblings(".side-sub-menu:visible").
                      prev("h3").find("i").addClass("icon-fold").end().end().hide();
            });

            $("#subnav h3 a").click(function(e){e.stopPropagation()});

            /* 头部管理员菜单 */
            $(".user-bar").mouseenter(function(){
                var userMenu = $(this).children(".user-menu ");
                userMenu.removeClass("hidden");
                clearTimeout(userMenu.data("timeout"));
            }).mouseleave(function(){
                var userMenu = $(this).children(".user-menu");
                userMenu.data("timeout") && clearTimeout(userMenu.data("timeout"));
                userMenu.data("timeout", setTimeout(function(){userMenu.addClass("hidden")}, 100));
            });

	        /* 表单获取焦点变色 */
	        $("form").on("focus", "input", function(){
		        $(this).addClass('focus');
	        }).on("blur","input",function(){
				        $(this).removeClass('focus');
			        });
		    $("form").on("focus", "textarea", function(){
			    $(this).closest('label').addClass('focus');
		    }).on("blur","textarea",function(){
			    $(this).closest('label').removeClass('focus');
		    });

            // 导航栏超出窗口高度后的模拟滚动条
            var sHeight = $(".sidebar").height();
            var subHeight  = $(".subnav").height();
            var diff = subHeight - sHeight; //250
            var sub = $(".subnav");
            if(diff > 0){
                $(window).mousewheel(function(event, delta){
                    if(delta>0){
                        if(parseInt(sub.css('marginTop'))>-10){
                            sub.css('marginTop','0px');
                        }else{
                            sub.css('marginTop','+='+10);
                        }
                    }else{
                        if(parseInt(sub.css('marginTop'))<'-'+(diff-10)){
                            sub.css('marginTop','-'+(diff-10));
                        }else{
                            sub.css('marginTop','-='+10);
                        }
                    }
                });
            }
        }();
    </script>
    
</body>
</html>
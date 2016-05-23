<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>成员登录</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"><!--移动端禁止缩放-->
    <link href="/onethink/Public/static/bootstrap/css/bootstrap.css" rel="stylesheet">
	<script type="text/javascript" src="/onethink/Public/static/jquery-2.0.3.min.js"></script>
    <script type="text/javascript" src="/onethink/Public/static/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript">

    	$(document)
	    	.ajaxStart(function(){
	    		$("button:submit").addClass("log-in").attr("disabled", true);
	    	})
	    	.ajaxStop(function(){
	    		$("button:submit").removeClass("log-in").attr("disabled", false);
	    	});


    	$("form").submit(function(){
    		var self = $(this);
    		$.post(self.attr("action"), self.serialize(), success, "json");
    		return false;

    		function success(data){
    			if(data.status){
    				window.location.href = data.url;
    			} else {
    				self.find(".Validform_checktip").text(data.info);
    				//刷新验证码
    				$(".reloadverify").click();
    			}
    		}
    	});

		$(function(){
			var ad='s=/\member/\index/index.html';
			var cc=ad.replace(/\?.*$/,'')+'?'+Math.random();alert(ad+'\n'+cc);
			var verifyimg = $(".verifyimg").attr("src");
            $(".reloadverify").click(function(){
                if( verifyimg.indexOf('?')>0){
                    $(".verifyimg").attr("src", verifyimg+'&random='+Math.random());
                }else{
                    $(".verifyimg").attr("src", verifyimg.replace(/\?.*$/,'')+'?'+Math.random());
                }
            });
		});
	</script>
</head>
<body>
	<!-- 头部 -->
	<!-- /头部 -->
	
	<!-- 主体  --.container 类用于固定宽度并支持响应式布局的容器,容器本身居中。 -->
    <div id="main-container" class="container">
        <div class="row">
            <section>
                <div class="span12">
                    <form class="login-form" action="/onethink/index.php?s=/member/index/index.html" method="post">
                      <div class="control-group">
                        <label class="control-label" for="inputEmail">用户名</label>
                        <div class="controls">
                          <input type="text" id="inputEmail" class="span3" placeholder="请输入用户名"  ajaxurl="/member/checkUserNameUnique.html" errormsg="请填写1-16位用户名" nullmsg="请填写用户名" datatype="*1-16" value="" name="username">
                        </div>
                      </div>
                      <div class="control-group">
                        <label class="control-label" for="inputPassword">密码</label>
                        <div class="controls">
                          <input type="password" id="inputPassword"  class="span3" placeholder="请输入密码"  errormsg="密码为6-20位" nullmsg="请填写密码" datatype="*6-20" name="password">
                        </div>
                      </div>
                      <div class="control-group">
                        <label class="control-label" for="inputPassword">验证码</label>
                        <div class="controls">
                          <input type="text" id="inputPassword" class="span3" placeholder="请输入验证码"  errormsg="请填写5位验证码" nullmsg="请填写验证码" datatype="*5-5" name="verify">
                        </div>
                      </div>
                      <div class="control-group">
                        <label class="control-label"></label>
                        <div class="controls">
                            <img class="verifyimg reloadverify" alt="点击切换" src="<?php echo U('verify');?>" style="cursor:pointer;">
                        </div>
                        <div class="controls Validform_checktip text-warning"></div>
                      </div>
                      <div class="control-group">
                        <div class="controls">
                          <label class="checkbox">
                            <input type="checkbox"> 自动登陆
                          </label>
                          <button type="submit" class="btn">登 陆</button>
                        </div>
                      </div>
                    </form>
                </div>
            </section>
        </div>
    </div>
	<!-- /主体 -->

	<!-- 底部 -->
	
    <!-- 底部
    ================================================== -->
    <footer class="footer">
      <div class="container">
          <p> 本页由 <strong>地下城-ltj</strong> 强力驱动</p>
      </div>
    </footer>
<style>
.footer {
    text-align: center;
    padding: 30px 0;
    margin-top: 70px;
    border-top: 1px solid #e5e5e5;
    background-color: #f5f5f5;
}
</style>

	<!-- /底部 -->
</body>
</html>
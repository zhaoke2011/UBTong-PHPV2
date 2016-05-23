<?php if (!defined('THINK_PATH')) exit();?>﻿<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>订单管理页</title>
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
    
    <link href="/UBTong-PHPV2/Public/mrSystem/res/iframe/css/com.css" rel="stylesheet" type="text/css" />
    <link href="/UBTong-PHPV2/Public/mrSystem/res/iframe/css/mall.css" rel="stylesheet" type="text/css" />
    <link href="/UBTong-PHPV2/Public/mrSystem/res/iframe/css/popularize.css" rel="stylesheet" type="text/css" />
    
    <script type="text/javascript" language="javascript" src="/UBTong-PHPV2/Public/mrSystem/res/iframe/js/jquery.js"></script>
    <script type="text/javascript" language="javascript" src="/UBTong-PHPV2/Public/mrSystem/res/iframe/js/mall.js"></script>
    <link href="/UBTong-PHPV2/Public/mrSystem/res/bootstrap/bootstrap-3.3.0/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="/UBTong-PHPV2/Public/mrSystem/res/component/css/component.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="/UBTong-PHPV2/Public/My97DatePicker/WdatePicker.js"></script>
    <script type="text/javascript">
        function search(){
            
            $('#sub').submit();
        }
    </script>
</head>

<body>
    <!-- <div class="background_Frame_div_bg" style=""></div>
     <div id="loading_layer" style="display:none;">
        <img src="/UBTong-PHPV2/Public/mrSystem/res/bootstrap/loadRes/img/loading.gif" id="loading_img" alt=""/>
    </div> -->
    <form action="/UBTong-PHPV2/index.php?s=/Admin/Order/orderssearch/p/1/op/<?php echo ($op); ?>" id="sub" method="post">


    <!-- 加载效果设置 -->
   
    <!--右边内容-->
     <div class="tab-product" id="tabProduct">
    <div class="body-right">
        <!--订单内容块-->
        <div class="order-main" style="overflow:visible; height:auto;">
            <div class="order-top">
                <div class="top-left" style="width: 350px;">
                    <p>
                        <span>店铺名称：</span>
                        <input type="text" placeholder="请输入文字..." class="input_text_1" name="shop_name" value="<?php echo ($shop_name); ?>"/>
                        <em class="clr"></em>
                    </p>
                    <p class="p-name">
                        <span>商品名称：</span>
                        <input type="text" placeholder="请输入文字..." class="input_text_1" name="mes_name" value="<?php echo ($mes_name); ?>"/>
                        <em class="clr"></em>
                    </p>
                    <p class="p-name">
                        <span>订单编号：</span>
                        <input type="text" placeholder="请输入文字..." class="input_text_1" name="order_sn" value="<?php echo ($order_sn); ?>"/>
                        <em class="clr"></em>
                    </p>
                </div>
                <div class="top-right">
                    <div class="or-time">
                        <span class="s-text">成交时间：</span>
                        <em>从</em>
                       <input name="start_time" value="<?php echo ($start_time); ?>" realvalue="<?php echo ($start_time); ?>" type="text" class="input_text_1 Wdate" readonly="readonly" onclick="WdatePicker({maxDate:'%y-%M-%d'})" size="12" style="width: 179px;">
                        <em>到</em>
                        <input name="end_time" value="<?php echo ($end_time); ?>" realvalue="<?php echo ($end_time); ?>" type="text" class="input_text_1 Wdate" readonly="readonly" onclick="WdatePicker({maxDate:'%y-%M-%d'})" size="12" style="width: 179px;">
                        <p class="clr"></p>
                    </div>
                </div>
                <div class="clr"></div>
            </div>
            </form>
            <!--订单搜索按钮-->
            <div class="order-seach">
                <a href="javascript:search();">搜索</a>
                <!-- <a href="/UBTong-PHPV2/index.php?s=/Admin/Order/pushExcel/shop_id/<?php echo ($shop_id); ?>">批量导出</a> -->
                <div class="clr"></div>
            </div>
            <!--订单搜索按钮-end-->

            <!--订单切换-->
            <div class="tab-product" id="tabProduct">
                <div class="inventory" style="_margin-top:-31px;">
                    <!--表格-->
                    <table class="or-table" cellpadding="0" cellspacing="0">
                        <thead>
                        <tr>
                            <td width="18%">商品名称</td>
                            <td width="20%">单价（元）</td>
                            <td width="10%">数量</td>
                            <td width="10%">总价（元）</td>
                            <td width="13%">备注 </td>
                            <td width="15%">状态</td>
                        </tr>
                        </thead>
                        <tbody>
                            <?php if(is_array($orderlist)): $i = 0; $__LIST__ = $orderlist;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><tr>
                            <td class="td-2" colspan="1">
                               <!--  <input id="Check1" class="checkbox" type="checkbox"> --><label for="Check1">订单编号：<?php echo ($vo["order_sn"]); ?></label>
                            </td>
                            <td class="td-2" colspan="1">订购时间：<?php echo ($vo["add_time"]); ?></td>
                            <td class="td-2" colspan="2">买家：<?php echo ($vo["buyer_name"]); ?></td>
                            <!-- <td class="td-2" colspan="1">交易方式：<?php echo ($vo["way"]); ?></td> -->
                            <td class="td-2" colspan="2">店铺：<?php echo (getshopidbyname($vo["a_shop_id"])); ?></td>
                        </tr>
                            <?php if(is_array($vo['orderitems'])): $j = 0; $__LIST__ = $vo['orderitems'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$va): $mod = ($j % 2 );++$j;?><tr>
                            <td class="td-pro">
                                <a class="a-img" href="###">
                                    <img width="46" height="46" src="/UBTong-PHPV2/Public/mrSystem/res/iframe/img/mall/46x46orderPix1.jpg" />
                                </a>
                                <a class="a-name" href="###"><?php echo ($va["merchandise_name"]); ?></a>
                            </td>
                            <td><?php echo ($va["price"]); ?></td>
                            <td><?php echo ($va["num"]); ?></td>
                            <?php if($j == 1): ?><td rowspan="<?php echo ($vo["count"]); ?>"><?php echo ($vo["total_money"]); ?></td>
                            <td rowspan="<?php echo ($vo["count"]); ?>"><?php echo ($vo["remark"]); ?></td>
                            <td rowspan="<?php echo ($vo["count"]); ?>"><?php echo (getoidbystatus($vo["o_id"])); ?></td><?php endif; ?>
                        </tr><?php endforeach; endif; else: echo "" ;endif; endforeach; endif; else: echo "" ;endif; ?>
                        </tbody>
                    </table>
                    <!--表格-end-->

                    <div class="tab-page" style="text-align: center">
                        <div class="tab_page_div_right" style="float: right;margin: 10px 20px 0px 0px;">
                           <div class="green-black" >
                                <?php echo ($page); ?>
                            </div>
                        </div>
                        <div style="clear: both;"></div>
                    </div>
                </div>
            </div>
            <!--订单切换-end-->
        </div>
        <!--订单内容块-end-->
    </div>
    <!--右边内容-end-->
<!-- start: MAIN JAVASCRIPTS -->
<!--[if lt IE 9]>
<script src="res/basic/js/excanvas.min.js"></script>
<![endif]-->
<script type="text/javascript" src="/UBTong-PHPV2/Public/mrSystem/res/basic/js/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="/UBTong-PHPV2/Public/mrSystem/res/bootstrap/bootstrap-3.3.0/js/bootstrap.js"></script>
<script type="text/javascript" src="/UBTong-PHPV2/Public/mrSystem/res/basic/js/png.js" ></script>
<script type="text/javascript" src="/UBTong-PHPV2/Public/mrSystem/res/component/js/component.js" ></script>
    <script type="text/javascript" >

        startLoading();
        $(function(){
            //启用组件 风格1下拉框
            componentFunction.select_style_1();
        });
    </script>
<!-- end: MAIN JAVASCRIPTS -->

</body>
</html>
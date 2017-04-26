<template>
	<div class="mine">
		<bNav>
			<h2 slot="tittle">我的</h2>
			<img slot="right_icon" src="../../assets/images/ic_settings.png">
		</bNav>	
		<div class="login">
			<div class="id_img"></div>
			<div class="resigeter">
				<span><a href="##">登录</a><i>/</i><a href="##">注册</a></span>
			</div>
		</div>
		<div class="remind">
			<div class="rem_top">
				<p>提醒</p>
				<span><img src="../../assets/images/ic_group_topic_right_arrow.png" /></span>
			</div>
			<div class="red_bom">
				<p>暂无新数据</p>
			</div>
		</div>

		<submenu></submenu>
	</div>
</template>

<script>
	import bNav from '../../components/header'
	import submenu from '../../components/submenu'
	export default{
		components:{
			bNav,
			submenu
		}
	}
</script>

<style>
	.login{ width:100%; height:100px; background-image:url(../../assets/images/ic_my_default_bg.png); background-size:100% 100%; border-top:1px solid #3d8e4a; padding-top:25px;}
	.login .id_img{ height:70px; width:70px; background-color:#FFF; border-radius:50%; background-image:url(../../assets/images/ic_share_default_user.png); background-size:100% 100%; background-position:center; margin-left:5.3%; float:left; }
	.login .resigeter{ width:47.33%; height:38px; border:1px solid #FFF; border-radius:5px; float:left; margin-top:13px; margin-left:14%; line-height:38px; text-align:center }
	.resigeter span a{ font-size:12px; color:#FFF; }
	.resigeter span i{ font-size:12px; color:#FFF; padding:0 7px; }

	.remind{ height:130px; width:95%; padding-left:5%; }
	.remind .rem_top{ height:69px; background-image:url(../../assets/images/ic_mine_notification.png); background-repeat:no-repeat; background-size:32px 32px;
	background-position:0 28px; border-bottom:1px solid #e7e7e7; }
	.rem_top p{ font-size:16px; color:#272727; font-weight:bolder; float:left; margin-top:34px; margin-left:8.66%; }
	.rem_top span{ width:20px; height:20px; display:block; float:right; margin-right:6.66%;  margin-top:35px;}
	.rem_top span img{ max-width:100%;}
	.red_bom p{ font-size:14px; color:#cccccc; text-align:center; padding-top:15px; }
</style>
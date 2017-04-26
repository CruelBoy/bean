<template>
	<div class="choose_box">
		<div class="choose_left">
			<p>换一批</p>
		</div>
		<span class="choose_right">
			<slot name="choose_txt"></slot>
		</span>
		
	</div>
</template>

<style>
.choose_box{ height:50px; width:100%; background:#FFF; position:fixed; left:0 ;bottom:65px; z-index:10; border-top:1px solid #e5e5e5; line-height:50px;}
.choose_left {background-image:url(../assets/images/ic_reshare_flag.png); background-repeat:no-repeat; background-position:15px center; background-size:25px 25px; padding-left:45px; float:left;}	
.choose_left p{ font-size:14px; color:#4cc05f;}
.choose_right span{ float:right; display:inline-block; padding:0 15px; background:#e3e3e3; border-radius:5px; font-size:14px; color:#FFF; height:26px; line-height:26px; margin-top:12px; margin-right:20px; font-weight:bold;}
</style>
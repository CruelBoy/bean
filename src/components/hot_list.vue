<template>
	<div class="hot_list_wrap">
		<span class="h_tit"><slot name='h_tit'></slot></span>

		<hotContent>
			<h2 slot="h_tittle">我花了很长时间和容貌焦虑症对抗</h2>
			<p slot="h_content">整容不能直面心里的创口，直面心里的平凡才是真正的平凡</p>
			<span slot="h_autor">作者：中国三明治</span>
			<img slot="h_img" src="../assets/images/h_img_03.png"/>
		</hotContent>

		<hotContent>
			<h2 slot="h_tittle">太史公致命基因以及《史记》到底咋过审的</h2>
			<p slot="h_content">司马迁把项羽写成真英雄，而刘邦就是一个地痞无赖-这种文字怎么过...</p>
			<span slot="h_autor">作者：treasure</span>
			<img slot="h_img" src="../assets/images/shiji_06.png"/>
		</hotContent>	


	</div>
</template>

<script>
import hotContent from './hot_content'
export default{
	components:{
		hotContent,
	}
}

</script>


<style>
.hot_list_wrap{  padding-top: 16px; border-bottom: 1px solid #e8e8e8;}
.h_tit{ border-left: 8px solid #ff8447; height: 20px; font-size: 16px; color: #ff8447; padding-left:4.4%; }
.h_main_content{ height: 160px; padding-top: 16px; border-bottom: 1px solid #e8e8e8; padding-left: 5.33%; padding-top: 20px; position: relative;}
.h_tittle h2 {font-size: 18px; color: #494949; font-weight: bold; line-height: 25px; width: 59.33%;}
.h_content p{font-size:16px; color: #818181; line-height: 19px; width: 59.33%; margin-top:5px;}
.h_img{ width: 90px; height: 90px; display: block; position: absolute; right: 5.33%; top: 26px; }
.h_img img { max-width: 100%;  }
.h_autor{ color: #d0d0d0; display: block; height: 36px; line-height: 36px; background: url(../assets/images/top_bg_03.png) no-repeat 0 0; margin-top:12px;}
</style>
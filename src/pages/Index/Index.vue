<template>
	<div>
		<div class="top">
			<input type="txt" placeholder="影视 图书 唱片 小组等" />
			<img class="top_icon1" src="../../assets/images/ic_scan_gray.png">
			<img class="top_icon2" src="../../assets/images/ic_chat_white.png">
		</div>

		<hBanner>
			<div class="swiper-container">
			    <div class="swiper-wrapper">
					<div class="swiper-slide"><img src="../../assets/images/banner/01.jpg"/></div>
					<div class="swiper-slide"><img src="../../assets/images/banner/02.jpg"/></div>
					<div class="swiper-slide"><img src="../../assets/images/banner/03.jpg"/></div>
			    </div>
			    <!-- 如果需要分页器 -->
			    <div class="swiper-pagination"></div>
			</div>
		</hBanner>

		<hHot></hHot>
		<mTime></mTime>
	</div>
</template>



<script>
import '../../assets/lib/swiper/js/swiper.js'
import hBanner from '../../components/banner'
import hHot from '../../components/hot'
import mTime from '../../components/time'
export default {
	mounted(){
		var mySwiper = new Swiper ('.swiper-container', {
		    loop: true,	
		    autoplay: 2000,	    
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		  })        		
	},
  	components:{
  		hBanner,
  		hHot,
  		mTime
  	}
}

</script>



<style>
@import '../../assets/lib/swiper/css/swiper.css';


.top{ height:38px; background-color:#42bd56; padding-left:2.13%; position:fixed; width:100%; top:0; padding-top:10px; z-index: 30; }
.top input{ width:75%; height:30px; line-height:30px; border:none; font-size:15px; color:#cbcbcb; border-radius:10px; padding-left:40px; background-image:url(../../assets/images/ic_group_tab_search.png); background-repeat:no-repeat; background-size:19px 19px; background-position:10px center; outline: none;}
.top .top_icon1{ position:absolute; width:20px; height:20px; left:77%; top:15px; }
.top .top_icon2{ position:absolute; width:32px; height:32px; right:3%; }


.swiper-container { width: 100%;} 
.swiper-container img{ max-width: 100%; }
.swiper-pagination{ text-align: right; }

</style>
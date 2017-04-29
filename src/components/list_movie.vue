<template>
	<div>
		<slot name='movie_tit'></slot>	
	    <div class="swiper-container2">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide">
					<mDiscure>
						<img slot="m_discuse_img" src="../assets/images/movie_list_03.png">
						<span slot="m_discuse_tittle" >速度和激情8</span>
					</mDiscure>
	            </div>
	            <div class="swiper-slide">
					<mDiscure>
						<img slot="m_discuse_img" src="../assets/images/movie_list_05.png">
						<span slot="m_discuse_tittle" >和田玉传奇</span>
					</mDiscure>

	            </div>
	            <div class="swiper-slide">
					<mDiscure>
						<img slot="m_discuse_img" src="../assets/images/movie_list_07.png">
						<span slot="m_discuse_tittle" >蓝精灵</span>
					</mDiscure>

	            </div>
	            <div class="swiper-slide">

					<mDiscure>
						<img slot="m_discuse_img" src="../assets/images/movie_list_03.png">
						<span slot="m_discuse_tittle" >速度和激情8</span>
					</mDiscure>
	            </div>
	            <div class="swiper-slide">
					<mDiscure>
						<img slot="m_discuse_img" src="../assets/images/movie_list_05.png">
						<span slot="m_discuse_tittle" >速度和激情8</span>
					</mDiscure>
	            </div>

	            <div class="swiper-slide">
					<mDiscure>
						<img slot="m_discuse_img" src="../assets/images/movie_list_07.png">
						<span slot="m_discuse_tittle" >蓝精灵</span>
					</mDiscure>

	            </div>

	            
	        </div>
	    </div>
	</div>    
</template>


<script>
import mDiscure from './m_discuse'

export default{
	components:{
		mDiscure
	},
	mounted(){
		var swiper = new Swiper('.swiper-container2', {
	        pagination: '.swiper-pagination',
	        slidesPerView: 1,
	        centeredSlides: true,
	        paginationClickable: true,
	        spaceBetween: -250
	    });
	}
}


</script>
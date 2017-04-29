<template>
	<div class="time_box">

	<span class="h_tit" slot="h_tit">豆瓣时间<i>更多专栏 &nbsp;></i></span>
    <div class="swiper-container1">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
				<timeCont>					
						<img slot="time_img" src="../assets/images/per.png" alt="">
						<h2 slot="time_tittle">常江和非主流电影人们</h2>
						<span slot="time_infor">青年评论家，学者,邪典电影执着的人物</span>	
						<h3 slot="movie_name">邪典电影本纪</h3>
						<span slot="movie_infor">情色暴力的色觉冲击外，探索Cult精神内文化的内核</span>
						<p slot="detail_infor"><i>本期内容：</i><br><span>高智商电影问祖邪典片 | 《化生博士》</span></p>	
				</timeCont>
            </div>

            <div class="swiper-slide">
				<timeCont>
						<img slot="time_img" src="../assets/images/per.png" alt="">
						<h2 slot="time_tittle">常江和非主流电影人们</h2>
						<span slot="time_infor">青年评论家，学者,邪典电影执着的人物</span>	
						<h3 slot="movie_name">邪典电影本纪</h3>
						<span slot="movie_infor">情色暴力的色觉冲击外，探索Cult精神内文化的内核</span>
						<p slot="detail_infor"><i>本期内容：</i><br><span>高智商电影问祖邪典片 | 《化生博士》</span></p>	
				</timeCont>
            </div>


            <div class="swiper-slide">
				<timeCont>
						<img slot="time_img" src="../assets/images/per.png" alt="">
						<h2 slot="time_tittle">常江和非主流电影人们</h2>
						<span slot="time_infor">青年评论家，学者,邪典电影执着的人物</span>	
						<h3 slot="movie_name">邪典电影本纪</h3>
						<span slot="movie_infor">情色暴力的色觉冲击外，探索Cult精神内文化的内核</span>
						<p slot="detail_infor"><i>本期内容：</i><br><span>高智商电影问祖邪典片 | 《化生博士》</span></p>	
				</timeCont>
            </div>

            <div class="swiper-slide">
				<timeCont>
						<img slot="time_img" src="../assets/images/per.png" alt="">
						<h2 slot="time_tittle">常江和非主流电影人们</h2>
						<span slot="time_infor">青年评论家，学者,邪典电影执着的人物</span>	
						<h3 slot="movie_name">邪典电影本纪</h3>
						<span slot="movie_infor">情色暴力的色觉冲击外，探索Cult精神内文化的内核</span>
						<p slot="detail_infor"><i>本期内容：</i><br><span>高智商电影问祖邪典片 | 《化生博士》</span></p>	
				</timeCont>
            </div>            

        </div>
    </div>




	</div>
</template>


<script>

import timeCont from './time_cont'
export default{
	components:{
		timeCont,
	},
	mounted(){
    var swiper = new Swiper('.swiper-container1', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        centeredSlides: true,
        autoplay: false,	
        paginationClickable: true,
        spaceBetween: -67
    });

	}

}

</script>


<style>
.h_tit i{ float: right; font-size: 14px; color: #989898; margin-right: 20px; }
.time_box{ height: 330px; background:#f0f1ec; padding-top: 22px; overflow: hidden; }
.time_main{ height: 281px; width: 73.3%; box-shadow: 0px 1px 9px 2px rgba(0,0,0,0.2); margin-left: 30px; background: #FFF; border-radius: 5px; margin-top: 12px; overflow: hidden; float: left;}
.time_box_top{ height: 69px; background-image: url(../assets/images/live_player_bg.jpg);background-repeat: no-repeat; background-size: 100%; padding-left: 18px; padding-top:15px; border-top-left-radius: 5px; border-top-right-radius: 5px; overflow: hidden; }
.time_tittle{display: block;float: right; margin-right: 55px; margin-top:7px; }
.time_tittle h2{font-size: 14px; color: #FFF; font-weight: 500; }
.time_infor{ display: block; float: right; font-size: 12px; color: #FFF; width: 76%; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; margin-top: 8px; }
.time_img{width: 48px; height: 48px; border: 2px solid #FFF; border-radius: 50%; display: block; float: left;}
.time_img img{ max-width: 100%; }

.time_box_middle{padding-left: 16px; padding-right: 16px;}
.time_box_middle h3{ font-size: 16px; color: #292929; font-weight: bold; line-height: 35px; }
.movie_infor{ font-size: 14px; color: #828282; display: block; padding-bottom: 15px; }
.detail_infor p span{ font-size: 14px; color: #383838; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; width: 90%; display: inline-block; line-height: 25px; }
.detail_infor p i{ font-size: 14px; color: #828282;  }

.time_bottom{ height: 30px; line-height: 30px; width: 87%; border:2px solid #4cb459; border-radius: 5px; margin: 0 auto; text-align: center; font-size: 14px; color:#32b045; margin-top: 15px;}
</style>

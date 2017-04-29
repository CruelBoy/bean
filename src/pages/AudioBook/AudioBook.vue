<template>
	<div>
			<bNav>
				<h2 slot="tittle">广播</h2>
				<img slot="left_icon" src="../../assets/images/ic_status_search_user.png">
				<img slot="right_icon" src="../../assets/images/ic_chat_green.png">
			</bNav>	
			<div class="audio_top">
				<img class="audio_top_bg" src="../../assets/images/ic_status_anonymous_header.png"/>
				<p>发现有趣的人<span>关注他们，发现更大的世界</span></p>
			</div>
			<div class="artical_wrap">			
				<div class="artical_box">
					<span class="close">×</span>
					<i>关注</i>
					<artical>
						<img  slot="a_id" src="../../assets/images/id.png" alt="">
						<span class="a_tittle" slot="a_tittle">阿根廷的蚂蚁</span>
						<p class="a_num" slot="a_num"><span>2286</span>关注</p>
						<p class="a_content" slot="a_content">这是怎样的一座城了，玫瑰代替了篱笆，布满阳台开花的人家。这是怎样的一座城了，玫瑰代替了篱笆，布满阳台开花的人家。这是怎样的一座城了，玫瑰代替了篱笆，布满阳台开花的人家。这是怎样的一座城了，玫瑰代替了篱笆，布满阳台开花的人家。这是怎样的一座城了，玫瑰代替了篱笆，布满阳台开花的人家。</p>
					</artical>
					<div class="a_img"><img src="../../assets/images/ar_bg_07.png"/></div>
				</div>		


				<div class="artical_box">
					<span class="close">×</span>
					<i>关注</i>
					<artical>
						<img  slot="a_id" src="../../assets/images/id.png" alt="">
						<span class="a_tittle" slot="a_tittle">阿根廷的蚂蚁</span>
						<p class="a_num" slot="a_num"><span>2286</span>关注</p>
						<p class="a_content" slot="a_content">这是怎样的一座城了，玫瑰代替了篱笆，布满阳台开花的人家。这是怎样的一座城了，玫瑰代替了篱笆，布满阳台开花的人家。这是怎样的一座城了，玫瑰代替了篱笆，布满阳台开花的人家。这是怎样的一座城了，玫瑰代替了篱笆，布满阳台开花的人家。这是怎样的一座城了，玫瑰代替了篱笆，布满阳台开花的人家。</p>
					</artical>
					<div class="a_img"><img src="../../assets/images/ar_bg_07.png"/></div>
				</div>									
			</div>
			
			<choose>
				<span slot="choose_txt">我选好了</span>
			</choose>


	</div>
</template>



<script>
	import bNav from '../../components/header'
	import artical from '../../components/artical'
	import choose from '../../components/choose'
	export default{
		components:{
			bNav,
			artical,
			choose
		}
	}
</script>

<style>
	.audio_top{ position: relative; padding-top: 75px; padding-left:43.33%; height: 80px; }
	.audio_top_bg{ position:absolute; width: 100px; height: 80px; left:12.66%; top:21px; }
	.audio_top p{ font-size: 19px; color: #454545; font-weight: bold; line-height: 23px; }
	.audio_top p span{ font-size: 14px; color: #989898; font-weight: 0; display:block; }
	.artical_wrap{ padding:0 10px;}
	.artical_box{ position: relative; box-shadow: 3px 3px 5px 7px rgba(115,115,115,0.12), 5px 0 7px rgba(115,115,115,0.12); padding-top: 25px; padding-left: 20%; padding-right: 6.66%; margin-bottom: 20px; padding-bottom: 50px; }
	.artical_box i{ width: 70px; height: 30px; line-height: 30px; text-align: center; background: #42bd56; border-radius: 5px; display: inline-block; font-size: 14px; color: #FFF; position: absolute; right: 32px; top:27px; }
	.artical_box .a_content {font-size: 14px; color: #202020; line-height: 20px; font-weight: 200;}
	.a_tittle{color: #313131; font-size: 16px; font-weight: bold;}
	.a_num{color: #808080; font-size: 14px; height: 30px; line-height: 30px;}
	.a_img{ height: 127px; width: 100%; padding-top: 10px; }
	.a_img img { max-width: 100%; }
	.close{ display: block; color: #cacaca; font-size: 25px; position: absolute; top: 0; right: 20px; }


	.a_id{width: 52px;height: 52px; display: block; position: absolute; left: 8px;}
	.a_id img{ max-width: 100%; }
</style>
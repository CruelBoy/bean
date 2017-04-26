<template>
	<div>
			<bNav>
				<h2 slot="tittle">小组</h2>
				<img slot="left_icon" src="../../assets/images/ic_group_search.png">
				<img slot="right_icon" src="../../assets/images/ic_chat_green.png">
			</bNav>	
			<div class="group_top">
				<p>417788个小组等你来玩</p>
				<span>立即选择加入吧！</span>
			</div>
			<div class="recommendation">
				<p>根据你的兴趣推荐</p>
				<span><img src="../../assets/images/ic_rec_group_banner_6.png" /></span>
				<h3>影视</h3>

				<movie>
					<img slot="movie_img" src="../../assets/images/movie_img_03.png" />	
					<h4 slot="movie_tittle">英剧！英剧!</h4>
					<p slot="movie_intro">看电视来的，别扯别的...</p>
					<span slot="movie_num">1105920人</span>
					<img slot="movie_selected" src="../../assets/images/ic_group_check_anonymous.png" />
				</movie>
			</div>
	</div>
</template>



<script>
	import bNav from '../../components/header'
	import movie from '../../components/movie'
	export default{
		components:{
			bNav,
			movie
		}
	}
</script>


<style>
.group_top{ height:97px; width:100%; background-image:url(../../assets/images/group_03.jpg); background-size:100% 100%; background-repeat:no-repeat; text-align:center; padding-top:50px;}
.group_top p{ font-size:20px; color:#454545; font-weight:bold; }
.group_top span{ font-size:18px; color:#a1a0a2;}
.recommendation{ height:92px; padding:0 3.06%; }
.recommendation p{ color:#919190; font-size:14spx; }
.recommendation span{ display:block; width:100%; height:60px; overflow:hidden; }
.recommendation span img{ max-width:100%; }
.recommendation h3 { height:62px; background-image:url(../../assets/images/hr_03.jpg);background-size:100%; background-repeat:no-repeat;
background-position:0 30px; font-size:18px; color:#272727; font-weight:bold; text-align:center; line-height:62px; }

</style>
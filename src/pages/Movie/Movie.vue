<template>
	<div class="movie_wrap">
		<div class="movie_box">
			<span class="movie_tit" slot='movie_tit'>影院热映<i>更多&nbsp;></i></span>		
			<listMovie></listMovie>
		</div>

		<div class="movie_box">
			<span class="movie_tit" slot='movie_tit'>院线即将上映<i>更多&nbsp;></i></span>		
			<listMovie></listMovie>
		</div>
	</div>	
</template>
<script>

import listMovie from '../../components/list_movie'

export default{

	components:{
		listMovie
	}
}

</script>

<style>
.movie_wrap{ padding-left: 15px; }
.movie_box{overflow: hidden;width: 100%; margin-top: 5px;}
.movie_tit{ height: 67px; line-height: 67px; font-size: 16px; color: #464646; font-weight: bold; }
.movie_tit i{ float: right;	color: #3aba4e; font-size: 14px; margin-right: 18px; }

</style>
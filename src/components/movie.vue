<template>
	<div class="movie">
		<span class="movie_img"><slot name="movie_img"></slot></span>
		<slot name="movie_tittle"></slot>
		<slot name="movie_intro"></slot>
		<slot name="movie_num"></slot>
		<slot name="movie_selected"></slot>
	</div>
</template>

<script>
	export default{
	}
</script>

<style>
.movie{ height:50px;}
.movie .movie_img{ height:50px; }
.movie_img img { max-height:100%;}
</style>
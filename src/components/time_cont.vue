<template>
	<div class="time">
		<div class="time_main">
			<div class="time_box_top">
				<span class="time_tittle"><slot name="time_tittle"></slot></span>
				<span class="time_img"><slot name="time_img"></slot></span>
				<span class="time_infor"><slot name="time_infor"></slot></span>
			</div>						
			<div class="time_box_middle">
				<span><slot name="movie_name"></slot></span>
				<span class="movie_cont"><slot name="movie_cont"></slot></span>
				<span class="movie_infor"><slot name="movie_infor"></slot></span>
				<span class="detail_infor"><slot name="detail_infor"></slot></span>
			</div>
			
			<div class="time_bottom">查看专栏</div>
		</div>

	</div>
</template>


<style>
.time{float: left;}

</style>
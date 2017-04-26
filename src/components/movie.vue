<template>
	<div class="movie clearfix">
		<dl>
			<dt>
				<slot name="movie_img"></slot>
			</dt>
			<dd>
				<slot name="movie_tittle"></slot>
				<span class="movie_intro"><slot name="movie_intro"></slot></span>				
			</dd>

			<dd class="last_dd">
				<span class="movie_num"><slot name="movie_num"></slot></span>
				<span class="movie_selected"><slot name="movie_selected"></slot></span>
			</dd>	

		</dl>
		

		
		
	</div>
</template>

<script>
	export default{
	}
</script>

<style>
.movie{ height:50px; margin-bottom:30px; }
.movie dt,.movie dd{ float:left; }
.movie dt{ height:50px; margin-right:2.66%;}
.movie dt img { max-height:100%;}
.movie h4{ font-size:20px; color:#444444; font-weight:bold; margin-top:6px; white-space:nowrap; text-overflow:ellipsis;overflow:hidden; }
.movie .movie_intro{ font-size:14px; color:#929292; }
.movie dl dd .movie_selected{ display:block; width:32px; height:32px; margin-top:12px; float:right; margin-left:10px; }
.movie .movie_num{ font-size:14px; color:#c6c6c6; height:50px; line-height:50px; float:left;}
.movie .movie_selected img{ max-width:100%; }
.movie dl .last_dd{ float:right;}
</style>
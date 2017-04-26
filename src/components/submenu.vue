<template>
	<div>
		<div class="floor_one clearfix">
			<Submenu_child>
				<img slot="submenu_icon" src="../assets/images/ic_my_likes.png" />
				<span slot="submenu_tittle">喜欢</span>
			</Submenu_child>
			<Submenu_child>
				<img slot="submenu_icon" src="../assets/images/ic_my_note.png" />
				<span slot="submenu_tittle">日记</span>
			</Submenu_child>
			<Submenu_child>
				<img slot="submenu_icon" src="../assets/images/ic_my_album.png" />
				<span slot="submenu_tittle">相册</span>
			</Submenu_child>
			<Submenu_child>
				<img slot="submenu_icon" src="../assets/images/ic_my_status.png" />
				<span slot="submenu_tittle">我的广播</span>
			</Submenu_child>								
		</div>

		<div class="floor_one clearfix">
				<Submenu_child>
					<img slot="submenu_icon" src="../assets/images/ic_my_movies_tvs.png" />
					<span slot="submenu_tittle">电影•电视</span>
				</Submenu_child>
				<Submenu_child>
					<img slot="submenu_icon" src="../assets/images/ic_my_books.png" />
					<span slot="submenu_tittle">读书</span>
				</Submenu_child>
				<Submenu_child>
					<img slot="submenu_icon" src="../assets/images/ic_my_music.png" />
					<span slot="submenu_tittle">音乐</span>
				</Submenu_child>
				<Submenu_child>
					<img slot="submenu_icon" src="../assets/images/ic_my_events.png" />
					<span slot="submenu_tittle">同城活动</span>
				</Submenu_child>								
		</div>		

		<div class="floor_one clearfix">
				<Submenu_child>
					<img slot="submenu_icon" src="../assets/images/ic_my_movies_tvs.png" />
					<span slot="submenu_tittle">豆瓣时间</span>
				</Submenu_child>
				<Submenu_child>
					<img slot="submenu_icon" src="../assets/images/ic_my_doulist.png" />
					<span slot="submenu_tittle">豆列</span>
				</Submenu_child>
				<Submenu_child>
					<img slot="submenu_icon" src="../assets/images/ic_my_orders.png" />
					<span slot="submenu_tittle">订单</span>
				</Submenu_child>
				<Submenu_child>
					<img slot="submenu_icon" src="../assets/images/ic_my_wallet.png" />
					<span slot="submenu_tittle">钱包</span>
				</Submenu_child>								
		</div>	

	</div>
</template>

<script>
	import Submenu_child from './submenu_child'
	export default{
		components:{
			Submenu_child,
		}
	}
</script>

<style>
.floor_one{ height:104px; border-bottom:1px solid #e6e6e6;}
</style>
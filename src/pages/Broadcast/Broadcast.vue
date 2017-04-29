<template>
	<div>
		<bNav>
			<h2 slot="tittle">书影音</h2>
			<img slot="left_icon" src="../../assets/images/ic_group_search.png">
			<img slot="right_icon" src="../../assets/images/ic_chat_green.png">
		</bNav>	
		<bSubNav></bSubNav>
	</div>
</template>



<script>
	import bNav from '../../components/header'
	import bSubNav from '../../components/broad_nav'
	import mMovie from '../Movie/Movie'
	export default{

		components:{
			bNav,
			bSubNav
		}
	}
</script>
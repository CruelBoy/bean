<template>
	<div>
			<bNav>
				<h2 slot="tittle">广播</h2>
				<img slot="left_icon" src="../../assets/images/ic_status_search_user.png">
				<img slot="right_icon" src="../../assets/images/ic_chat_green.png">
			</bNav>	
	</div>
</template>



<script>
	import bNav from '../../components/header'
	export default{
		components:{
			bNav,
		}
	}
</script>
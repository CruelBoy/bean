<template>
	<div>
		<bNav>
			<h2 slot="tittle">书影音</h2>
			<img slot="left_icon" src="../../assets/images/ic_group_search.png">
			<img slot="right_icon" src="../../assets/images/ic_chat_green.png">
		</bNav>	
		<bSubNav @sendmark='getmark' :val='selected'></bSubNav>
	</div>
</template>



<script>
	import bNav from '../../components/header'
	import bSubNav from '../../components/broad_nav'
	export default{
		data(){
			return{
				selected: 'item1',
			}
		},
		methods:{
			getmark:function(val){
				this.selected = val 
				console.log(val)
			}
		},
		components:{
			bNav,
			bSubNav
		}
	}
</script>
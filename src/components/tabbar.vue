<template>
	<div class="foot_tabbar">
		<TabbarChild mark='index' v-model='selected' :val='selected'>
			<img slot="bar_img" src="../assets/images/ic_tab_home_normal.png">
			<img slot="active_img" src="../assets/images/ic_tab_home_active.png">
			<span slot="bar_txt">首页</span>
		</TabbarChild>
		<TabbarChild mark='broadcast' v-model='selected' :val='selected'>
			<img slot="bar_img" src="../assets/images/ic_tab_subject_normal.png">
			<img slot="active_img" src="../assets/images/ic_tab_subject_active.png">
			<span slot="bar_txt">书影音</span>
		</TabbarChild>
		<TabbarChild mark='audioBook' v-model='selected' :val='selected'>
			<img slot="bar_img" src="../assets/images/ic_tab_status_normal.png">
			<img slot="active_img" src="../assets/images/ic_tab_status_active.png">
			<span slot="bar_txt">广播</span>
		</TabbarChild>
		<TabbarChild mark='group' v-model='selected' :val='selected'>
			<img slot="bar_img" src="../assets/images/ic_tab_group_normal.png">
			<img slot="active_img" src="../assets/images/ic_tab_group_active.png">
			<span slot="bar_txt">小组</span>
		</TabbarChild>
		<TabbarChild mark='mine' v-model='selected' :val='selected'>
			<img slot="bar_img" src="../assets/images/ic_tab_profile_normal.png">
			<img slot="active_img" src="../assets/images/ic_tab_profile_active.png">
			<span slot="bar_txt">我的</span>
		</TabbarChild>								
	</div>
</template>


<script>
	import TabbarChild from './tabbar-child'
	export default{
		data(){
			return{
				selected:'index',
			}
		},
		components:{
			TabbarChild,
		}
	}
</script>


<style>

.foot_tabbar{ width:100%; position:fixed; bottom:0; left:0; overflow:hidden; background:#f7f7f7; border-top:1px solid #e1dfe0; height:64px; z-index:1000; }
</style>
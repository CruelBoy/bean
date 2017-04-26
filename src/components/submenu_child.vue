<template>
	<div class="submenu">
		<span class="submenu_icon"><slot name="submenu_icon"></slot></span></br>
		<span class="submenu_tittle"><slot name="submenu_tittle"></slot></span>
	</div>
</template>

<script>
	export default{
		components:{
			
		}
	}
</script>

<style>
	.submenu{ width:25%; height:78px; text-align:center; float:left; padding-top:25px; }
	.submenu_icon{ width:32px; height:32px; display:inline-block; }
	.submenu_tittle{ display:inline-block; font-size:18px; color:#383838; height:32px; line-height:32px; }
	.submenu_icon img { max-width:100%; }
</style>
<template>
	<div class="footer" @click='turn'>
		<span class="bar_img" v-show='!isActive'><slot name='bar_img'></slot></span>  
		<span class="bar_img" v-show='isActive'><slot name='active_img'></slot></span>  
		<slot name='bar_txt'></slot>   
	</div>
</template>




<script>

export default{	
	props: ['mark','val'],
	methods: {	
		turn:function(){
			console.log(this.mark)
			console.log(this.val)
			this.$router.push(this.mark)
			this.$emit('input',this.mark)
		}
	},
	computed:{
		isActive(){
			if(this.mark==this.val){
				return true
			}
			
		}
	}
}
</script>


<style>
.footer{ float:left; width:20%; padding-top:5px; padding-bottom:5px;}
.footer .bar_img{ width:32px; display:inline-block; }
.footer img{ max-width:100%; }
.footer { text-align:center; }
.footer span{ display:block; font-size:12px; color:#969696; text-decoration:none; }
</style>
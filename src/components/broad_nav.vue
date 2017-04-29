<template>
	<div class="broad_box" id="broad_box">
		<ul>
			<li class="ac"><router-link to='/broadcast/movie'>电影</router-link></li>
			<li><router-link to='/broadcast/book'>读书</router-link></li>
			<li><router-link to='/broadcast/television'>电视</router-link></li>
			<li><router-link to='/broadcast/citywide'>同城</router-link></li>
			<li><router-link to='/broadcast/music'>音乐</router-link></li>
		</ul>
		<div class="broad_content">
			<router-view></router-view>
		</div>
	</div>
</template>


<script>


export default{


}
</script>

<script type="text/javascript">
 window.onload=function(){
 	var oBroadBox = document.getElementById('broad_box');
 	var aLi = oBroadBox.getElementsByTagName('li');
 	for (var i = 0; i < aLi.length; i++) { 		
 		aLi[i].onclick=function(){
 			for (var j = 0; j < aLi.length; j++) {
 				aLi[j].className="";
 			}
 			this.className='ac';
 		}
 	}
 }
</script>


<style>
.broad_box ul { width:100%; border-bottom: 1px solid #e8e8e8; height: 40px; line-height: 40px;}
.broad_box ul li{ float: left;  width: 20%; text-align: center; }
.broad_box li a{ font-size: 16px; color: #909090; }
.ac{ border-bottom: 2px solid #68cb78; }
</style>
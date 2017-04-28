<template>
	<div class="nav">
		<span class="nav_icon1"><slot name="left_icon"></slot></span>
		<span class="nav_icon2"><slot name="right_icon"></slot></span>
		<span class="nav_tittle"><slot name="tittle"></slot></span>
	</div>
</template>

<style>
.nav{ width:100%; height:48px; position:fixed; top:0; left:0; border-bottom:1px solid #bfbfbf; text-align:center; line-height:48px; background:#FFF; z-index:20;}
.nav .nav_tittle h2 {color:#464646; font-size:18px; font-weight:bold; }
.nav .nav_icon1{ position:absolute; width:32px; height:32px; right:18.6%; top:8px; }
.nav .nav_icon2{ position:absolute; width:32px; height:32px; right:5.3%; top:8px; }
.nav .nav_icon1 img { max-width:100%; }
.nav .nav_icon2 img { max-width:100%; }
</style>
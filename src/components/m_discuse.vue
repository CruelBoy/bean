<template>
	<div class="m_discuse_box">
		<span class="m_discuse_img"><slot name="m_discuse_img"></slot></span>
		<span class="m_discuse_tittle"><slot name="m_discuse_tittle"></slot></span>
		<p>暂无评论</p>
	</div>
</template>


<style>
.m_discuse_box{ float: left; overflow: hidden; }
.m_discuse_img{ display: block; width: 99px; height: 138px; }
.m_discuse_img img{ max-width: 100%; }
.m_discuse_tittle{ font-size: 14px; color: #494949; font-weight: bold; line-height: 24px; }
.m_discuse_box p{ font-size: 12px; color: #9b9b9b;  }
</style>
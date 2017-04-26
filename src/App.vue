<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/tabbar'
export default {
  name: 'app',
  components:{
      Tabbar,
  }
}
</script>

<style>
  *{ margin:0; padding:0; }
  body,p,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,input,textarea{padding:0;margin:0;}
  body{ padding-top:48px; padding-bottom:64px; }
  ul,ol,li{list-style:none;}
  table { border-collapse:collapse; border-spacing:0;}
  h1,h2,h3,h4,h5,h6{font-size:100%;font-weight: normal;}
  a{text-decoration:none;cursor: pointer;}
  img,input{border:none;}
  i{font-style:normal;}
  strong{font-weight: normal;}
  .clearfix::after{content: "";display: block;visibility: hidden;clear: both;}
  .clearfix{*zoom:1;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

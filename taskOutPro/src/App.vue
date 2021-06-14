<template>
  <div id="app">
    <div id="footer">
    <van-tabbar v-model="active" route fixed safe-area-inset-bottom>
    <van-tabbar-item icon="home-o" replace to="/">主页</van-tabbar-item>
    <van-tabbar-item icon="search" replace to="/search">搜索</van-tabbar-item>
    <van-tabbar-item icon="bill-o" replace to="/orderform">订单</van-tabbar-item>
    <van-tabbar-item icon="friends-o" replace to="/mycount">我的</van-tabbar-item>
    
    </van-tabbar>
    </div>
    
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      active:0
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#footer{
  padding: 0;
}
</style>

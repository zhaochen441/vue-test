<template>
    <div>
        我的
        <div id="footer">
    <van-tabbar v-model="active" route>
    <van-tabbar-item icon="home-o" replace to="/">主页</van-tabbar-item>
    <van-tabbar-item icon="search" replace to="/search">搜索</van-tabbar-item>
    <van-tabbar-item icon="bill-o" replace to="/orderform">订单</van-tabbar-item>
    <van-tabbar-item icon="friends-o" replace to="/mycount">我的</van-tabbar-item>
    </van-tabbar>
    </div>
    </div>
</template>
<script>
export default {
    name:"mycount",
    data(){
        return{
            active:0
        }
    }
}
</script>
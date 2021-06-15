<template>
    <div>
    <h3>订单列表</h3>
        <van-tabs v-model="active">
            <van-tab title="外卖订单">内容 1</van-tab>
            <van-tab title="待评价">内容 2</van-tab>
            <van-tab title="退款">内容 3</van-tab>
            <van-tab title="其他订单">内容 4</van-tab>
        </van-tabs>
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
    name:"orderfrom",
    data(){
        return{
            active:"0"
        }
    }
}
</script>
<style>
    h3{
        text-align: center;
    }
</style>
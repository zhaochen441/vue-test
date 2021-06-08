<template>
    <div>
    <h3>订单列表</h3>
        <van-tabs v-model="active">
            <van-tab title="外卖订单">内容 1</van-tab>
            <van-tab title="待评价">内容 2</van-tab>
            <van-tab title="退款">内容 3</van-tab>
            <van-tab title="其他订单">内容 4</van-tab>
        </van-tabs>
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
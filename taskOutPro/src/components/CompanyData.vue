<template>
    <div>
        <van-nav-bar
        title="商家详情"
        left-text="返回"
        left-arrow
        @click-left="to"
        />
        <van-row gutter="20">
        <van-col span="8"></van-col>
        <van-col span="8">
            <van-image
            width="120"
            height="120"
            :src="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+this.datalist.photo"
            />
        </van-col>
        <van-col span="8"></van-col>
        </van-row>
        <div id="title">
            <span>{{datalist.goodsScore}}评分</span>
            <span>月销{{datalist.sales}}</span>
            <span>约{{ datalist.deliveryTime }}分钟</span>
            <span>距离{{ datalist.distance }}米</span>
        </div>
        
            <van-action-sheet v-model="show" title="标题">
            <div class="content">内容</div>
            </van-action-sheet> 
       
    </div>
</template>
<script>
export default {
    name:"companydata",
    props:['id'],
    data(){
        return{
            topic:"",
            datalist:"",
            show:false
        }
    },

    methods:{
        to(){
            this.$router.go(-1)
        }
    },
    beforeRouteEnter(to,from,next){
        next(function(vm){
            vm.$http.get("/biz/queryInfoByShopId?shopId="+vm.id).then(function(res){
                console.log(res.data)
                vm.datalist=res.data
            })
        })
    },
    beforeRouteUpdate(to,from,next){
        var that=this
        that.$http.get("/biz/queryInfoByShopId?shopId="+that.id).then(function(res){
                console.log(res.data)
                that.datalist=res.data
            })
            next()
    },
    created(){
        var that=this
        this.$http.get("/biz/queryFoodCategory?id="+this.id).then(function(res){
            console.log(res.data)
            that.topic=res.data
        })
    }
}
</script>
<style>
#title{
    text-align: center;
    font-size: 10px;
    margin-top: 20px;
}
.content {
    padding: 16px 16px 160px;
  }
</style>
<template>
    <div>
        搜索
        <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        input-align="center"
        @search="onsearch"
        @cancel="oncancel"
        />
        <div v-if="set==null">
            <a :href="'/#/companydata/'+1">
                <van-card v-for="item in context" :key="item.id"
        num="2"
        :price="item.minPrice"
        :desc="item.notice"
        :title="item.name"
        :thumb="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+item.photo"
        >
        <template #tags>
            <van-rate v-model="item.goodsScore" readonly/>
            <van-tag plain type="danger">月销量：{{ item.sales }}</van-tag>
        </template>
        </van-card>
            </a>
        
        </div>
        <div>
            <a :href="'/#/companydata/'+1">
        <van-card v-for="item in content" :key="item.id"
                num="2"
                :price="item.minPrice"
                :desc="item.notice"
                :title="item.name"
                :thumb="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+item.photo"
                >
                <template #tags>
                    <van-rate v-model="item.goodsScore" readonly/>
                    <van-tag plain type="danger">月销量：{{ item.sales }}</van-tag>
                </template>
                </van-card>
            </a>
            
        </div>
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
    name:"search",
    data(){
        return{
            value:null,
            content:'',
            context:"",
            set:null,
            active:0
        }
    },
    methods:{
        onsearch(val){
            var app=this
            console.log(val)
            this.$http.get("/biz/queryAllShopsInfoByName?name="+val).then(function(res){
                console.log(res.data)
                if(res.status==200){
                    app.content=res.data
                    app.set=1
                }
            })
        },
        oncancel(){
            this.set=null   
        }
    },
    created(){
        var app= this
        this.$http.get("/biz/queryAllShopsInfo").then(function(res){
          console.log(res.data)
          app.context=res.data
       
      })
    }
}
</script>
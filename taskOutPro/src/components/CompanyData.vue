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
            <van-card id="card">
                <template #tags>
                    <van-tag plain type="danger" id="biaoqian">品牌</van-tag>
                    &nbsp;&nbsp;&nbsp;
                    <span>{{datalist.name}}</span>
                    <br>
                    <span>{{datalist.goodsScore}}评分</span>
                    <span>月销{{datalist.sales}}</span>
                    <span>约{{ datalist.deliveryTime }}分钟</span>
                    <span>距离{{ datalist.distance }}米</span>
                    
                    <div> 
                        <van-cell is-link @click="showPopup" >
                            <span v-for="item in tag" :key="item.contents" class="youhuijuan">{{item.tag}}{{item.contents}}&nbsp;</span>
                        
                        </van-cell>
                        <van-popup v-model="show" position="bottom" :style="{ height: '30%' }" />
                    </div>
                </template>
            </van-card>
            
            <van-action-sheet v-model="show" title="优惠卷">
                <div class="content"></div>
            </van-action-sheet>
        </div>
        <van-tabs v-model="active" @click="tabclick">
                <van-tab title="点餐">
                    <van-sidebar v-model="activeKey" class="left">
                    <van-sidebar-item :title="item.name" v-for="item in topic" :key="item.id" @click="fenlei(item.id)" id="diancan"/>
                    </van-sidebar>
                </van-tab>
                <van-tab title="评价">
                    <div>
                        <b>4.5</b>
                        <p>综合评分</p>
                        <span>高于周边商家99%</span>
                    </div>
                </van-tab>
                <van-tab title="商家">商家</van-tab>
            </van-tabs>
            <!-- 商家食品渲染 -->
            <div v-if="this.set==0">
                <div class="right" v-for="item in shopfood" :key="item.id">
                <a href="#">
                     <van-card class="zsize"
                    num="2"
                    price="2.00"
                    :desc="item.info"
                    :title="item.name"
                    :thumb="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+item.photo"
                    >
                    </van-card>
                </a>      
             </div>
            </div>
            <!-- 评价列表渲染 -->
             
    </div>
</template>
<script>
export default {
    name:"companydata",
    props:['id'],
    data(){
        return{
            //商家介绍
            topic:"",
            //商家距离好评等
            datalist:"",
            show:false,
            //商家分类信息
            tag:"",
            active:"",
            activeKey:0,
            alldata:"",
            shopfood:"",
            set:0
        }
    },

    methods:{
        tabclick:function(name,val){
            this.set=name
            if(name==1){
                this.$http.get("/biz//queryCommentByShopId?shopId="+this.id).then(function(res){
                    console.log(res.data)
                })
            }
        },
        showPopup() {
      this.show = true;
    },
        to(){
            this.$router.go(-1)
        },
        fenlei(val){
            var that=this
            this.$http.get("biz/queryFoodinfoByShopIdAndFoodCategoryId?shopId="+this.id+"&foodcategoryId="+val).then(function(res){
                console.log(res.data)
                that.shopfood=res.data
            })
        }   
    },
    beforeRouteEnter(to,from,next){
        next(function(vm){
            vm.$http.get("/biz/queryInfoByShopId?shopId="+vm.id).then(function(res){
                console.log(res.data)
                vm.datalist=res.data
            })
            //商家分类信息
            vm.$http.get("/biz/queryFoodCategory?id="+vm.id).then(function(res){
            console.log(res.data)
            vm.topic=res.data
            //分类查询商品
            var id=res.data[0].id
             vm.$http.get('biz/queryFoodinfoByShopIdAndFoodCategoryId?shopId='+vm.id+'&foodcategoryId='+id).then(function(res){
                console.log(res.data)
                //赋值给shopfood
                vm.shopfood=res.data
            })
            
        })
        
        })
    },
    beforeRouteUpdate(to,from,next){
        var that=this
        that.$http.get("/biz/queryInfoByShopId?shopId="+that.id).then(function(res){
                console.log(res.data)
                that.datalist=res.data
            })
            //商家分类信息
            that.$http.get("/biz/queryFoodCategory?id="+that.id).then(function(res){
            console.log(res.data)
            that.topic=res.data
            //分类查询商品信息
            var id=res.data[0].id
             that.$http.get('biz/queryFoodinfoByShopIdAndFoodCategoryId?shopId='+that.id+'&foodcategoryId='+id).then(function(res){
                console.log(res.data)
                //赋值给shopfood
                vm.shopfood=res.data
            })
        })
        //分类查询商品

            next()
    },
    created(){
        var that=this
        //优惠券
        this.$http.get("/biz/querySpecialOfferByShopId?shopId="+this.id).then(function(res){
            console.log(res.data)
            that.tag=res.data
        })
    }
}
</script>
<style>
#title{
    text-align: center;
    font-size: 10px;
}
.content {
    padding: 16px 16px 160px;
  }
  #card{
      background: white;
  }
 #biaoqian{
     background-color: yellow;
 }
 .left{
     float: left;
 }
 .right span{
     font-size: 12px;
 }

 .zsize{
     position: static;
     
 }
 #diancan{
     margin-top: 10px;
 }
</style>
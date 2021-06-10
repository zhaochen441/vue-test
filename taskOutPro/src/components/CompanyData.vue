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
        <van-tabs v-model="active" >
                <van-tab title="点餐">
                    <van-sidebar v-model="activeKey" class="left">
                    <van-sidebar-item :title="item.name" v-for="item in topic" :key="item.id" @click="fenlei(item.id)"/>
                    </van-sidebar>
                    
                </van-tab>
                <van-tab title="评价">评价</van-tab>
                <van-tab title="商家">商家</van-tab>
            </van-tabs>
            <div class="right">
                        
                       
                
                        
                        
             </div>
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
            show:false,
            tag:"",
            active:"",
            activeKey:0,
            alldata:"",
            footid:""
        }
    },

    methods:{
        showPopup() {
      this.show = true;
    },
        to(){
            this.$router.go(-1)
        },
        fenlei(val){
            this.$http.get("biz/queryFoodinfoByShopIdAndFoodCategoryId?shopId="+this.id+"&foodcategoryId="+val).then(function(res){
                console.log(res.data)
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
            vm.footid=res.data[0].id
            console.log("商家分类id="+vm.footid)
            
        })
        //分类查询商品
        vm.$http.get('biz/queryFoodinfoByShopIdAndFoodCategoryId?shopId='+vm.id+'&foodcategoryId='+vm.footid[0]).then(function(res){
             console.log("保存的分类id="+vm.footid)
           console.log(res.data)
           vm.alldata=res.data
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
            that.footid=res.data[0].id
        })
        //分类查询商品
        that.$http.get("biz/queryFoodinfoByShopIdAndFoodCategoryId?shopId="+that.id+"&foodcategoryId="+that.footid[0]).then(function(res){
        
          
           that.alldata=res.data
       })
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
</style>
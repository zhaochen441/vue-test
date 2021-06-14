<template>
          <div>
              <van-nav-bar
                title="标题"
                left-text="返回"
                right-text="登录/注册"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
                />
              <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                  <!-- 轮播效果 -->
            <van-swipe-item v-for="(item,index) in 2" :key="index">
                <!-- 九宫格显示分类 -->
                <van-grid>
                <van-grid-item v-for="(item,index) in toplists" :key="index" :icon="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+item.photo" :text="item.name" />                
                </van-grid>
            </van-swipe-item>
            </van-swipe>
            <!-- 显示所有商家 -->
            <div >
                <van-icon name="wap-nav"/>
                <span>附近商家</span>
            </div>
       <a :href="'/#/companydata/'+item.id" v-for="item in context" :key="item.id" @click="sjdata">
        <van-card 
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

    <!-- <van-tabbar v-model="active" route fixed>
    <van-tabbar-item icon="home-o" replace to="/">主页</van-tabbar-item>
    <van-tabbar-item icon="search" replace to="/search">搜索</van-tabbar-item>
    <van-tabbar-item icon="friends-o" replace to="/mycount">我的</van-tabbar-item>
    <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
    </van-tabbar> -->
      </div>  
</template>
<script>
import { Card ,Tabbar, TabbarItem,Swipe, SwipeItem, Grid, GridItem ,NavBar } from 'vant';
import { mapMutations } from 'vuex'
export default {
    name:"home",
    data() {
    return {
      active: 0,
      toplists:null,
      list: "",
      loading: false,
      finished: false,
      context:null,
    };
  },

  computed:{

  },
  components:{
      
      Card ,Tabbar, TabbarItem,Swipe, SwipeItem, Grid, GridItem,NavBar 
  },
  beforeRouteEnter(to,from,next){
      next(function(vm){
          
          //获取下方全部商家
      vm.$http.get("/biz/queryAllShopsInfo").then(function(res){
          console.log(res.data)
          vm.context=res.data
      })
      })
  },
   beforeRouteUpdate(to, from, next) {
        var app= this
         this.$http.get("/biz/queryAllShopsInfo").then(function(res){
          console.log(res.data)
          app.context=res.data
      })
      next()
  },
  created(){
      //获取顶部九宫格分类
      var app= this
      this.$http.post("/biz/queryBigCategory").then(function(res){
          console.log(res.data)
          app.toplists=res.data;
      })
      
  },
  methods:{
      ...mapMutations(['mutationsshangjiadata']),
      onClickLeft:function(){
          console.log("ok")
      },
      onClickRight:function(){
          console.log("ok1")
          this.$router.push("login")
      },
      sjdata(){
          this.mutationsshangjiadata(this.context)
      }
  }
}
</script>
<style>
</style>
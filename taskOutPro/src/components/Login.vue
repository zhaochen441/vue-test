<template>
    <div>
        <h2>硅谷外卖</h2>
        <div>
            <van-tabs @click="onClick">
            <van-tab title="登录">
                 <van-form @submit="onSubmit" >
        <van-field
            v-model="username"
            
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password"
            type="password"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        >
        </van-field>
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
        </van-form>
            </van-tab>
            <van-tab title="注册">

            </van-tab>
            </van-tabs>
        </div>
       
    </div>
</template>
<script>
export default {
    name:"login",
    data(){
        return{
            username: '',
            password: '',
             switchChecked: false,
        }
    },
    methods:{
        onSubmit(values) {
      console.log('submit', values);
    },
    onClick(name,title){
        console.log(title)
    }
  },
    
}
</script>
<style>
h2{
    text-align: center;
}
</style>

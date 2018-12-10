<template>
<div>
  <Header title="网易严选"/>
  <div class="logiContent">
    <div class="logiWrap" :class="{paddingTop:isIDLogin||isIphoneLogin}">
      <img src="./img/logo.png" alt="" :class="{imgWith:isIDLogin||isIphoneLogin}">
    </div>
    <div class="input" v-if="isIDLogin ">
      <div class="registerWrap">
        <div class="importID">
        <span class="ID">邮箱账号</span><input type="text" class="IDText">
      </div>
      <div class="importPwd">
        <span class="pwd">密码</span><input type="password" class="password">
      </div>
      <div class="btnRegister">
        <span class="register">注册账号</span>
        <span class="forgetPwd">忘记密码</span>
      </div>
      </div>
  </div>
    <div class="input" v-if="isIphoneLogin ">
      <div class="registerWrap">
        <div class="importID">
          <span class="ID">输入手机号码</span><input v-model="phone" type="text" class="IDText">
        </div>
        <div class="importPwd">
          <span class="pwd">获取验证码</span>
          <input v-model="authCode" type="password" class="password">
          <div class="pcbtn f-fl">
            <button href="javaScript:;"  :disabled="!isRightPhone || computeTime>0"
               :class="{right_phone_number: isRightPhone}" @click="sendCode"
            >{{computeTime>0 ? `已发送（${computeTime}s）` : `获取验证码`}}</button>
          </div>
        </div>
        <div style="color: deeppink" class="tishi" v-if="isRightPhone">该手机号码还没有注册</div>
        <div class="btnRegister">
          <span class="register">遇到问题</span>
          <span class="forgetPwd">使用密码验证登录</span>
        </div>
      </div>
    </div>
    <div class="btnWarp" >
      <div class="w-button">
        <i class="iconfont icon-zhikeshuma-" v-show="!isIDLogin"></i>
        <span @click="handleIphoneLogin">{{isIDLogin?"登陆":"手机号码登录"}}</span>
      </div>
      <div class="w-button login">
        <i class="iconfont icon-youxiang" v-show="!isIDLogin"></i>
        <span @click="loginWay">{{isIDLogin?'其他方式登陆':'邮箱帐号登录'}}</span>
      </div>
      <div class="btn" v-show="!isIDLogin&&isIphoneLogin">
        <span>{{isIphoneLogin?'注册账号':'手机号快捷注册'}}</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
    </div>
    <div v-show="!isIDLogin&&!isIphoneLogin" class="thirdWrap">
      <div class="itemWrap">
        <span class="item">
          <i class="iconfont icon-weixin1"></i>
          <span class="name">微信</span>
        </span>
      </div>
      <div class="itemWrap">
        <span class="item">
          <i class="iconfont icon-qq"></i>
          <span class="name">QQ</span>
        </span>
      </div>
      <div class="itemWrap">
        <span class="item endItem">
          <i class="iconfont icon-weibo"></i>
          <span class="name">微博</span>
        </span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import { Toast, MessageBox } from 'mint-ui'
  import {reqSendCode,reqLogin,reqPwdLogin} from '../../api'

  export default {
    name: "PersonalCenter",
    data(){
      return{
        isIDLogin:false,
        isIphoneLogin:false,
        phone:'',
        authCode:'',
        computeTime:0
      }
    },
    computed : {
      //判断phone是否是一个正确的手机号
      isRightPhone(){
        return /^1\d{10}$/.test(this.phone)
      }
    },

    methods:{
      handleIphoneLogin(){
        this.isIDLogin = false
        this.isIphoneLogin = true
      },

      loginWay(){
        this.isIDLogin = true
        this.isIphoneLogin = false
      },

      // 请求发送短信验证码
      async sendCode(){
        //开启倒计时
        this.computeTime = 30
        //循环定时器
        const intervalId = setInterval(() => {
          //时间减1
          this.computeTime--
          //一旦时间到了0，停止计时
          if(this.computeTime===0){
            this.computeTime = 0
            clearInterval(intervalId)
          }
        },1000)

        //发送ajax
        const result = await reqSendCode(this.phone)
        if(result.code === 0){  //发送验证码成功
          // alert('发送验证码成功')
          Toast('发送验证码成功')
        } else { // 失败了
          // 停止定时器
          this.computeTime = 0
          // alert('发送验证码失败')
          MessageBox.alert('发送验证码失败')
        }

      }
    }
  }
</script>

<style scoped lang="stylus">
.logiContent
  .logiWrap
    text-align: center;
    padding-top: 2.13333rem;
    padding-bottom: 2.13333rem;
    img
      width: 5.57333rem;
  .btnWarp
    padding: 0 .53333rem;
    margin-bottom: 2.73333rem;
    .w-button
      margin-bottom: .42667rem;
      border-radius: 2px;
      display: block;
      width: 100%;
      height: 1.25333rem;
      line-height: 1.25333rem;
      font-size: .57333rem;
      border: 1px solid #b4282d;
      background-color: #B4282B;
      text-align center
      >i
        margin-right: .21333rem;
        position: relative;
        top: -.02667rem;
        font-size .65rem
        color white
      >span
        line-height: 1.25333rem;
        color: #fff;
    .login
      margin-bottom: .42667rem;
      border-radius: 2px;
      background-color: transparent;
      >span
        color #B4282B
      >i
        font-size .6rem
        color #B4282B
    .btn
      color: #333;
      font-size: .37333rem;
      text-align: center;
      width: 100%;
      >i
        margin-right: .21333rem;
        position: relative;
        top: -.02667rem;
        margin-left: .05333rem;
        font-size .35rem
  .thirdWrap
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 1.06667rem;
    height: .53333rem;
    text-align: center;
    .itemWrap
      height: .83333rem;
      display: inline-block;
      text-align: center;
      .item
        height: .83333rem;
        border-right: 1px solid #979797;
        display: inline-block;
        text-align: center;
        padding: 0 .53333rem;
        i
          position: relative;
          top: .13333rem;
          display: inline-block;
          font-size: .53333rem;
        .name
          font-size: .37333rem;
          line-height: .53333rem;
          height: .53333rem;
          color: #7F7F7F;
          margin-left: .06667rem;
      .endItem
        border-right: 0;

.input
  width 100%
  display flex
  flex-direction column
  .registerWrap
    /*width 100%*/
    padding 0 .38rem
    .importPwd
      position relative
    >div
      /*width 100%*/
      /*padding 0 .38rem*/
      height 1rem
      display flex
      border-bottom solid 1px gray
      margin-bottom 0.2rem
      input
        box-shadow: none;
        outline: none
        width 7rem
        height 1rem
        padding-left 0.2rem
      span
        font-size 0.35rem
        color gray
        line-height 1rem
    .btnRegister
      border-bottom 0
      display flex
      justify-content space-between
      >span
        padding 0 0.3rem
        font-size 0.38rem
.imgWith
  width 2.57333rem!important
.paddingTop
  padding-top .53333rem!important

.pcbtn
  position: absolute;
  right: 0.22rem;
  top: 0.3rem;
  z-index: 100;
  display: inline-block;
  margin-left: 10px;
  vertical-align: top

.m-cnt .pcbtn a:active {
    background-color: #f4f4f4;
  }

button
  display: block;
  width: 2.3rem;
  height: 0.75rem;
  text-align: center;
  font-size .3rem
  color: #333;
  background: #fff;
  line-height: 0.75rem;
  border: 1px solid #7F7F7F;
  border-radius: 4px;
</style>

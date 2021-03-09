<template>
  <div id="wrapper">
    <div class="wra_left">
      <div class="war_logo">
        <img src="../assets/QQlogo.png" alt="QQMusic">
      </div>
      <!-- 左侧列表组件 -->
      <warLeftList @childFn="parentFn"></warLeftList>
    </div>
    <div class="war_right">
      <div class="myheader">
        <!-- 头部菜单组件 -->
        <myHeader></myHeader>
      </div>
      <div class="war_right_show">
        <!-- 右边中间位置展示区域 -->
        <recommend v-if="showWin == 'a1'"></recommend>
        <musicHall v-if="showWin == 'a2'"></musicHall>
        <videoShow v-if="showWin == 'a3'"></videoShow>
        <radioStation v-if="showWin == 'a4'"></radioStation>
      </div>
      <!-- 底部播放组件 -->
      <div class="rightBotPlay">
        <bottomPlay></bottomPlay>
      </div>
    </div>
  </div>
</template>

<script>
  import myHeader from '../components/header/myHeader' // 头部菜单
  import warLeftList from '../components/warLeftList' // 左部导航菜单
  import bottomPlay from '../components/bottomPlay' // 底部播放组件
  // 在线音乐
  import recommend from '../components/onLineMusic/recommend' // 推荐
  import musicHall from '../components/onLineMusic/musicHall' // 音乐馆
  import videoShow from '../components/onLineMusic/videoShow' // 视频
  import radioStation from '../components/onLineMusic/radioStation' // 电台

  export default {
    name: 'landing-page',
    components: {
      myHeader,
      warLeftList,
      bottomPlay,
      recommend,
      musicHall,
      videoShow,
      radioStation
    },
    data () {
      return {
        showWin:'a1'   // 控制中间展示模块
      }
    },
    methods: {
      open(n){
        alert(n)
      },
      parentFn(payload) { // 子组件传过来的值
        this.showWin = payload;
      }
    }
  }
</script>

<style lang="less" scoped>
  /* @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro'); */
  // body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background-color:rgba(251, 251, 251, 0.897);
    height: 100vh;
    display: flex;
    z-index: 10;
    .wra_left{
      width:210px;
      // max-width: 265px;
      // height: 100%;
      background-color: rgb(241, 241, 241);
      z-index: 100;
      .war_logo{
        width:210px;
        height:70px;
        -webkit-app-region: drag;
        z-index: 102;
        line-height: 90px;
        img{
          width:90px;
          margin-left: 40px;
        }
      }
    }
    .war_right{
      width:calc(100% - 210px);
      height:100vh;
      z-index: 1;
      display: flex;
      flex-direction:column;
      .myheader{
        width: 100%;
        height: 70px;
        z-index: 100;
      }
      .war_right_show{
        width:calc(100% - 75px);
        // height:200px;
        height:calc(100% - 140px);
        // background-color: rgb(240, 226, 41);
        overflow-y: auto;
        padding-left: 40px;
        padding-right:35px;
        &::-webkit-scrollbar {
          width: 8px;
        }
        &::-webkit-scrollbar-thumb {
          background: #d8d8d8;
          border-radius: 10px;
        }
        &::-webkit-scrollbar-track-piece {
          background: transparent;
        }
        li{
          height: 500px;
        }
      }
      .rightBotPlay{
        width: calc(100% - 210px);
        height: 75px;
        // background-color: rgb(72, 115, 236);
        position: absolute;
        bottom: 0;
      }
    }
  }
  // #31c27c 绿色
</style>

<template>
  <div id="wrapper">
    <div class="wra_left">
      <div class="war_logo">
        <img src="../assets/QQlogo.png" alt="QQMusic">
      </div>
      <!-- 左侧列表 -->
      <warLeftList></warLeftList>
    </div>
    <div class="war_right">
      <div class="myheader">
        <myHeader></myHeader>
      </div>
      <div class="war_right_from"><!-- 右边展示区域 -->
        <p><b>推荐</b></p>
        <h2>Hi 尼古拉斯·赵四 今日为你打造</h2>
        <ul>asdasdasdasda</ul>
        <li>asdasdasd</li>
        <li></li>
        <li></li>
        <li>asdasdasd</li>
        <li></li>
        <li></li>
        <li>asdasdasd</li>
        <li></li>
        <li></li>
        <li>asdasdasdasd</li>
      </div>
      <div class="rightBotPlay">
        底部播放信息
      </div>
    </div>
  </div>
</template>

<script>
  import myHeader from '../components/LandingPage/myHeader'
  import warLeftList from '../components/warLeftList'

  export default {
    name: 'landing-page',
    components: { myHeader,warLeftList },
    methods: {
      open(n){
        alert(n)
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
      .war_right_from{
        width:calc(100% - 40px);
        // height:200px;
        height:calc(100% - 140px);
        // background-color: rgb(240, 226, 41);
        overflow-y: auto;
        padding-left: 40px;
        p{
          width: 100%;
          height: 90px;
          line-height: 90px;
          // background-color: cadetblue;
          font-size: 35px;
          font-family: 隶书;
          font-weight:900;
        }
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
        height: 70px;
        background-color: rgb(72, 115, 236);
        position: absolute;
        bottom: 0;
      }
    }
  }
  
</style>

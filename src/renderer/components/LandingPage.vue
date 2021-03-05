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
      <myHeader></myHeader>
      <div class="war_right_from"><!-- 右边展示区域 -->
        
      </div>
      <el-button>测试elementUI按钮</el-button>
    </div>
  </div>
</template>

<script>
  import myHeader from './LandingPage/myHeader'
  import warLeftList from './warLeftList'

  export default {
    name: 'landing-page',
    components: { myHeader,warLeftList },
    methods: {
      
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
      height:100%;
    }
  }
  
  
  
</style>

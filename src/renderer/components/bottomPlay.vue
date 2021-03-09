<!-- 底部播放组件 -->
<template>
  <div class='bottomPlay'>
    <!-- 17c08a -->
    <el-slider v-model="value1" :show-tooltip="false" :format-tooltip="formatTooltip"></el-slider>
    <!-- <el-progress :text-inside="true" :stroke-width="2" :percentage="percentage" :color="customColor"></el-progress> -->
    <div class="botplay">
      <div class="playName">
        <img src="../assets/musicImg/a100.jpg" alt="">
        <div class="playLeftRight">
          <p>吹过你的晚风 - <strong>我的名字</strong></p>
          <span>
            <i class="iconfont iconxihuan"></i>
            <i class="iconfont iconbuxihuan"></i>
            <i class="iconfont iconxiazai"></i>
            <i class="iconfont icon19"></i>
          </span>
        </div>
      </div>
      <div class="playBtn">
        <i class="iconfont iconchakantiezigengduo"></i>
        <i class="iconfont iconM_bofangkuaijin-copy"></i>
        <!-- 暂停播放键 -->
        <i class="iconfont icontaizhangbeifen3" v-show="!playBtnIcon" @click="playbtn(1)"></i>
        <i class="iconfont iconzanting" v-show="playBtnIcon" @click="playbtn(2)"></i>

        <i class="iconfont iconM_bofangkuaijin"></i>
        <!-- 音量大小 -->
        <i class="iconfont icontubiao-"></i>
      </div>
      <div class="playTime">
        <!-- 时间展示 -->
        <div class="timeShow">
          <span>00:02 / 03:50</span>
          <strong>词</strong>
          <span><i class="iconfont iconchakantiezigengduo"></i>6</span>
        </div>
        <div class="hoverShow">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
// import引入的组件需要注入到对象中才能使用
  name: 'bottomPlay',
  components: {},
  data () {
    return {
      percentage: 20,
      customColor: '#17c08a',
      value1: 0,
      playBtnIcon:false // 暂停播放键
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    // 进度条事件
    formatTooltip(val) {
      return val / 100;
    },
    playbtn(n){
      if(n == 1){
        this.playBtnIcon = true
      } else if(n == 2){
        this.playBtnIcon = false
      }
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () {}, // 生命周期 - 创建之前
  beforeMount () {}, // 生命周期 - 挂载之前
  beforeUpdate () {}, // 生命周期 - 更新之前
  updated () {}, // 生命周期 - 更新之后
  beforeDestroy () {}, // 生命周期 - 销毁之前
  destroyed () {}, // 生命周期 - 销毁完成
  activated () {} // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.bottomPlay{
  /deep/.el-slider__runway{
    margin:2px 0 7px 0;
    height: 3px;
  }
  /deep/.el-slider__bar{
    height: 3px;
    background-color: #17c08a;
  }
  /deep/.el-slider__button-wrapper {
    height: 36px;
    width: 36px;
    z-index: 1001;
    top: -16px;
    transform: translateX(-50%);
    background-color: transparent;
    text-align: center;
    user-select: none;
    line-height: normal;
  }
  /deep/.el-slider__button {
    width: 8px;
    height: 8px;
    border: 1px solid #17c08a;
    background-color: #17c08a;
    border-radius: 50%;
    -webkit-transition: .2s;
    transition: .2s;
    user-select: none;
    opacity: 0;
  }
  /deep/.el-slider:hover .el-slider__button{
    opacity: 1;
  }
  .botplay{
    width: 100%;
    height:50px;
    display: flex;
    justify-content:space-between;
    .playName{
      width: 33%;
      height: 100%;
      display: flex;
      // background-color: red;
      align-items:center;
      justify-content:center;
      .playLeftRight{
        cursor:pointer;
        display: flex;
        flex-direction:column;
        margin-left: 10px;
        height: 50px;
        p{
          height: 45%;
          font-family:黑体;
          font-size: 13px;
          line-height: 25px;
          strong{
            font-size: 12px;
            font-family:宋体;
            color: rgb(187, 187, 187);
          }
        }
        span i{
          margin-right: 10px;
          font-size: 18px;
          line-height: 25px;
          color: rgb(129, 129, 129);
        }
        span i:first-child:hover{
          color: red;
        }
        span i:hover{
          color: #17c08a;
        }
      }
      
      img{
        width: 40px;
        height: 40px;
        border-radius:5px;
      }
    }
    .playBtn{
      width: 33%;
      // background-color: blueviolet;
      display: flex;
      align-items:center;
      justify-content:center;
      i{
        color: #000;
        font-size: 26px;
        margin-right: 12px;
        cursor:pointer;
      }
      .icontaizhangbeifen3, .iconzanting{
        font-size: 35px;
        color: #17c08a;
      }
      .icontubiao-, .iconchakantiezigengduo{
        font-size: 20px;
      }
      i:hover{
        color: #17c08a;
      }
    }
    .playTime{
      width: 33%;
      display: flex;
      align-items:center;
      justify-content:center;
      // background-color: chocolate;
      .timeShow{
        font-size: 14px;
        color: rgb(80, 80, 80);
        span, strong{
          margin-right: 6px;
          cursor:pointer;
        }
        i{
          line-height: 10px;
        }
      }
    }
  }
}
</style>

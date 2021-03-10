<!-- 在线音乐 / 推荐模块 -->
<template>
  <div class='recommend'>
    <div class="topText">推荐</div>
    <div class="smallTopText">Hi 尼古拉斯·赵四，今日为你打造</div>
    <div class="cubeFrom">
      <!-- top第一层 推荐 -->
      <div class="cubeBox">
        <div class="cubeMax">
          <div class="leftImg">
            <div class="maskmax">
              <span><i class="el-icon-video-play" @click="open()"></i></span>
            </div>
          </div>
          <div class="cubRightTxt">
            <span>吹过你的晚风</span>
            <p>10点例</p>
            <span class="flexIcon">
              <i class="iconfont iconM_bofangkuaijin-copy"></i>
              <i class="iconfont iconxihuan-copy"></i>
              <i class="iconfont iconbuxihuan-copy"></i>
              <i class="iconfont iconxiaoxi2-copy"></i>
            </span>
          </div>
        </div>
        <p>个性电台</p>
      </div>
      <!-- 后边两个 -->
      <div class="cubeBox">
        <div class="cubeimgHover">
          <div class="mask">
            <span><i class="el-icon-video-play" @click="open()"></i></span>
          </div>
        </div>
        <p>每日30首</p>
      </div>
      <div class="cubeBox">
        <div class="cubeimgHover">
          <div class="mask">
            <span><i class="el-icon-video-play" @click="open()"></i></span>
          </div>
        </div>
        <p>新歌推荐</p>
      </div>
    </div>

    <!-- 你的歌单补给站 -->
    <div class="cubeFromList">
      <p class="smallTopText">你的歌单补给站</p>
      <div class="cubeFrom">
      <!-- top第一层 推荐 -->
        <div class="cubeBox" v-for="item in cubeMusicList" :key="item.id">
          <div class="cubeimgHover" :style ="item.bgImg">
            <span class="headNum"><i class="iconfont icontianchongxing--copy"></i> {{item.playNum}}</span>
            <div class="mask">
              <span><i class="el-icon-video-play" @click="open('asdasdasd')"></i></span>
            </div>
          </div>
          <p>{{item.bottomTxt}}</p>
        </div>
      </div>
        <!-- 第二 -->
      <div class="cubeFrom">
      <!-- top第一层 推荐 -->
        <div class="cubeBox" v-for="item in cubeMusicList" :key="item.id">
          <div class="cubeimgHover" :style ="item.bgImg">
            <span class="headNum"><i class="iconfont icontianchongxing--copy"></i> {{item.playNum}}</span>
            <div class="mask">
              <span><i class="el-icon-video-play" @click="open('asdasdasd')"></i></span>
            </div>
          </div>
          <p>{{item.bottomTxt}}</p>
        </div>
      </div>
    </div>
    </div>
    
</template>

<script>
// 例如：import '组件名称' from '组件路径';

export default {
// import引入的组件需要注入到对象中才能使用
  name: 'recommend',
  components: {},
  data () {
    return {
      cubeMusicList:[{
        id:'1',
        bottomTxt:'抖音超热中文歌',
        playNum:'2015亿',
        bgImg:{
          backgroundImage: "url(" + require("../../assets/musicImg/a1003.jpg") + ")",
          backgroundRepeat: "no-repeat",
        }
      },{
        id:'2',
        bottomTxt:'抖音宝藏女孩',
        playNum:'5亿',
        bgImg:{
          backgroundImage: "url(" + require("../../assets/musicImg/a102.jpg") + ")",
          backgroundRepeat: "no-repeat",
        }
      },{
        id:'3',
        bottomTxt:'伤感女声 | 回忆美好往事',
        playNum:'2115亿',
        bgImg:{
          backgroundImage: "url(" + require("../../assets/musicImg/a105.jpg") + ")",
          backgroundRepeat: "no-repeat",
        }
      },{
        id:'4',
        bottomTxt:'古风 | 一首红尘曲',
        playNum:'205万',
        bgImg:{
          backgroundImage: "url(" + require("../../assets/musicImg/a104.jpg") + ")",
          backgroundRepeat: "no-repeat",
        }
      }]
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    open(){
      alert('弹框测试001122')
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
@import '../../assets/publicCss/publicStyle.css';
.cubeFrom{
  display: flex;
  margin-bottom: 20px;
  // justify-content:space-between;
}
.cubeFromList{
  margin-top: 20px;
}
.smallTopText{
  font-size: 23px;
  font-family:黑体;
  margin-bottom: 8px;
}
.cubeMax{
  background:linear-gradient(to top,rgb(209, 209, 209),rgb(133, 133, 133),);
  min-width:360px;
  height: 170px;
  background-color: red;
  border-radius:10px;
  margin-right: 20px;
  display: flex;
  justify-content:center;
  align-items:center;
  .leftImg{
    width: 130px;
    background-image: url('../../assets/musicImg/a100.jpg');
    height: 130px;
    border-radius:10px;
    .maskmax {
      // position: absolute;
      // top: 0;
      // left: 0;
      width:130px;
      height:130px;
      background: rgba(44, 44, 44, 0.794);
      color: #ffffff;
      opacity: 0;
      display: flex;
      font-size: 13px;
      /* 转换速度 */
      transition: transform 0.5s ease;
      border-radius:10px;
      display: flex;
      justify-content:center;
      align-items:center;
      i{
        font-size: 50px;
      }
    }
  }
  .cubRightTxt{
    width: 160px;
    height: 100px;
    margin-left: 10px;
    display: flex;
    // background-color: rgb(61, 61, 61);
    color: #fff;
    flex-direction:column;
    font-family:黑体;
    p{
      color: rgba(219, 219, 219, 0.808);
    }
    .flexIcon{
      display: flex;
      margin-top: 10px;
      .iconfont{
        font-size: 24px;
        margin-right: 10px;
      }
    }
  }
}
.cubeBox p{
  font-size: 13px;
  margin-top: 10px;
  font-family:Sans-serif;
}
.cubeimgHover{
  min-width:170px;
  height: 170px;
  background-color: red;
  border-radius:10px;
  margin-right: 20px;
  display: flex;
  justify-content:center;
  align-items:center;
  background-size:cover;
  background-image: url('../../assets/musicImg/a101.jpg');
  .headNum{
    position: relative;
    left:40px;
    top: 65px;
    font-size: 15px;
    padding:3px 10px;
    border-radius:25px;
    // width: 80px;
    // height: 30px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.794);
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width:170px;
    height:170px;
    margin-right: 20px;
    background: rgba(44, 44, 44, 0.6);
    color: #ffffff;
    opacity: 0;
    display: flex;
    font-size: 13px;
    /* 转换速度 */
    transition: transform 0.5s ease;
    border-radius:10px;
    i{
      font-size: 50px;
    }
  }
  .mask span {
    margin: auto;
  }
}
.cubeimgHover:hover .mask{
    opacity: 1;
}
.cubeMax:hover .maskmax{
    opacity: 1;
}
@media screen and (min-width: 1018px) {
    
}
</style>

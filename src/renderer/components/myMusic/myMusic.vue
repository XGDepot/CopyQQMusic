<!-- 我喜欢展示 -->
<template>
  <div class='myMusic'>
    <p class="topText">我喜欢</p>
    <div class="topTable">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label='歌 词' name="first">
          <div class="topBtn">
            <div class="btnLeft">
              <el-button icon="iconfont iconbofangsanjiaoxing" round style="background-color: #17c08a;color:#fff">播放全部</el-button>
              <el-button icon="iconfont iconxiazai" round>下载</el-button>
              <el-button icon="iconfont iconliebiao5" round>批量操作</el-button>
            </div>
            <!-- <div class="btnRight">
              <span><i class="iconfont iconliebiao5"></i>搜索</span>
              <span><i class="iconfont iconliebiao5"></i>排序</span>
              <span><i class="iconfont iconliebiao5"></i></span>
              <span><i class="iconfont iconliebiao5"></i></span>
              <span><i class="iconfont iconliebiao5"></i></span>
            </div> -->
          </div>
        </el-tab-pane>
        <el-tab-pane label="歌 单" name="second"></el-tab-pane>
      </el-tabs>
      <div class="music_list" v-show="activeName == 'first'">
        <ul class="topTab">
          <li style="width: 50%;">歌曲</li>
          <li>歌手</li>
          <li>专辑</li>
        </ul>
        <ul v-for="item in musicDataList" :key="item.id">
          <li style="width: 50%;"><i class="iconfont iconxihuan2"></i>{{item.mushcName}}
            <span class="hoverIcon">
              <i class="iconfont iconbofangsanjiaoxing"></i>
              <i class="iconfont icontianjiazengjiajia"></i>
              <i class="iconfont iconxiazai"></i>
              <i class="iconfont icon19"></i>
            </span>
          </li>
          <li>{{item.singer}}</li>
          <li>{{item.album}}</li>
        </ul>
      </div>
      <div class="songList" v-show="activeName == 'second'">
          啊实打实大大说
      </div><!-- 操作按钮 -->
    </div>
    
  </div>
</template>

<script>
import musicList from '../../assets/dataJson/musicList.js'

export default {
  name: 'myMusic',
  components: {},
  data () {
    return {
      musicDataList:[],
      activeName: 'first',
      lableName:''
    }
  },
  // 监听属性 类似于data概念
  computed: {
  },
  // 监控data中的数据变化
  watch: {
  },
  // 方法集合
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.musicDataList = musicList
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
.topTable{
  width: 100%;
  height: 100vh;
  // background-color: red;
  /deep/.el-tabs__nav-wrap::after{
    height: 0px;
  }
  /deep/.el-tabs__item.is-active{
    color:#31c27c;
  }
  /deep/.el-tabs__active-bar .is-top{
    width: 21px;
    transform: translateX(6px);
  }
  /deep/.el-tabs__active-bar{
    background-color:  #31c27c;
    height: 4px;
    border-radius:15px;
  }
  .topBtn{
    width: 100%;
    display: flex;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    .btnLeft{
      height: 50px;
      width: 50%;
    }
    .btnRight{
      height: 50px;
      text-align: right;
      line-height: 40px;
      font-family:宋体;
      width: 50%;
      font-size: 16px;
      span{
        margin-left: 10px;
      }
    }
  }
  .music_list{
    width: 100%;
    .topTab{
      font-size: 14px;
      height: 30px;
      line-height: 20px;
      margin-bottom: 5px;
      li{
        width: 25%;
      }
    }
    ul{
      width: 100%;
      display: flex;
      // cursor:pointer;
      justify-content:space-between;
      li{
        width: 25%;
        height: 50px;
        line-height: 50px;
        font-family:宋体;
        // margin-bottom: 20px;
        .iconxihuan2{
          margin-right: 10px;
          color: rgb(243, 71, 71);
        }
      }
      li:hover .hoverIcon{
        display: block;
      }
    }
    ul:hover{
      background-color: rgb(238, 238, 238);
    }
    .hoverIcon{
      position: relative;
      float: right;
      display: none;
      i{
        margin-right: 5px;
        color:rgb(112, 112, 112);
      }
      i:hover{
        cursor:pointer;
        color: #31c27c;
      }
    }
  }
}
// .el-button{
//   display: flex;
//   align-items:center;
// }
//   height: 35px;
  /deep/.el-button.is-round{
    font-size: 12px;
    padding: 8px 23px;
    background-color: #d6d6d6;
    color: #000;
    i{
      font-size: 16px;
      margin-right: 2px;
    }
    span{
      height: 10px;
      line-height: 1px;
    }
  }


</style>

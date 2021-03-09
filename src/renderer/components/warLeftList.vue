<!-- 左侧列表 -->
<!-- 
  暂存未解决问题
      
 -->
<template>
  <div class='warLeftList'>
    <!-- 在线音乐 -->
    <div class="leftList">
      <strong>在线音乐</strong>
      <ul>
        <li @click="emitNum('a1')" :class="showIcon == 'a1' ? 'liBgBlue' : 'liList'">
          <i class="iconfont icontuijian1-copy01" v-show="showIcon == 'a1'"></i>
          <i class="iconfont icontuijian1" v-show="showIcon != 'a1'"></i>
          推荐
        </li>
        <li @click="emitNum('a2')" :class="showIcon == 'a2' ? 'liBgBlue' : 'liList'">
          <i class="iconfont iconyinlefuhao1-copy" v-show="showIcon == 'a2'"></i>
          <i class="iconfont iconyinlefuhao1" v-show="showIcon != 'a2'"></i>
          音乐馆</li>
        <li @click="emitNum('a3')" :class="showIcon == 'a3' ? 'liBgBlue' : 'liList'">
          <i class="iconfont iconshipinvideo-copy" v-show="showIcon == 'a3'"></i>
          <i class="iconfont iconshipinvideo" v-show="showIcon != 'a3'"></i>
          视频</li>
        <li @click="emitNum('a4')" :class="showIcon == 'a4' ? 'liBgBlue' : 'liList'">
          <i class="iconfont icondiantai-copy" v-show="showIcon == 'a4'"></i>
          <i class="iconfont icondiantai" v-show="showIcon != 'a4'"></i>
          电台</li>
      </ul>
    </div>

    <!-- 我的音乐 -->
    <div class="leftList">
      <strong>我的音乐</strong>
      <ul>
        <li @click="emitNum('b1')" :class="showIcon == 'b1' ? 'liBgBlue' : 'liList'">
          <i class="iconfont iconxihuan2-copy" v-show="showIcon == 'b1'"></i>
          <i class="iconfont iconxihuan2" v-show="showIcon != 'b1'"></i>
          我喜欢</li>
        <li @click="emitNum('b2')" :class="showIcon == 'b2' ? 'liBgBlue' : 'liList'">
          <i class="iconfont icondiannao-copy" v-show="showIcon == 'b2'"></i>
          <i class="iconfont icondiannao" v-show="showIcon != 'b2'"></i>
          本地和下载</li>
        <li @click="emitNum('b3')" :class="showIcon == 'b3' ? 'liBgBlue' : 'liList'">
          <i class="iconfont iconlishi1-copy" v-show="showIcon == 'b3'"></i>
          <i class="iconfont iconlishi1" v-show="showIcon != 'b3'"></i>
          播放历史</li>
        <li @click="emitNum('b4')" :class="showIcon == 'b4' ? 'liBgBlue' : 'liList'">
          <i class="iconfont iconyinleliebiao-copy" v-show="showIcon == 'b4'"></i>
          <i class="iconfont iconyinleliebiao" v-show="showIcon != 'b4'"></i>
          试听列表</li>
      </ul>
    </div>

    <!-- 创建的歌单 -->
    <div class="leftList">
      <strong>创建的歌单
        <div class="strongRightIcon">
          <i class="el-icon-plus"></i>
          <i class="el-icon-arrow-up" @click="arrowOne(arrowOnes = false)" v-show="arrowOnes"></i>
          <i class="el-icon-arrow-down"  @click="arrowOne(arrowOnes = true)" v-show="!arrowOnes"></i>
        </div>
        <!-- <i class="el-icon-arrow-down"></i> -->
      </strong>
      <ul v-show="arrowOnes" v-for="item in createList" :key="item">
        <li @click="emitNum(item.id)" :class="showIcon == item.id ? 'liBgBlue' : 'liList'"
        oncontextmenu="myRight()">{{item.name}}</li>
      </ul>
    </div>

    <!-- 收藏的歌单 -->
    <div class="leftList">
      <strong>收藏的歌单
        <div class="strongRightIcon">
          <i class="el-icon-arrow-up" @click="arrowTwo(arrowTwos = false)" v-show="arrowTwos"></i>
          <i class="el-icon-arrow-down" @click="arrowTwo(arrowTwos = true)" v-show="!arrowTwos"></i>
        </div>
      </strong>
      <ul v-show="arrowTwos">
        <li @click="emitNum('d1')" :class="showIcon == 'd1' ? 'liBgBlue' : 'liList'">推荐</li>
        <li @click="emitNum('d2')" :class="showIcon == 'd2' ? 'liBgBlue' : 'liList'">音乐馆</li>
        <li @click="emitNum('d3')" :class="showIcon == 'd3' ? 'liBgBlue' : 'liList'">视频</li>
        <li @click="emitNum('d4')" :class="showIcon == 'd4' ? 'liBgBlue' : 'liList'">电台</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'warLeftList',
  components: {},
  data () {
    return {
      showIcon:'a1',
      arrowOnes:true,
      arrowTwos:true,
      createList:[{
        id:'1',
        name:'新建歌单'
      },{
        id:'2',
        name:'新建歌单2'
      },{
        id:'3',
        name:'新建歌单3'
      }]
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    emitNum(message){
      this.showIcon = message
      this.$emit('childFn', message);
    },
    myRight(){
      alert('右键事件')
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
.warLeftList{
  width: 210px;
  max-width: 215px;
  height:calc(100vh - 95px);
  margin-top:22px;
  overflow: hidden;
  // overflow-y: auto;
  -webkit-app-region: no-drag;
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
  .iconfont{
    margin-right: 5px;
  }
  .leftList{
    width: 210px;
    display: flex;
    flex-direction:column;
    padding-left:25px;
    padding-right:25px;
    margin-bottom:35px;
    img{
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    .liList{
      width:140px;
      cursor:pointer;
      height: 30px;
      border-radius:0.3125rem;
      color:rgb(26, 25, 25);
      font-size: 0.875rem;
      margin-top: 0.625rem;
      line-height:30px;
      padding-left:20px;
    }
    .liList:hover{
      background-color: rgb(209, 209, 209);
    }
    .liBgBlue{
      width:140px;
      cursor:pointer;
      height: 30px;
      border-radius:0.3125rem;
      color:rgb(248, 248, 248);
      font-size: 0.875rem;
      margin-top: 0.625rem;
      line-height:30px;
      padding-left:20px;
      background-image: linear-gradient(to right, #1fd4ae, #17c08a);
    }
    .liClick{ // 点击后的样式
      color: #fff;
      background-image: linear-gradient(to right, rgb(38, 195, 98) , rgb(62, 185, 51));
    }
    strong{
      width: 100%;
      height:20px;
      font-size:0.75rem;
      margin-left: 20px;
      color:rgb(139, 139, 139);
      display: flex;
      .strongRightIcon{
        text-align: right;
        width:85px;
        height: 100%;
        font-size: 16px;
        // background-color: red;
        i{
          cursor:pointer;
          color: #000;
          margin-right: 5px;
        }
      }
    }
  }
}
.warLeftList:hover{
  overflow-y: auto;
}

</style>

<!-- 左侧列表 -->
<template>
  <div class='warLeftList'>
    <!-- 在线音乐 -->
    <div class="leftList">
      <strong>在线音乐</strong>
      <ul>
        <li>推荐</li>
        <li>音乐馆</li>
        <li>视频</li>
        <li>电台</li>
      </ul>
    </div>

    <!-- 我的音乐 -->
    <div class="leftList">
      <strong>在线音乐</strong>
      <ul>
        <li>推荐</li>
        <li>音乐馆</li>
        <li>视频</li>
        <li>电台</li>
      </ul>
    </div>

    <!-- 创建的歌单 -->
    <div class="leftList">
      <strong>在线音乐</strong>
      <ul>
        <li>推荐</li>
        <li>音乐馆</li>
        <li>视频</li>
        <li>电台</li>
      </ul>
    </div>

    <!-- 收藏的歌单 -->
    <div class="leftList">
      <strong>在线音乐</strong>
      <ul>
        <li>推荐</li>
        <li>音乐馆</li>
        <li>视频</li>
        <li>电台</li>
      </ul>
    </div>
  </div>
</template>

<script>
// 例如：import '组件名称' from '组件路径';

export default {
// import引入的组件需要注入到对象中才能使用
  name: 'warLeftList',
  components: {},
  data () {
    return {

    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {

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
  overflow-x: hidden;
  overflow-y: auto;
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
  .leftList{
    width: 210px;
    display: flex;
    flex-direction:column;
    padding-left:25px;
    padding-right:25px;
    margin-bottom:35px;
    li{
      width:140px;
      height: 1.875rem;
      border-radius:0.3125rem;
      color:rgb(26, 25, 25);
      font-size: 0.875rem;
      background-color: rgba(75, 160, 41, 0.438);
      // background-image: linear-gradient(to right, rgb(38, 195, 98) , rgb(62, 185, 51));
      margin-top: 0.625rem;
      line-height: 1.875rem;
      padding-left:20px;
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
    }
  }
  
}

</style>

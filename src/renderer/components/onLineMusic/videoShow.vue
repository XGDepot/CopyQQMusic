<!-- 在线音乐/视频模块 -->
<template>
  <div class='videoShow'>
    <span>在线音乐/视频模块</span>
  </div>
</template>

<script>
// 例如：import '组件名称' from '组件路径';

export default {
// import引入的组件需要注入到对象中才能使用
  name: 'videoShow',
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
//@import url(); 引入公共css类
span{
  width: 100%;
  height: 90px;
  line-height: 90px;
  // background-color: cadetblue;
  font-size: 35px;
  font-family:黑体;
  font-weight:900;
}
</style>

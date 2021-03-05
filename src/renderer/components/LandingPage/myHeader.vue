<!-- header自定义头部 -->
<template>
  <div class='myHeader'>
    <div class="headerLeft">
      <i class="el-icon-arrow-left"></i>
      <i class="el-icon-arrow-right"></i>
      <el-input v-model="input" placeholder="搜索音乐">
        <i class="el-icon-circle-plus"></i>
      </el-input>
      <i class="el-icon-headset"></i>
    </div>
    <div class="headerRight">
      <div class="headerRightCenter">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <span>尼古拉斯·赵四</span>
        <i class="el-icon-warning"></i><!-- 绿色等级 -->
        <i class="el-icon-warning"></i><!-- 红色等级 -->
        <i class="el-icon-warning"></i><!-- 听书等级 -->
        <i class="el-icon-arrow-down"></i>
        <i class="el-icon-user"></i><!-- 皮肤 -->
        <i class="el-icon-menu"></i><!-- 设置 -->
        <el-divider direction="vertical"></el-divider>
        <i class="el-icon-copy-document"></i><!-- 选项 -->
        <i class="el-icon-minus"></i> <!-- 缩小 -->
        <i class="el-icon-full-screen"></i>
        <i class="el-icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script>
// 例如：import '组件名称' from '组件路径';

export default {
// import引入的组件需要注入到对象中才能使用
  name: 'myHeader',
  components: {},
  data () {
    return {
      input: ''
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    open(n){
      alert(n)
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
<style lang="less" scoped>
/* //@import url(); 引入公共css类 */
.myHeader{
  // z-index: 102;
  // background-color: rgb(77, 177, 243);
  -webkit-app-region: drag;
  /* -webkit-app-region: no-drag; */
  display: flex;
  justify-content:space-between;
  .headerLeft{
    width: 40%;
    height: 70px;
    display: flex;
    align-items:center;
    // background-color: red;
    -webkit-app-region: no-drag;
    .el-icon-arrow-left{
      line-height: 70px;
      margin-left:40px;
      // z-index: 110;
    }
    .el-icon-arrow-right{
      margin-left:16px;
      z-index: 110;
    }
    .el-input[data-v-0b894f88]{
      width: 50%;
      height: 35px;
      line-height: 35px;
      overflow: hidden;
      margin-left: 20px;
      border-radius:18px;
      -webkit-app-region: no-drag;
      /deep/.el-input__inner:focus{border-color:rgb(224, 222, 222)}
      /deep/.el-input__inner{
        height: 36px;
        line-height: 35px;
        background-color: rgb(224, 222, 222);
      }
      /deep/.el-input--prefix .el-input__inner{
        padding-left: 20px;
      }
    }
    .el-icon-headset{
      margin-left: 15px;
    }
  }
  .headerRight{
    width: 60%;
    display: flex;
    justify-content:flex-end;
    .headerRightCenter{
      width: 460px;
      height: 70px;
      display: flex;
      justify-content:center;
      align-items:center;
      font-size: 12px;
      // background-color: rgb(243, 80, 148);
      .el-avatar{
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
      i{
        font-size: 19px;
        // margin-left: 15px;
      }
      .el-divider{
        height:21px;
        background-color: rgb(65, 64, 64);
      }
      .el-divider{
        margin-right: 10px;
      }
      .el-icon-arrow-down,.el-icon-user,.el-icon-menu,
      .el-icon-copy-document,.el-icon-full-screen,.el-icon-close{
        margin-right: 10px;
      }
      .el-icon-arrow-down{
        margin-left: 10px;
      }
      .el-icon-minus{ // 缩小
        margin-right: 10px;
      }
    }
  }
}
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* 轮播角标颜色 */
.van-swipe__indicator,.el-carousel__indicators--outside button{
    background-color:#f66f6a!important
}

.el-carousel__arrow--left{
  left:20px!important;

}
.el-carousel__arrow--right{
  right:20px!important;
}
.pageTranslateGraySpecial{
-webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
-ms-filter: grayscale(100%);
-moz-filter: grayscale(100%);
filter: gray; /* IE 6-9 */
}

</style>

<script>
export default {
  created() {
    window.console.log('%c142vip站点系列相关的所有项目，在这里汇总整理', 'font-size:30px;color:white;text-shadow:2px 2px 1px gold')
    window.console.log('你在电脑前看这段文字，\n写文字的人正是刚毕业的少年。\nN年前少年怀揣理想学习编程，\nN年后少年用一行行代码诠释出不一样的人生。\n愿每一个努力的人都能被温柔以待...\n')
    window.console.log('%c ', 'background: url(https://ghchart.rshah.org/mmdapl) no-repeat center;padding-left:640px;padding-bottom: 80px;')
    window.console.log('%cGithub：https://github.com/mmdapl   博客：http://blog.142vip.cn ', 'color:red')
  }
}
</script>

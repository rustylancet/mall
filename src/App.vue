<template>
  <div id="app">
    <div class="app-title">
      <div class="title">爱无锡</div>
    </div>
    
    <div class="content-box">
      <keep-alive exclude="Detail">
        <router-view></router-view>
      </keep-alive>
    </div>

    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/content/tabbar/TabBar";

export default {
  name: "app",
  components: {
    TabBar,
  },
};
</script>
<style lang="less">
@import url(@/assets/css/base.less);
#app {
  position: relative;
  background-color: rgb(247, 247, 247);
}
.app-title {
  width: 100%;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  z-index: 2;
}
.title {
  width: 70%;
  height: 50px;
  font-size: 5vw;
  font-weight: bold;
  color: #000;
  text-align: center;
  overflow: hidden;
  margin: 0 auto;
  line-height: 50px;
}
.content-box {
  width: 100%;
  margin-bottom: 50px;
  margin-top: 50px;
  position: relative;
}
</style>

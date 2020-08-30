<template>
  <div class="tab-bar">
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o" :to="{ path: '/home' }">首页</van-tabbar-item>
      <van-tabbar-item name="classification" icon="apps-o" :to="{ path: '/classification' }">分类</van-tabbar-item>
      <van-tabbar-item name="shoppingcart" icon="shopping-cart-o" :to="{ path: '/shopCart' }">购物车</van-tabbar-item>
      <van-tabbar-item name="user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      active: "home",
    };
  },

  components: {},
};
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  z-index: 2;
}
</style>
<template>
  <router-link to="/goodDetail">
    <div class="good-item">
      <div class="img">
        <img :src="good.img" width="100%" />
      </div>
      <div class="text">
        <div>{{good.text}}</div>
      </div>
      <div class="price">￥{{good.price}}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "GoodItem",
  props: {
    good: {
      required: true,
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="less" scoped>
.good-item {
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  .img {
    width: 100%;
  }
  .text {
    width: 100%;
    height: 36px;
    line-height: 18px;
    overflow: hidden;
    font-size: 13px;
    color: rgb(32, 32, 32);
  }
  .price {
    color: rgb(89, 172, 100);
    margin-top: 10px;
  }
}
</style>>

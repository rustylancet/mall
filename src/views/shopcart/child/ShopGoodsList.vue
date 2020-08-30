<template>
  <div class="shop-goods-list">
      <shop-good-item v-for="item in goods" :key="item.title" :good="item"></shop-good-item>
  </div>
</template>

<script>
import ShopGoodItem from "./ShopGoodItem"
export default {
  name: "ShopGoodsList",
  components: {
    ShopGoodItem,
  },
  props: {
    goods: {
      required: true,
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang='less' scoped>
.shop-cart-list {
    width: 100%;
    background-color: #fff;
}
</style>
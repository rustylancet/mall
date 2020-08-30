<template>
  <div class="product-item" :to="{ path: '/goodDetail' }">
    <div class="img">
      <img :src="product.imgUrl" />
    </div>
    <div class="info">
      <div class="price">{{product.price}}</div>
      <div class="add">
        <img src="../../../assets/image/shopCart.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: ["product"],
};
</script>

<style scoped>
</style>
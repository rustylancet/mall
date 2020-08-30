<template>
  <div class="swipe">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" width="100%"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Swipe",
  props: ["images"],
  data() {
    return {};
  },

  components: {},
};
</script>

<style scoped>
.swipe {
    width: 100%;
}
</style>
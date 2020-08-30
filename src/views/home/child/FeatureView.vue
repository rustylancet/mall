<template>
  <div class="feature-view">
    <van-grid class="van-grid" :column-num="5" :gutter="10">
      <van-grid-item class="grid-item" v-for="value in features" :key="value.title">
        <img :src="value.image" alt width="100%" />
        <div>{{value.title}}</div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "FeatureView",
  props: {
    features: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {};
  },

  components: {},
};
</script>

<style scoped>
.van-grid {
  height: 200px;
}
.grid-item {
  height: 80px;
  font-size: 12px;
}
</style>
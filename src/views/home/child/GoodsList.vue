<template>
  <div class="goods-list">
    <!-- <van-grid :column-num="3">
      <van-grid-item v-for="item in goodslist" :key="item.title">
        <good-item :goods="item"></good-item>
      </van-grid-item>
    </van-grid>-->
    <van-grid :column-num="3">
      <van-grid-item v-for="item in goodslist" :key="item.title">
        <img :src="item.img" width="100%">
        <p>{{item.title}}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import GoodItem from "@/views/home/child/GoodItem.vue";
import GridView from "@/components/common/gridView/GridView.vue";
export default {
  name: "GoodsList",
  components: {
    GoodItem,
    GridView,
  },
  props: {
    goodslist: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
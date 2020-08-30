<template>
  <div class="recommend-goods">
    <div class="title">更多精选商品</div>
    <van-grid class="recommend-content" :column-num="2" :gutter="5">
      <van-grid-item v-for="item in goods" :key="item.text" >
        <good-item :good="item"></good-item>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import GoodItem from "@/components/content/good/GoodItem";
export default {
  name: "RecommendGoods",
  props: {
    goods: {
      required: true,
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodItem,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.title {
  width: 100%;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 30px;
}
.recommend-content {
  width: 100%;
}
</style>>
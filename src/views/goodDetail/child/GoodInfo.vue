<template>
  <div class="good-info">
    <van-tabs v-model="active">
      <van-tab title="商品详情">
        <info-item :info="good.info"></info-item>
      </van-tab>
      <van-tab title="本店成交">
          <sell-record :sell="good.sell"></sell-record>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import InfoItem from "./InfoItem";
import SellRecord from "./SellRecord"
export default {
  name: "GoodInfo",
  components: {
    InfoItem,
    SellRecord
  },
  props: {
    good: {
      required: true,
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      active: 2,
    };
  },
};
</script>

<style lang='less' scoped>
.good-info,
.van-tabs {
  width: 100%;
}
</style>
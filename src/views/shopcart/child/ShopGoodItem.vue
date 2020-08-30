<template>
  <router-link to='/goodDetail'>
    <div class="shop-good-item">
    <div class="good-box">
      <van-checkbox v-model="checked" checked-color="#07c160"></van-checkbox>
      <div class="good-img">
        <img :src="good.img" />
      </div>
      <div class="good-content">
        <div class="good-title">{{good.title}}</div>
        <div class="good-type">
          <van-button type="primary" size="mini" color="#D1D1D1" @click.prevent="showSku()">{{good.type}}﹀</van-button>
        </div>
        <div class="good-price">
          <div class="price">￥{{good.price}}</div>
          <div class="good-num">
            <van-button class="numbtn" type="primary" size="mini" color="#D1D1D1">-</van-button>
            <div class="numbtn">{{good.num}}</div>
            <van-button class="numbtn" type="primary" size="mini" color="#D1D1D1">+</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </router-link>
</template>

<script>
export default {
  name: "ShopGoodItem",
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
      checked: false,
    };
  },
  methods: {
    showSku() {
      console.log(this.$store.state.skuState)
      this.$store.commit('setSkuStatue', false)
      this.$store.commit('setSkuStatue', true)
    }
  }
};
</script>

<style lang='less' scoped>
.shop-good-item {
  width: 100%;
  height: 150px;
  background-color: #fff;
  margin-bottom: 10px;
  color: rgb(77, 77, 77);
}
.good-box {
    width: 100%;
    padding-top: 20px;
}
.van-checkbox,
.good-img,
.good-content,
.good-price,
.price,
.numbtn {
  float: left;
}
.van-checkbox {
  padding-top: 30px;
  padding-left: 10px;
  width: 10%;
}
.good-img {
  width: 35%;
}
.good-content {
  font-size: 13px;
  width: 50%;
  .good-type {
    padding-bottom: 10px;
  }
  .good-title {
    width: 80%;
    margin-bottom: 10px;
  }
  .good-price {
    width: 100%;
    height: 35px;
    .good-num {
      float: right;
      padding-right: 10px;
      .numbtn {
        width: 20px;
        height: 20px;
        background-color: #e2e0e0;
        text-align: center;
        line-height: 20px;
      }
    }
  }
}
</style>
<template>
  <div class="good-intro">
    <div class="img">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in good.imgs" :key="index">
          <img :src="item" width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="price">￥{{good.price}}</div>
    <div class="info">
      <div class="title">{{good.title}}</div>
      <div class="share">
        <van-button round type="info" size="mini" color="#E6E6E6" @click="share()">分享</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodIntro",
  components: {},
  props: {
    good: {
      required: true,
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    share() {
      console.log("send");
      this.$emit('childByValue', true)
    }
  }
};
</script>

<style lang='less' scoped>
.good-intro,
.img,
.price,
.info {
  width: 100%;
  background-color: #fff;
}
.price {
  height: 30px;
  font-size: 25px;
  color: rgb(78, 163, 128);
}
.price,
.info {
  width: 95%;
  margin-left: 10px;
  font-weight: 600;
}
.info {
  height: 100px;
  margin-top: 10px;
  .title {
    width: 80%;
    height: 70px;
    line-height: 30px;
    text-align: left;
    font-size: 18px;
    float: left;
    overflow: hidden;
  }
  .share {
    width: 20%;
    float: left;
    .van-button {
      width: 100%;
      border-radius: 0;
      color: rgb(95, 95, 95);
    }
  }
}
</style>
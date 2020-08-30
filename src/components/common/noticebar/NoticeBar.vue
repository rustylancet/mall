<template>
  <div class="notice-bar">
    <van-notice-bar left-icon="volume-o" :scrollable="false">
      <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
        <van-swipe-item>内容 1</van-swipe-item>
        <van-swipe-item>内容 2</van-swipe-item>
        <van-swipe-item>内容 3</van-swipe-item>
      </van-swipe>
    </van-notice-bar>
  </div>
</template>

<script>
export default {
  name: "NoticeBar",
  data() {
    return {};
  },

  components: {},
};
</script>

<style scoped>
.notice-swipe {
  height: 30px;
  line-height: 30px;
}
</style>
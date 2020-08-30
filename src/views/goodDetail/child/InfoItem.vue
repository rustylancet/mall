<template>
  <div class="info-item">
      <div class="info-text">{{info.text}}</div>
      <div class="info-img">
          <img :src="info.img" width="100%" />
      </div>
  </div>
</template>

<script>
export default {
  name: "InfoItem",
  props: {
    info: {
      required: true,
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang='less' scoped>
.info-item {
    width: 100%;
    .info-text {
        padding: 10px;
        font-size: 18px;
    }
}

</style>
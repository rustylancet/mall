<template>
  <div class="message2" @click="openGuarantee()">
    <div class="message2-box">
      <div class="left">
        <slot name="s-left"></slot>
      </div>
      <div class="center">
        <slot name="s-center"></slot>
      </div>
      <div class="right">
        <slot name="s-right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message2",
  methods: {
    openGuarantee() {
      console.log("send2");
      this.$emit("openMessage", true);
    },
  },
};
</script>

<style lang='less' scoped>
@color: rgb(134, 134, 134);
.message2 {
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  .message2-box {
    width: 95%;
    height: 100%;
    margin: 0 auto;
  }
  .left,
  .center,
  .right {
    line-height: 50px;
  }
  .left {
    float: left;
    width: 15%;
    color: @color;
  }
  .center {
    float: left;
  }
  .right {
    float: right;
    color: @color;
  }
}
</style>
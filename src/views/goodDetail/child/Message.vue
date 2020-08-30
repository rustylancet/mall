<template>
  <div class="message" @click="openGuarantee()">
    <div class="message-box">
      <slot name="left"></slot>
      <slot name="center"></slot>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  methods: {
    openGuarantee() {
      console.log("send2");
      this.$emit('openMessage', true)
    }
  }
};
</script>

<style lang='less' scoped>
.message {
  width: 100%;
  height: 50px;
  background-color: #ffffff;
}
.message-box {
  width: 95%;
  height: 100%;
  margin: 0 auto;
}
</style>
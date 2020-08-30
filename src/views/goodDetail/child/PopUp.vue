<template>
  <div class="pop-up">
    <div class="box"><slot name="first"></slot></div>
    <div class="box"><slot name="second"></slot></div>
    <div class="box"><slot name="third"></slot></div>
    <div class="box"><slot name="forth"></slot></div>
  </div>
</template>

<script>
export default {
  name: "PopUp",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang='less' scoped>
.pop-up {
  width: 100%;
  background: #fff;
  border-radius: 5px 5px 0px 0px;
  .box {
    width: 90%;
    margin: 0 auto;
  }
}
</style>
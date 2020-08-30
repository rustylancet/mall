<template>
  <div class="nav-bar">
    <van-nav-bar>
      <slot slot="left" name="left"></slot>
      <slot slot="title" name="title"></slot>
      <slot slot="right" name="right"></slot>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
</style>
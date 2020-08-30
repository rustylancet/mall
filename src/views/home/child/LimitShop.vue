<template>
  <div class="limit-shop">
    <limit-tab></limit-tab>
  </div>
</template>

<script>
import LimitTab from "../../../components/common/limittab/LimitTab";
export default {
  name: "LimitShop",
  components: {
    LimitTab,
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped>
.limit-shop {
  height: 200px;
}
</style>
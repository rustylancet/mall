<template>
  <div class="good-item">
    <img v-lazy="getImg" :key="getImg" alt />
    <div class="goods-info">
      <p>{{goods.title}}</p>
      <span class="price">¥{{goods.price}}</span>
      <!-- <span class="collect">{{goods.cfav}}</span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodItem",
  components: {},
  props: {
    goods: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {};
  },
  methods: {
    goToDetail: function () {
      // 1.获取iid
      let iid = this.goods.iid;

      // 2.跳转到详情页面
      this.$router.push({ path: "/detail", query: { iid } });
    },
  },
  computed: {
    getImg() {
      return this.goods.img || this.goods.image || this.goods.show.img;
    },
  },
  
};
</script>

<style scoped>
</style>
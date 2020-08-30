<template>
  <div class="store">
    <div class="store-box">
      <div class="img">
        <img :src="store.img" width="100%" />
      </div>
      <div class="info">
        <div>{{store.name}}</div>
        <div class="tagImg">
          <img :src="store.tagImg" width="100%" />
        </div>
      </div>
      <div class="into">
        <van-button plain round type="primary" size="small">进店逛逛</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Store",
  props: {
    store: {
      required: true,
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang='less' scoped>
@side: 10px;
.store {
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  .store-box {
    width: 95%;
    height: 100%;
    margin: 0 auto;
    padding-top: 10px;
  }
  .img,
  .info {
    float: left;
  }
  .img {
    width: 15%;
  }
  .info {
    width: 50%;
    padding-left: 10px;
    .tagImg {
      padding-top: 10px;
      width: 10%;
    }
  }
  .into {
    float: right;
  }
}
</style>
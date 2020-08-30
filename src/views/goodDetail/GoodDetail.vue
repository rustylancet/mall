<template>
  <div class="good-detail">
    <div class="title">
      <div class="title-text">{{good.title}}</div>
    </div>
    <div class="content">
      <good-intro :good="good" @childByValue="share"></good-intro>
      <message @openMessage="guarantee">
        <div class="slot-left side-left" slot="left">
          <img class="img" src="@/assets/image/protect.png" />
        </div>
        <div slot="center" class="text">有赞担保 放心买 售后有保障</div>
        <div class="slot-right side-right" slot="right">
          <van-icon name="arrow" />
        </div>
      </message>
      <message2>
        <div slot="s-left" class="side-left">运费</div>
        <div slot="s-center">{{good.freight}}</div>
        <div slot="s-right" class="side-right">剩余{{good.stock}}万</div>
      </message2>
      <message2 @openMessage="guarantee">
        <div slot="s-left" class="side-left">服务</div>
        <div slot="s-center">收货后结算 合作商直销 线下门店</div>
        <div slot="s-right" class="side-right">
          <van-icon name="arrow" />
        </div>
      </message2>
      <message2 @openMessage="openSku">
        <div slot="s-left" class="side-left">选择</div>
        <div slot="s-center">口味选择</div>
        <div slot="s-right" class="side-right">
          <van-icon name="arrow" />
        </div>
      </message2>
      <store :store="good.store"></store>
      <good-info :good="good"></good-info>
    </div>
    <van-popup v-model="show" round position="bottom" :style="{ height: '50%' }" />
    <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" />
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
    <van-sku
      v-model="showSku"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :hide-stock="sku.hide_stock"
    />
  </div>
</template>

<script>
import GoodIntro from "./child/GoodIntro";
import Message from "./child/Message";
import Message2 from "./child/Message2";
import Store from "./child/Store";
import GoodInfo from "./child/GoodInfo";
export default {
  name: "GoodDetail",
  components: {
    GoodIntro,
    Message,
    Message2,
    Store,
    GoodInfo,
  },
  data() {
    return {
      good: {},
      showShare: false,
      show: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
        ],
      ],
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: "http://dummyimage.com/96x96", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "http://dummyimage.com/96x96", // 用于预览显示的规格类目图片
              },
              {
                id: "1",
                name: "蓝色",
                imgUrl: "http://dummyimage.com/96x96",
                previewImgUrl: "http://dummyimage.com/96x96",
              },
            ],
            largeImageMode: true, //  是否展示大图模式
          },
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
          },
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        hide_stock: false, // 是否隐藏剩余库存
      },
      goods: {
        picture: "http://dummyimage.com/96x96",
      },
      goodsId: 0,
      quota: 100,
      showSku: false,
    };
  },
  methods: {
    share(childValue) {
      // childValue就是子组件传过来的值
      console.log("receive");
      this.showShare = childValue;
    },
    guarantee(childValue) {
      this.show = childValue;
    },
    openSku(childValue) {
      this.showSku = childValue;
    },
    getGoodDetail() {
      this.$http
        .get("/goodDetail")
        .then((res) => {
          this.good = res.data;
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
  mounted: function () {
    this.getGoodDetail();
  },
};
</script>

<style lang='less' scoped>
@side: 10px;
@margin-top: 10px;

.title {
  position: fixed;
  top: 0;
  z-index: 2;
  background-color: #ffffff;
  width: 100%;
}
.title-text {
  width: 50%;
  height: 30px;
  line-height: 30px;
  margin: 0 auto;
  overflow: hidden;
  font-size: 17px;
  font-weight: 600;
}
.content {
  margin-top: 30px;
}
.message {
  margin-top: @margin-top;
  width: 100%;
  height: 50px;
  .text {
    float: left;
    line-height: 50px;
  }
  .slot-left {
    float: left;
    width: 10%;
    padding-top: 5px;
  }
  .slot-right {
    float: right;
    width: 5%;
    line-height: 50px;
    padding-top: 5px;
  }
  .img {
    width: 100%;
  }
}
.message2,
.store,
.good-info {
  margin-top: @margin-top;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
.van-goods-action {
  z-index: 3;
  bottom: 0;
  position: fixed;
}
.van-sku {
  z-index: 3;
}
</style>
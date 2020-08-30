<template>
  <div class="shop-cart">
    <div class="content">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <shop-goods-list :goods="shopGoodsList"></shop-goods-list>
      </van-pull-refresh>
      <recommend-goods :goods="recommendGoods"></recommend-goods>
      <foot></foot>
      <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        :goods-id="goodsId"
        :quota="quota"
        :hide-stock="sku.hide_stock"
      />
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
    </div>
  </div>
</template>

<script>
import RecommendGoods from "./child/RecommendGoods";
import Foot from "@/components/content/foot/Foot";
import Scroll from "@/components/common/scroll/Scroll";
import ShopGoodsList from "./child/ShopGoodsList";
import { Toast } from 'vant';
export default {
  name: "ShopCart",
  components: {
    RecommendGoods,
    Scroll,
    Foot,
    ShopGoodsList,
  },
  data() {
    return {
      recommendGoods: [],
      shopGoodsList: [],
      isLoading: false,
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
      show: false
    };
  },
  methods: {
    openSku() {
      this.show = true;
    },
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    onSubmit() {},
    getGoodsList() {
      this.$http
        .get("/recommendGoodsList")
        .then((res) => {
          this.recommendGoods = res.data.recommendGoods;
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    getShopCartList() {
      this.$http
        .get("/shopCartList")
        .then((res) => {
          this.shopGoodsList = res.data.shopGood;
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
  mounted: function () {
    this.getGoodsList();
    this.getShopCartList();
  },
  computed: {
    // show: {
    //   get() {
    //     return this.$store.state.skuState;
    //   },
    //   set() {
    //     // this.$store.state.skuState = false
    //   },
    // },
  },
};
</script>

<style  lang="less" scoped>
@top: 40px;
@bottom: 50px;
@side: 20px;
.title {
  width: 100%;
  background-color: #ffffff;
  text-align: center;
  height: @top;
  line-height: @top;
  font-size: 18px;
  font-weight: bold;
}
.content {
  width: 97%;
  margin: 0 auto;
  margin-top: 50px;
}
.van-sku {
  z-index: 2;
}
.isShow {
  display: none;
}
.van-submit-bar {
  position: fixed;
  bottom: @bottom;
}
</style>
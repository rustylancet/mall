<template>
  <div class="home">
    <van-search class="search" v-model="value" placeholder="搜索商品" @search="onSearch" />
    <div class="content">
      <!-- <div class="left-menu">
        <div class="left-menu-box">
          <scroll>
            <van-sidebar v-model="activeKey" class="sidebar">
              <van-sidebar-item v-for="item in sideBar" :title="item.title" :key="item.title" @click="move()"/>
            </van-sidebar>
          </scroll>
        </div>
      </div>
      <div class="right-menu">
        <div class="right-menu-box">
          <scroll>
            <goods-list :goodslist="sidebar.goodsList"></goods-list>
          </scroll>
        </div>
      </div> -->
      <cascad-menu :menus="menus"></cascad-menu>
      <!-- <menux ></menux> -->
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import GoodsList from "@/views/home/child/GoodsList.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";
import CascadMenu from "@/components/common/cascadMenu/CascadMenu.vue"
import menux from '@/components/common/cascadMenu/menux.vue'

export default {
  name: "Home",
  components: {
    Scroll,
    GoodsList,
    CascadMenu,
    menux
  },
  data() {
    return {
      value: "",
      activeKey: 0,
      sideBar: [
        // {
        //   title: "锡有锡优",
        // },
        // {
        //   title: "门票卡券",
        // },
        // {
        //   title: "农产生鲜",
        // },
        // {
        //   title: "零食美食",
        // },
        // {
        //   title: "服饰鞋帽",
        // },
        // {
        //   title: "生活电器",
        // },
        // {
        //   title: "家政服务",
        // },
        // {
        //   title: "母婴玩具",
        // },
        // {
        //   title: "美妆丽人",
        // },
        // {
        //   title: "商场百货",
        // },
      ],
      goodsList: [],
      menus: [
        // {
        //   name: '锡有锡优',
        //   data: [
        //     {
        //       name: '1.1'
        //     },
        //     {
        //       name: '1.2'
        //     },
        //     {
        //       name: '1.3'
        //     },
        //     {
        //       name: '1.4'
        //     },
        //     {
        //       name: '1.5'
        //     },
        //     {
        //       name: '1.6'
        //     }
        //   ]
        // },
        // {
        //   name: '门票卡券',
        //   data: [
        //     {
        //       name: '1.1'
        //     },
        //     {
        //       name: '1.2'
        //     },
        //     {
        //       name: '1.3'
        //     },
        //     {
        //       name: '1.4'
        //     },
        //     {
        //       name: '1.5'
        //     },
        //     {
        //       name: '1.6'
        //     }
        //   ]
        // },
        // {
        //   name: '零食美食',
        //   data: [
        //     {
        //       name: '1.1'
        //     },
        //     {
        //       name: '1.2'
        //     },
        //     {
        //       name: '1.3'
        //     },
        //     {
        //       name: '1.4'
        //     },
        //     {
        //       name: '1.5'
        //     },
        //     {
        //       name: '1.6'
        //     }
        //   ]
        // },
        // {
        //   name: '服饰鞋帽',
        //   data: [
        //     {
        //       name: '1.1'
        //     },
        //     {
        //       name: '1.2'
        //     },
        //     {
        //       name: '1.3'
        //     },
        //     {
        //       name: '1.4'
        //     },
        //     {
        //       name: '1.5'
        //     },
        //     {
        //       name: '1.6'
        //     }
        //   ]
        // },
        // {
        //   name: '农产生鲜',
        //   data: [
        //     {
        //       name: '1.1'
        //     },
        //     {
        //       name: '1.2'
        //     },
        //     {
        //       name: '1.3'
        //     },
        //     {
        //       name: '1.4'
        //     },
        //     {
        //       name: '1.5'
        //     },
        //     {
        //       name: '1.6'
        //     }
        //   ]
        // },
        // {
        //   name: '生活电器',
        //   data: [
        //     {
        //       name: '1.1'
        //     },
        //     {
        //       name: '1.2'
        //     },
        //     {
        //       name: '1.3'
        //     },
        //     {
        //       name: '1.4'
        //     },
        //     {
        //       name: '1.5'
        //     },
        //     {
        //       name: '1.6'
        //     }
        //   ]
        // },
        // {
        //   name: '家政服务',
        //   data: [
        //     {
        //       name: '1.1'
        //     },
        //     {
        //       name: '1.2'
        //     },
        //     {
        //       name: '1.3'
        //     },
        //     {
        //       name: '1.4'
        //     },
        //     {
        //       name: '1.5'
        //     },
        //     {
        //       name: '1.6'
        //     }
        //   ]
        // },
        // {
        //   name: '母婴玩具',
        //   data: [
        //     {
        //       name: '1.1'
        //     },
        //     {
        //       name: '1.2'
        //     },
        //     {
        //       name: '1.3'
        //     },
        //     {
        //       name: '1.4'
        //     },
        //     {
        //       name: '1.5'
        //     },
        //     {
        //       name: '1.6'
        //     }
        //   ]
        // },
        // {
        //   name: '美妆丽人',
        //   data: [
        //     {
        //       name: '1.1'
        //     },
        //     {
        //       name: '1.2'
        //     },
        //     {
        //       name: '1.3'
        //     },
        //     {
        //       name: '1.4'
        //     },
        //     {
        //       name: '1.5'
        //     },
        //     {
        //       name: '1.6'
        //     }
        //   ]
        // },
        // {
        //   name: '商场百货',
        //   data: [
        //     {
        //       name: '1.1'
        //     },
        //     {
        //       name: '1.2'
        //     },
        //     {
        //       name: '1.3'
        //     },
        //     {
        //       name: '1.4'
        //     },
        //     {
        //       name: '1.5'
        //     },
        //     {
        //       name: '1.6'
        //     }
        //   ]
        // }
      ],
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    getGoodsList() {
      this.$http
        .get("/goodsList")
        .then((res) => {
          this.menus = res.data.menus;
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    move() {

    }
  },
  mounted: function () {
    this.getGoodsList();
  },
};
</script>

<style lang="less" scoped>
@top: 54px;
.search {
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
}
.content {
  margin-top: @top;
}
.sidebar {
  overflow: auto;
}
.left-menu,
.right-menu {
  overflow: hidden;
  float: left;
}
.left-menu {
  width: 20%;
}
.right-menu {
  float: right;
  width: 80%;
}
</style>>


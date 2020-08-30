<template>
  <div class="cascad-menu" ref="cascadMenu">
    <scroll class="left-menu" :data="menus" ref="leftMenu">
      <div class="left-menu-container">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            class="left-item"
            ref="leftItem"
            :class="{'current': currentIndex === index}"
            @click="selectLeft(index, $event)"
            v-for="(menu, index) in menus"
            :key="index"
            :title="menu.name"
          ></van-sidebar-item>
        </van-sidebar>
      </div>
    </scroll>
    <scroll class="right-menu" :data="menus" ref="rightMenu" :listenScroll="true" :probeType="3">
      <div class="right-menu-container">
        <ul>
          <li class="right-item" ref="rightItem" v-for="(menu, i) in menus" :key="i">
            <div class="title">{{menu.name}}</div>
            <van-grid>
              <van-grid-item v-for="(item, j) in menu.data" :key="j">
                <div class="data-wrapper">
                  <div class="data">{{item.name}}</div>
                </div>
              </van-grid-item>
            </van-grid>
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Scroll from "../scroll/Scroll2";
export default {
  name: "CascadMenu",
  data() {
    return {
      rightTops: [],
      scrollY: 0,
      leftScrollY: 0,
      activeKey: 0,
    };
  },
  props: {
    menus: {
      required: true,
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    currentIndex() {
      const { scrollY, rightTops } = this;
      let index = rightTops.findIndex((height, index) => {
        return scrollY >= rightTops[index] && scrollY < rightTops[index + 1];
      });
      if (scrollY > rightTops[index] + 50) {
        index++;
      }
      return index;
    },
  },
  created() {
    this.$nextTick(() => {
      this._calculateHeight();
    });
  },
  methods: {
    selectLeft(index, event) {
      console.log("click:" + index);
      if (!event._constructed) {
        console.log("break");
        return;
      }
      let rightItem = this.$refs.rightItem;
      let el = rightItem[index];
      console.log("el:" + el);
      this.$refs.rightMenu.scrollToElement(el, 300);
    },
  },
  components: {
    Scroll,
  },
};
</script>

<style lang="less" scoped>
.cascad-menu {
  overflow: hidden;
  display: flex;
  width: 100%;

  .left-menu {
    width: 80px;
    .left-item {
      height: 54px;
      width: 100%;
      &.current {
        width: 100%;
      }
      .text {
        width: 100%;
        line-height: 54px;
      }
    }
  }
  .right-menu {
    flex: 1;

    .right-item {
      height: 100%;
      border: 1px solid #ccc;

      .title {
        border-bottom: 1px solid #ccc;
        height: 20px;
      }
      .data-wrapper {
        .data {
          line-height: 40px;
          height: 40px;
        }
      }
    }
  }
}
</style>
<template>
  <div class="limit-tab">
    <div class="title">限时抢购</div>
    <div class="time">
      <van-count-down :time="time">
        <template #default="timeData">
          <span class="block">{{ timeData.hours }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.minutes }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
    </div>
    <div class="more">更多</div>
  </div>
</template>

<script>
export default {
  name: "LimitTab",
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
    };
  },
};
</script>

<style scoped>
.limit-tab {
  height: 50px;
}
.title,
.time {
  float: left;
}
.time {
  padding-left: 10px;
}
.more {
  float: right;
}
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
  border-radius: 4px;
}
</style>
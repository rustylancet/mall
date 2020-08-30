<template>
  <div class="sell-record">
    <div class="none" v-if="sell.length==0">暂无成交记录</div>
    <div class="record" v-if="sell.length>0">
      <tr>
        <th>
          <div class="buyer">买家</div>
        </th>
        <th>
          <div class="time">成交时间</div>
        </th>
        <th>
          <div class="num">数量</div>
        </th>
      </tr>
      <tr v-for="(item,index) in sell" :key="index">
        <td>{{item.buyer}}</td>
        <td>{{item.time}}</td>
        <td>{{item.num}}</td>
      </tr>
    </div>
  </div>
</template>

<script>
export default {
  name: "SellRecord",
  props: ["sell"],
};
</script>

<style lang='less' scoped>
.sell-record {
  width: 100%;
  .none {
    width: 70%;
    margin: 0 auto;
  }
  .record {
    width: 100%;
    text-align: center;
    tr {
      height: 30px;
    }
    .buyer,
    .num {
      width: 100px;
    }
    .time {
      width: 150px;
    }
  }
}
</style>
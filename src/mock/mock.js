const Mock = require("mockjs");

const Random = Mock.Random;
//首页推荐
Mock.mock("/goodsList", /post|get/i, function() {
  return Mock.mock({
    "menus|10": [
      {
        name: "@cword(4)",
        "data|9": [
          {
            name: "@cword(2,3)",
            img: "@image(80x80)",
          },
        ],
      },
    ],
  });
});

//商品推荐
Mock.mock("/recommendGoodsList", /post|get/i, function() {
  return Mock.mock({
    "recommendGoods|10": [
      {
        text: "@cword(10,30)",
        img: "@image(150x150)",
        price: "@integer(0,1000)",
      },
    ],
  });
});

//购物车内容
Mock.mock("/shopCartList", /post|get/i, function() {
  return Mock.mock({
    "shopGood|3": [
      {
        title: "@cword(20)",
        img: "@image(100x100)",
        price: "@integer(0,1000)",
        message: "@cword(20,30)",
        "tags|1-3": ["@cword(3,5)"],
        num: "@integer(0,3)",
        type: "@cword(3,5)",
      },
    ],
  });
});

//商品详情
Mock.mock("/goodDetail", /post|get/i, function() {
  return Mock.mock({
    title: "@cword(25)",
    "imgs|3-5": ["@image(300x300)"],
    detailImg: "@image(100x900)",
    price: "@integer(0,1000)",
    message: "@cword(20,30)",
    "tags|1-3": ["@cword(3,5)"],
    num: "@integer(0,3)",
    type: "@cword(3,5)",
    stock: "@integer(0,3)",
    freight: "免运费",
    store: {
      name: "@cword(3,6)",
      img: "@image(300x300)",
      tagImg: "@image(300x300)",
    },
    info: {
      text: "@cword(5,20)",
      img: "@image(300x900)",
    },
    "sell|1-5": [{
      buyer: "@cname",
      time: "@date",
      num: "@integer(0,10)"
    }],
  });
});

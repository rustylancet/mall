import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";
import "./mock/mock.js";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

import {
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Icon,
  Search,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  CountDown,
  RadioGroup,
  Radio,
  Card,
  Sku,
  Checkbox,
  CheckboxGroup,
  SubmitBar,
  PullRefresh,
  ShareSheet,
  Tab,
  Tabs,
  Sidebar,
  SidebarItem,
  Popup,
  GoodsAction, GoodsActionIcon, GoodsActionButton
} from "vant";

Vue.use(Sidebar).use(SidebarItem);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Search);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Button);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Lazyload);
Vue.use(Grid).use(GridItem);
Vue.use(CountDown);
Vue.use(Radio).use(RadioGroup);
Vue.use(Card);
Vue.use(Sku);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(SubmitBar);
Vue.use(PullRefresh);
Vue.use(ShareSheet);
Vue.use(Tab).use(Tabs);
Vue.use(Popup);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
// Object.keys(VantComponent).forEach((name) => {
//   if (["message", "notification"].includes(name)) {
//     Vue.prototype["$" + name] = VantComponent[name];
//   } else {
//     Vue.use(VantComponent[name]);
//     if (name === "Modal") {
//       Vue.prototype.$confirm = VantComponent[name].confirm;
//     }
//   }
// });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

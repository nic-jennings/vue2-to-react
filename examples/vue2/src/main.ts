import Vue from "vue";
import App from "./App.vue";
import ReactWrapper from "@/components/ReactWrapper.vue";

Vue.config.productionTip = false;

Vue.component("ReactWrapper", ReactWrapper);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

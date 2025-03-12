// External exports
import Vue from "vue";
import SuiVue from "semantic-ui-vue";

// Internal exports
import App from "./App.vue";
import router from "./router/router.js";
import store from "./store/store.js";
import { MultiplatformPlugin } from "./plugins/multiplatform.js";

Vue.config.productionTip = false;

Vue.use(SuiVue);
Vue.use(MultiplatformPlugin);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");

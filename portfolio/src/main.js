import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { MultiplatformPlugin } from './plugins/multiplatform.js'

import SuiVue from 'semantic-ui-vue';

Vue.config.productionTip = false
Vue.use(SuiVue);
Vue.use(MultiplatformPlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


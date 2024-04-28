import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { MultiplatformMixin } from './mixins/multiplatform.js'

import SuiVue from 'semantic-ui-vue';

Vue.config.productionTip = false
Vue.use(SuiVue);

Vue.mixin(MultiplatformMixin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


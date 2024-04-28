import Vue from 'vue'
import App from './App.vue'
import { MultiplatformMixin } from './mixins/multiplatform.js'

import SuiVue from 'semantic-ui-vue';

Vue.config.productionTip = false
Vue.use(SuiVue);

Vue.mixin(MultiplatformMixin)

new Vue({
  render: h => h(App),
}).$mount('#app')


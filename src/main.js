import Vue from 'vue'
import App from './App.vue'

import "@/style/index.scss";

// import 'katex/dist/katex.min.css';

// import VueKatex from 'vue-katex'

// Vue.use(VueKatex)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

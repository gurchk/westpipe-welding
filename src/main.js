import Vue from 'vue';
import App from './App.vue';
import router from './router';
import "./components/index.js";
import './global.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

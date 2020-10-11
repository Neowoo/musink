import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/icon/iconfont.css'
import i18n from "./common/plugin/vue-i18n"
// import Video from 'video.js'
import 'video.js/dist/video-js.css'
//
// Vue.prototype.$video = Video;


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');

import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import './plugins/element.js'
// import './plugins'
// require.context('./plugins/', true, /\.(js|vue)$/igm)
// import pluginManager from './plugin-manager'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")

// pluginManager.init()

// starts watching for available plugins
// watcher.watch()
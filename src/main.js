import Vue from 'vue'
import App from './App.vue'
import "bootstrap"
import { BootstrapVueIcons } from 'bootstrap-vue'

// import "bootstrap/dist/css/bootstrap.min.css"

Vue.config.productionTip = false
Vue.use(BootstrapVueIcons)
new Vue({
  render: h => h(App),
}).$mount('#app')

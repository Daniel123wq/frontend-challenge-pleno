import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap"
import { BootstrapVueIcons } from 'bootstrap-vue'
import router from './router'

createApp(App, BootstrapVueIcons)
.use(router, BootstrapVueIcons)
.mount('#app')

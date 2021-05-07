import { createApp } from 'vue'
import App from './App.vue'

import store from 'store/index.js'
import router from 'routes/index.js'

createApp(App).use(router).use(store).mount('#app')

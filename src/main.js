import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { VueClipboard } from '@soerenmartius/vue3-clipboard'

const app = createApp(App)
app.use(router)
app.use(VueClipboard)
app.mount('#app')

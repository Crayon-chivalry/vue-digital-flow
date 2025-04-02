import { createApp } from 'vue'
import 'normalize.css';
import App from './App.vue'
import router from './router'
import '@/utils/remAdaptor'

createApp(App).use(router).mount('#app')

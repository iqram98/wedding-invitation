import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css' // or your global style

createApp(App).use(router).mount('#app')

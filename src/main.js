import './assets/main.css'
import '@picocss/pico/css/pico.min.css';
import { createHead } from '@unhead/vue';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead();

app.use(head);
app.use(router)
app.mount('#app')

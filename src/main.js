import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Material Design
import '@material/web/checkbox/checkbox.js';
import "@material/web/textfield/outlined-text-field";
import "@material/web/fab/fab.js"

const app = createApp(App)

app.use(router)

app.mount('#app')

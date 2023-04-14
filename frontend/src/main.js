import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index';
import { createAuth0 } from "@auth0/auth0-vue";

const app = createApp(App);

app.use(router);

app.mount('#app');

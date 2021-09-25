import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import Windi CSS
import 'virtual:windi.css';

// Import styles
import './styles/main.css';

// Create and mount the app
createApp(App).use(router).mount('#app');

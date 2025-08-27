import App from '@/global/app/index.vue';
import { createApp } from 'vue';
import router from './router/index.ts';

import '@/assets/main.css';

createApp(App).use(router).mount('#app');

import { createApp } from 'vue';
import App from './viewers/index.vue';

import '../init.ts';
import router from './router.ts';

createApp(App).use(router).mount('#app');

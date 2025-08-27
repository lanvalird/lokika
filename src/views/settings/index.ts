import { createApp } from 'vue';
import App from './viewers/index.vue';

import '../init.ts';
import router from './router.ts';

export function createVueApp() {
  const app = createApp(App);
  app.use(router);
  app.mount('#app');
}

createVueApp();

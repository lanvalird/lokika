import App from '@/global/app/index.vue';
import { createApp } from 'vue';

import router from './router/index.ts';

import '@/assets/main.css';

const currentPath = window.location.pathname;

if (currentPath !== '/' && currentPath !== '/index.html') {
  const targetPath = currentPath.replace('/', '').replace('.html', '');
  console.log('Redirecting to hash path:', targetPath);

  window.location.href = `/index.html#/${targetPath}`;
} else {
  createApp(App).use(router).mount('#app');
}

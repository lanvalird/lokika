import App from './index.vue';
import { createApp } from 'vue';
import { setPageBackground } from './lib/utils';

import '@/assets/main.css';

const APP_DOM_ID = '#app';
createApp(App).mount(APP_DOM_ID);
setPageBackground(APP_DOM_ID);

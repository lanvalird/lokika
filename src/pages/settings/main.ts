import App from './index.vue';
import { createApp } from 'vue';
import { setPageBackground } from '@/global/lib/utils';
import { VUE_ROOT_ID } from '@/global/constants';

import '@/assets/main.css';

createApp(App).mount(VUE_ROOT_ID);
setPageBackground(VUE_ROOT_ID);

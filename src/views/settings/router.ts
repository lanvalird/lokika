import type { RouteRecordRaw } from 'vue-router';

import { createRouter, createWebHistory } from 'vue-router';
import Index from './viewers/index.vue';

export const routes: RouteRecordRaw[] = [{ path: '/', component: Index }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

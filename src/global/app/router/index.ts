import type { RouteRecordRaw } from 'vue-router';
import Index from '@/views/newtab/viewers/index.vue';
import Settings from '@/views/settings/viewers/index.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Index,
    name: 'home',
  },
  {
    path: '/settings',
    component: Settings,
    name: 'settings',
  },
  {
    path: '/popup',
    component: Settings,
    name: 'popup',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

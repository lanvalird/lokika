import type { RouteRecordRaw } from 'vue-router';

import Index from '@/views/newtab/viewers/index.vue';
import Settings from '@/views/settings/viewers/index.vue';
import { createRouter, createWebHistory } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  { path: '/', component: Index, alias: '/index.html' },
  {
    path: '/settings',
    component: Settings,
    alias: ['/popup'],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  if (to.path.endsWith('index.html')) return;

  if (to.path.endsWith('.html'))
    return {
      message: '',
      path: to.path.slice(0, -5),
    };
});

export default router;

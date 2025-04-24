import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../HomePage.vue';
import CarrinhoPage from '../CarrinhoPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: CarrinhoPage,
    },
  ],
});

export default router;

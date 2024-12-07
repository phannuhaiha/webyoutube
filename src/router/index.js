import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '../views/ProductView.vue'
import Home from '../views/Home.vue'
import Subscription from '../views/Subscription.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          redirect: '/product',

        },
        {
            path: 'product',
            name: 'product',
            component: ProductView,
          
        },
        {
          path: '/subscription',
          name: 'Subscription',
          component: Subscription,
        },
      ]
    },
    
    
    
  ] 
});

export default router

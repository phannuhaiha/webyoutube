import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '../views/ProductView.vue'
import Home from '../views/Home.vue'
import Subscription from '../views/Subscription.vue';
import Signin from '@/views/Signin.vue';
import Login from '@/views/Login.vue';

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
          name: 'producthome',
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
    {
      path:'/signin',
      name:'signin',
      component: Signin,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ] 
});

export default router

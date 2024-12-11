const users= [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/users/Home.vue"),
      children: [
        {
          path: '',
          name: 'home-product',
          redirect: '/product',

        },
        {
            path: 'product',
            name: 'product',
            component: () => import("../views/users/ProductView.vue"),
          
        },
        {
          path: 'subscription',
          name: 'subscription',
          component: () => import("../views/users/Subscription.vue"),
        },
      ]
    },
    {
      path:'/signin',
      name:'signin',
      component: () => import("../views/users/Signin.vue"),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("../views/users/Login.vue"),
    },
]
export default users;

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
      path: '/index',
      name: 'index',
      component: () => import('pages/IndexPage.vue'),
      meta: {
        requiresAuth: false
      }
    }],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('components/Generic.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/:catchAll(.*)*',
    name: 'notFound',
    component: () => import('pages/ErrorNotFound.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/Menu',
    name: 'menu',
    component: () => import('components/Menu.vue'),
    meta: {
      requiresAuth: true
    }
  },
  // {
  //   path: '/DashBoard',
  //   component: () => import('components/Dashboard.vue')
  // },

]

export default routes

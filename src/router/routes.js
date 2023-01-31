
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  {
    path: '/Menu',
    component: () => import('components/Menu.vue')
  },
  // {
  //   path: '/DashBoard',
  //   component: () => import('components/Dashboard.vue')
  // },

]

export default routes

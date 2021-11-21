import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: '/',
      component: () => import('@/layouts/FullPage.vue'),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/pages/Home.vue')
        },
        {
          path: '/pages/error-404',
          name: 'page-error-404',
          component: () => import('@/views/pages/errors/Error404.vue')
        },
      ]
    },
    // Redirect to 404 page, if no match found
    // {
    //   path: '*',
    //   redirect: '/pages/error-404'
    // }
  ],

})
export default router

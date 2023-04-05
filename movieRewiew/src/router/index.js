import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Info from '../components/Info.vue'
import TVSeriesWiew from '../views/TVSeriesWiew.vue'
import SearchWiew from '../views/SearchWiew.vue'
import Page1Film from '../views/Page1Film.vue'
import Cards from '../components/Cards.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/info/:type/page=:page/:id',
      name: 'info',
      component: Info
    },
    {
      path: '/TVseries',
      name: 'TVseries',
      component: TVSeriesWiew
    },
    {
      path: '/Search/:type',
      name: 'search',
      component: SearchWiew
    },
    {
      path: '/film',
      name: 'film',
      component: Page1Film
    },
    {
      path: '/:type',
      name: 'cards',
      component: Cards
    },
  ]
})
router.beforeEach(async to => {
  if (to.meta.shouldFetch) {
    // name `data` whatever you want
    to.meta.data = await fetchSomething()
  }
})

export default router

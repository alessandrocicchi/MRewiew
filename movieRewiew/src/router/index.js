import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InfoWiew from '../components/InfoWiew.vue'
import TVSeriesWiew from '../views/TVSeriesWiew.vue'
import InfoTVSeriesWiew from '../components/InfoTVSeriesWiew.vue'
import Page2Film from '../views/Page2Film.vue'
import Info2Wiew from '../components/Info2Wiew.vue'
import Container from '../views/Container.vue'
import TVSeriesWiew2 from '../views/TVSeriesWiew2.vue'
import InfoTVSeries2Wiew from '../components/InfoTVSeries2Wiew.vue'

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
      path: '/info/:id',
      name: 'info',
      component: InfoWiew
    },
    {
      path: '/TVseries',
      name: 'TVseries',
      component: TVSeriesWiew
    },
    {
      path: '/infoTVSeries/:id',
      name: 'infoTVSeries',
      component: InfoTVSeriesWiew
    },
    {
      path: '/film2',
      name: 'film2',
      component: Page2Film
    },
    {
      path: '/info2/:id',
      name: 'info2',
      component: Info2Wiew
    },
    {
      path: '/film',
      name: 'film',
      component: Container
    },
    {
      path: '/TVseries2',
      name: 'TVseries2',
      component: TVSeriesWiew2
    },
    {
      path: '/infoTVSeries2/:id',
      name: 'infoTVSeries2',
      component: InfoTVSeries2Wiew
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

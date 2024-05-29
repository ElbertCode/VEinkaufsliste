import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/ListView.vue'
import NewItem from '../views/NewItemView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Einkaufsliste',
      component: ListView,
      props: (route) => ({ items: route.params.items })
    },
    {
      path: '/new-item',
      name: 'Neues Item',
      component: NewItem
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router

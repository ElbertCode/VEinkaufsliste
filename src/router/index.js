import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView2.vue'
import NewItem from '../views/NewItem2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Einkaufsliste',
      component: ListView,
      props: route => ({ items: route.params.items })
    },
    {
      path: '/new-item',
      name: 'Neues Item',
      component: NewItem
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router

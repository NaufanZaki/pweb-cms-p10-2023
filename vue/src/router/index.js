import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/TodoList.vue'
import Introduction from '../views/AboutVue.vue'
import NotFound from '../views/NotFound.vue'
import TaskDetailPopup from '../components/TaskDetailPopup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'To-do List',
      component: HomeView
    },
    {
      path: '/introduction',
      name: 'Introduction',
      component: Introduction,
      props: {
        member1: 'zaki',
        member2: 'aji',
        member3: 'dhimaz'
      }
    },
    {
      path: '/task/:id',
      name: 'TaskDetailPopup',
      component: TaskDetailPopup
    },
    {
      path: '/:catchAll(.*)', // or `:pathMatch(.*)*`
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router

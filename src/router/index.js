import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import RecipeVue from '../views/RecipeView.vue';
import StartView from '../views/StartView.vue';
import LoginView from '../views/auth/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/recipe/:id",
      component: RecipeVue
    },
    {
      path: "/start",
      component: StartView
    },
    {
      path: "/auth/login",
      component: LoginView
    }
  ]
})

export default router

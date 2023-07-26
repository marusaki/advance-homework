import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/home/Home.vue';
import Signup from './pages/auth/Signup.vue';
import Login from './pages/auth/Login.vue';
import TodosList from './pages/todos/TodosList.vue';
import NotFound from './pages/NotFound.vue';
import store  from './store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/signup', component: Signup, meta: {requiredUnLoggedIn: true} },
    { path: '/login', component: Login, meta: {requiredUnLoggedIn: true} },
    { path: '/todos', component: TodosList, meta: {requiredLogin: true} },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

router.beforeEach(function(to, from, next) {
  if (to.meta.requiredUnLoggedIn && store.getters.isLoggedIn) {
    next('/');
  } else if (to.meta.requiredLogin && !store.getters.isLoggedIn)  {
    next('/login');
  } else {
    next();
  }
});

export default router;

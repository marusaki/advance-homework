import { createRouter, createWebHistory} from 'vue-router';

import Home from './pages/Home.vue';
import TodosList from './pages/TodosList.vue';
import TodoDetail from './pages/TodoDetail.vue'
import UsersList from './pages/UsersList.vue';
import AboutUs from './pages/AboutUs.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/home', redirect: '/'},
        { path: '/todos', component: TodosList, children: [
            { path: ':id', name: 'todo-detail', component: TodoDetail, props: true },
        ] },
        {
            path: '/users',
            component: UsersList,
            beforeEnter: (to, from) => {
                console.log(to, from);
                if (from.path == '/') {
                    alert("You can't access to Users List from home page");
                    return false;
                }
            },
        },
        { path: '/about', component: AboutUs },
        { path: '/:notFound(.*)', component: NotFound },
    ]
});

router.beforeEach((to, from) => {
    console.log(to, from);
    if (to.name == 'todo-detail' && to.params.id == 1) {
        alert("You can not access this Todo")
        return false;
    }
})

export default router;
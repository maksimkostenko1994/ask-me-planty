import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        component: () => import('../views/auth/SignIn')
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: () => import('../views/auth/SignIn')
    },
    {
        path: '/tests',
        name: 'Test',
        component: () => import('../views/Test')
    },
    {
        path: '/create-test',
        name: 'CreateTest',
        component: () => import('../views/CreateTest')
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

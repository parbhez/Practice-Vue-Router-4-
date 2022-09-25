import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
// import Brazil from '@/views/Brazil.vue'
// import Hawaii from '@/views/Hawaii.vue'
// //import Jamaica from '@/views/Jamaica.vue'
// import Panama from '@/views/Panama.vue'


const routes = [

    { path: '/', name: 'Home', component: Home },

    //dynamically component load using lazy load for vue cli

    // {
    //     path: '/jamaica',
    //     name: 'jamaica',
    //     component: () =>
    //         import ('@/views/Jamaica.vue')
    // },
    // {
    //     path: '/hawaii',
    //     name: 'hawaii',
    //     component: () =>
    //         import ('@/views/Hawaii.vue')
    // },
    // {
    //     path: '/brazil',
    //     name: 'brazil',
    //     component: () =>
    //         import ('@/views/Brazil.vue')
    // },
    // {
    //     path: '/panama',
    //     name: 'panama',
    //     component: () =>
    //         import ('@/views/Panama.vue')
    // },

    {
        path: '/destination/:id/:slug',
        name: 'destination.show',
        component: () =>
            import ('@/views/DestinationShow.vue'),
        props: true
    },
]

const allRouterPath = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'nav-active-class'
})

export default allRouterPath
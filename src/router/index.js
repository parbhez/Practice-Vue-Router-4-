import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
// import Brazil from '@/views/Brazil.vue'
// import Hawaii from '@/views/Hawaii.vue'
// //import Jamaica from '@/views/Jamaica.vue'
// import Panama from '@/views/Panama.vue'
import sourceData from '@/data.json'

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
        props: true,
        beforeEnter: (to, from) => {
            const exists = sourceData.destinations.find(
                destination => destination.id === parseInt(to.params.id)
            )
            if (!exists) return {
                name: 'NotFound',
                params: { pathMatch: to.path.split('/').slice(1) },
                query: to.query,
                hash: to.hash,
            }
        }
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () =>
            import ('@/views/NotFound.vue')
    },

]

const allRouterPath = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'nav-active-class',

    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 }
    }
})

export default allRouterPath
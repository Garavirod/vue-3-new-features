import { createRouter, createWebHashHistory } from "vue-router"
import Users from '../views/Users'
import Features from '../views/Features'
const routes = [
    {
        path:'/',
        component:Features,        
    },
    
    {
        path:'/api-users',
        component:Users,        
    },

]

const router =  createRouter({
    history: createWebHashHistory(),
    routes
})


export default router
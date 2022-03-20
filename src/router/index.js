import { createRouter, createWebHashHistory } from "vue-router"
import Users from '../views/Users'
import Features from '../views/Features'
import Search from '../views/Search'
import Pokemon from '../views/Pokemon'
const routes = [
    {
        path:'/',
        component:Features,        
    },
    
    {
        path:'/api-users',
        component:Users,        
    },

    {
        path:'/search',
        component:Search,        
    },

    {
        path:'/pokemon/:id',
        name:'pokemon-detail',
        component:Pokemon,        
    },

]

const router =  createRouter({
    history: createWebHashHistory(),
    routes
})


export default router
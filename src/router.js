import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./views/Inicio')
const Busquedas = () => import('./views/Busquedas')

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio
        },
        {
            path: '/busquedas',
            name: 'busquedas',
            component: Busquedas
        }     
    ]
})
import { createRouter, createWebHistory } from "vue-router"
import MarvelHeros from "./components/MarvelHeros.vue"
import Calendar from "./components/Calendar.vue"
import Home from "./components/Home.vue"

const routes = [
   { path: '/', component: Home },
   { path: '/marvel-heros', component: MarvelHeros },
   { path: '/calendar', component: Calendar },
]
const router = createRouter({
   // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
   history: createWebHistory(),
   routes, // short for `routes: routes`
})
export default router
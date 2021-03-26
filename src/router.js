import { createRouter, createWebHistory } from "vue-router"
import MarvelHeros from "./pages/MarvelHeros"
import Calendar from "./pages/Calendar"
import Home from "./pages/Home"
import Markdown from "./pages/Markdown"


const routes = [
   { path: '/', component: Home },
   { path: '/marvel-heros', component: MarvelHeros },
   { path: '/calendar', component: Calendar },
   { path: '/markdown', component: Markdown }
]
const router = createRouter({
   // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
   history: createWebHistory(),
   routes, // short for `routes: routes`
})
export default router
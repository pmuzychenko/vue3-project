import { createRouter, createWebHistory } from "vue-router"
import MarvelHeros from "./pages/MarvelHeros"
import Calendar from "./pages/Calendar"
import Home from "./pages/Home"
import Markdown from "./pages/Markdown"
import Slider from "./pages/Slider"
import Calculator from "./pages/Calculator"


const routes = [
   { path: '/', component: Home },
   { path: '/marvel-heros', component: MarvelHeros },
   { path: '/calendar', component: Calendar },
   { path: '/markdown', component: Markdown },
   { path: '/slider', component: Slider },
   { path: '/calculator', component: Calculator },

]
const router = createRouter({
   // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
   history: createWebHistory(),
   routes, // short for `routes: routes`
})
export default router
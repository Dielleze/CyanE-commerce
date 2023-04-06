import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contactus',
    name: 'contactus',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactusView.vue')
  },
  {
    path: '/bags',
    name: 'bags',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BagsView.vue')
  },
  {
    path: '/shoes',
    name: 'shoes',
    // component: () => import(/* webpackChunkName: "about" */ '../views/Shoes/ShoesView.vue'),
    children: [
      {
        name: 'shoes-create',
        path: 'create',
        component: () => import(/* webpackChunkName: "about" */ '../views/Shoes/ShoesCreateView.vue')

      }
    ]
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },
  {
    path: '/dashboard',
    name: 'dahshbaord',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const guestRouteNames = ['login', 'register'];

const routeNames = routes.flatMap((route) => route.children
  ? route.children.flatMap((route) => route.name).concat(route.name)
  : route.name
)

router.beforeEach((to, from, next)=>{
  const auth = getAuth();
  onAuthStateChanged(auth, (user)=>{
    if((guestRouteNames.includes(to.name)) && user){
      next({name: 'home'})
    }
    else if( !routeNames.includes(to.name)){
      next({ name: '404'})
    }
    else{
      next()
    }
  })
})

export default router

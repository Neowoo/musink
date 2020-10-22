import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RecommendFile from "../views/RecommendVideo";
import VideoPlayPage from "../views/videoPlayPage";

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'recommendFile',
        component: RecommendFile
      },
      {
        path: 'watch',
        name: 'videoPlayPage',
        component: VideoPlayPage,
        props: {
          video: ''
        }
      },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router

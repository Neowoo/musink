import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RecommendVideo from "../views/RecommendVideo";
import VideoPlayPage from "../views/videoPlayPage";
import HotVideo from "../views/HotVideo";
import SubscribeContentPage from "../views/SubscribeContentPage";
import MediaStorage from "../views/MediaStorage";
import WatchRecordPage from "../views/WatchRecordPage";
import StudioHome from "../views/studio/StudioHome";
import InformationHomePage from "../views/studio/InformationHomePage";
import UpdatedVideoContent from "../views/studio/UpdatedVideoContent";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '',
                name: 'recommendVideo',
                component: RecommendVideo
            },
            {
                path: 'watch',
                name: 'videoPlayPage',
                component: VideoPlayPage,
                props: {
                    video: ''
                }
            },
            {
                path: 'hot_video',
                name: 'hotVideo',
                component: HotVideo
            },
            {
                path: 'subscribe_content',
                name: 'subscribeContent',
                component: SubscribeContentPage
            },
            {
                path: 'media_storage',
                name: 'mediaStorage',
                component: MediaStorage
            },
            {
                path: 'watch_record',
                name: 'watchRecordPage',
                component: WatchRecordPage
            }

        ]
    },
    {
        path: '/studio',
        name: 'studio',
        component: StudioHome,
        children: [
            {
                path: '',
                name: 'StudioHome',
                component: InformationHomePage
            },
            {
                path: '/updated_video_content',
                name: 'UpdatedVideoContent',
                component: UpdatedVideoContent
            }
        ]

    }
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

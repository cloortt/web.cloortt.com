import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SettingsView from '@/views/SettingsView.vue';

const routes =[
  {
    path:'/',
    name:'homepage',
    component: HomeView
  },
  {
    path:'/settings',
    name:'settings',
    component: SettingsView
  }
  ,
  {
        path:'/:patchMatch(.*)*',
        name: 'not-found',
        component: HomeView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

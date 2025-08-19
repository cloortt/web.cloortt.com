import { createRouter, createWebHistory } from 'vue-router'
import SidebarLayout from '@/components/layout/SidebarLayout.vue'
import HomeView from '@/views/HomeView.vue'
import CustomersView from '@/views/CustomersView.vue'
import OrdersView from '@/views/OrdersView.vue'
import CatalogView from '@/views/CatalogView.vue'
import AnalyticsView from '@/views/AnalyticsView.vue'
import PricingView from '@/views/PricingView.vue'
import SettingsView from '@/views/SettingsView.vue'
import AuthSignInView from '@/views/AuthSignInView.vue'
import AuthSignUpView from '@/views/AuthSignUpView.vue'
import AuthResetView from '@/views/AuthResetView.vue'

const routes = [
  {
    path: '/',
    component: SidebarLayout,
    children: [
      {
        path: '',
        name: 'homepage',
        component: HomeView,
      },
      {
        path: '/customers',
        name: 'customers',
        component: CustomersView,
      },
      {
        path: '/orders',
        name: 'orders',
        component: OrdersView,
      },
      {
        path: '/catalog',
        name: 'catalog',
        component: CatalogView,
      },
      {
        path: '/analytics',
        name: 'analytics',
        component: AnalyticsView,
        meta: {
          toggleBottomBar: true,
        },
      },
      {
        path: '/pricing',
        name: 'pricing',
        component: PricingView,
        meta: {
          toggleBottomBar: true,
        },
      },
      {
        path: '/settings',
        name: 'settings',
        component: SettingsView,
      },
    ],
  },
  {
    path: '/auth/sign-in',
    name: 'sign-in',
    component: AuthSignInView,
  },
  {
    path: '/auth/sign-up',
    name: 'sign-up',
    component: AuthSignUpView,
  },
  {
    path: '/auth/reset',
    name: 'reset',
    component: AuthResetView,
  },
  {
    path: '/:patchMatch(.*)*',
    name: 'not-found',
    component: HomeView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

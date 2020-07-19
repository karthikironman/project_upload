import Vue from 'vue'
import Router from 'vue-router'
import welcome from "@/components/pages/welcome_page"
import loginsign from "@/components/pages/login-signup"

import dashboard from "@/components/pages/dashboard.vue"
import media from "@/components/pages/media.vue"
import apps from "@/components/pages/apps.vue"
import my_plan from "@/components/pages/my_plan.vue"
import support from "@/components/pages/support.vue"


Vue.use(Router)
export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/get-started',
      name: 'loginsign',
      component: loginsign
    },
    {
      path: '/portal/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/portal/media',
      name: 'media',
      component: media
    },
    {
      path: '/portal/apps',
      name: 'apps',
      component: apps
    },
    {
      path: '/portal/my_plan',
      name: 'my_plan',
      component: my_plan
    },
    {
      path: '/portal/support',
      name: 'support',
      component: support
    }
  ]
})
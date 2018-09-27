import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Funruns from '@/components/Funrun/Funruns'
import CreateFunrun from '@/components/Funrun/CreateFunrun'
import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'
import Funrun from '@/components/Funrun/Funrun'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/funruns',
      name: 'Funruns',
      component: Funruns
    },
    {
      path: '/funrun/new',
      name: 'CreateFunrun',
      component: CreateFunrun,
      beforeEnter: AuthGuard
    },
    {
      path: '/funruns/:id',
      name: 'Funrun',
      props: true,
      component: Funrun
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },

  ],

  mode: 'history'
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

import Login from './views/Login.vue'


import EditPhoto from './views/PageEdit.vue'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'about',
      component: About
    },
    {

      path: '/login',
      name: 'login',
      component: Login},{

      path: '/edit',
      name: 'edit',
      component: EditPhoto

    }
  ],
  mode: 'history'
})
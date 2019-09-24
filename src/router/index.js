import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Barbacoa from '@/components/Barbacoa'
import Chili from '@/components/ChiliCookoff'
import Churrasco from '@/components/Churrasco'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/barbacoa',
      name: 'Barbacoa',
      component: Barbacoa
    },
    {
      path: '/chili',
      name: 'Chili Cookoff',
      component: Chili
    },
    {
      path: '/churrasco',
      name: 'Churrasco',
      component: Churrasco
    }
  ]
})

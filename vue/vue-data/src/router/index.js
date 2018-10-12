import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../components/child/home'
import User from '../components/child/user'
import Pamdaun from '../components/child/panduan'
import Shenhe from '../components/child/shenhe'
import Juece from '../components/child/juece'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld,
      children:[
      	{path:"home",component:Home},
      	{path:"user",component:User},
        {path:"panduan",component:Pamdaun},
        {path:"shenhe",component:Shenhe},
        {path:"juece",component:Juece}
      ]
    }
  ]
})

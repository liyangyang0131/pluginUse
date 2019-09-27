import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/Fullcalendar'
    },
    {
      path: '/UE',
      name: 'UE',
      component: () => import('@/page/UE')
    },
    {
      path:'/VueFullcalendar',
      name:'VueFullcalendar',
      component: ()=>import('@/page/VueFullcalendar')
    },
    {
      path:'/Fullcalendar',
      name:'Fullcalendar',
      component: ()=>import('@/page/Fullcalendar')
    },
    {
      path:'/Step',
      name:'Step',
      component: ()=>import('@/page/Step')
    }
  ]
})

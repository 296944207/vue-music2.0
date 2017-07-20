import Vue from 'vue'
import Router from 'vue-router'
import recommend from 'components/recommend/recommend.vue'
import singer from 'components/singer/singer.vue'
import hots from 'components/hosts/hots.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recommend',
      component: recommend
    },
    {
      path:'/singer',
      component:singer
    },
    {
      path:'/hots',
      component:hots
    },
    {
      path:'/',
      redirect:'/recommend'
    }
  ]
})

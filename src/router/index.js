import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index/Index'
import Broadcast from '../pages/Broadcast/Broadcast'
import AudioBook from '../pages/AudioBook/AudioBook'
import Group from '../pages/Group/Group'
import Mine from '../pages/Mine/Mine'

// 二级路由
import Movie from '../pages/Movie/Movie'
import Book from '../pages/Book/Book'
import Television from '../pages/Television/Television'
import Citywide from '../pages/Citywide/Citywide'
import Music from '../pages/Music/Music'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast,
        children:[
          {path:'movie',component:Movie},
          {path:'book',component:Book},
          {path:'television',component:Television},
          {path:'citywide',component:Citywide},
          {path:'music',component:Music},          
          {path:'/',component:Movie},          
        ]
    },
    {
      path: '/audioBook',
      name: 'AudioBook',
      component: AudioBook
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/index',
      redirect: '/'
    },
    {
      path: '*',
      redirect: '/'
    }                          
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VideoList from '@/components/VideoList'
import Video from '@/components/Video'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/VideoList',
      name: 'VideoList',
      component: VideoList
    },{
      path: '/Video',
      name: 'Video',
      component: Video
    }
  ]
})

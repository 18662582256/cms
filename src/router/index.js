import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login'
import Layout from '@/layout/layout'

Vue.use(Router)

/**
 * 关于 route 的配置属性说明：
 *
 * alwaysShow: true       // if set true, will always show the root menu, whatever its child routes length
 *                        // if not set alwaysShow, only more than ont route under the children
 *                        // it will becomes nested mode, otherwise not show the root menu
 *                        // 如果设置为true,它将总是出现在根目录。如果不设置的话，当它只有1个子路由的时候，会把
 *                        // 它的唯一子路由放到跟目录上来，而不显示它自己本身。
 *
 * hidden: true           // if set ture, 将不会出现在左侧菜单栏中
 */

/**
 * 基础路由： 任何角色都包含的路由
 * @type {Array}
 */
export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/',
    // hidden: true,
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/homepage'),
        meta: {icon: 's-home', title: '首页'}
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    hidden: true,
    meta: {
      icon: 'tickets',
      title: '个人中心'
    },
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/views/user/profile'),
        meta: {icon: 'warning', title: '个人中心'}
      }
    ]
  },
  {
    path: '/detail',
    component: Layout,
    hidden: true,
    meta: {
      icon: 'tickets',
      title: '详情'
    },
    children: [
      {
        path: 'detail',
        name: 'detail',
        component: () => import('@/views/project/subsisting/detail'),
        meta: {icon: 'warning', title: '详情'}
      }
    ]
  },
  // investors
  {
    path: '/investors',
    component: Layout,
    meta: {
      icon: 'svg-layers',
      title: '投资人管理'
    },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/investors/list'),
        meta: {icon: 'star-on', title: '投资人列表'}
      },{
        path: 'userInfo',
        name: 'userInfo',
        meta: { icon: 'share', title: '投资人信息' },
        component: () => import('@/views/investors/info'),
      },
    ]
  },{
    path: '/project',
    component: Layout,
    meta: {
      icon: 'svg-layers',
      title: '项目管理'
    },
    children: [
      {
        path: 'detail',
        name: 'detail',
        component: () => import('@/views/project/detail'),
        meta: {icon: 'star-on', title: '项目管理首页'}
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/project/register'),
        meta: {icon: 'star-on', title: '新项目设立登记'}
      },{
        path: 'subsisting',
        meta: { icon: 'share', title: '存续项目' },
        component: () => import('@/views/project/index'),
        children: [
          {
            path: 'list',
            name: 'list',
            component: () => import('@/views/project/subsisting/index'),
            meta: {icon: 'success', title: '存续项目列表'}
          },{
            path: 'payment',
            name: 'payment',
            component: () => import('@/views/project/payment/index'),
            meta: {icon: 'success', title: '付息'}
          },{
            path: 'principal',
            name: 'principal',
            component: () => import('@/views/project/principal/index'),
            meta: {icon: 'success', title: '本金'}
          },
        ]
      },{
        path: 'end',
        name: 'end',
        component: () => import('@/views/project/end'),
        meta: {icon: 'star-on', title: '已完结项目'}
      }
    ]
  }
]

export default new Router({
  routes: constantRouterMap
})

export const asyncRouterMap = [
  { path: '*', redirect: '/404', hidden: true }
]
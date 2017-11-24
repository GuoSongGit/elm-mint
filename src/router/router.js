
import App from '../App'
import home from '../page/home/home'
import login from '../page/login/login'
import city from '../page/city/city'
import miste from '../page/miste/miste'
import profile from '../page/profile/profile'
import search from '../page/search/search'
import order from '../page/order/order'

export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    redirect: '/home'
  }, {
    path: '/home',
    component: home
  }, {
    path: '/login',
    component: login
  }, {
    path: '/city',
    component: city
  }, {
    path: '/miste',
    component: miste
  }, {
    path: '/search',
    component: search
  }, {
    path: '/order',
    component: order
  }, {
    path: '/profile',
    component: profile
  }]
}]

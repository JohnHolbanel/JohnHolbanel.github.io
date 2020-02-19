import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {MediaQueries} from 'vue-media-queries';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {routes} from './routes'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
const mediaQueries = new MediaQueries();
Vue.use(mediaQueries)


const router = new VueRouter({
  routes 
})

new Vue({
  el: '#app',
  router,
  mediaQueries: mediaQueries,
  render: h => h(App)
})

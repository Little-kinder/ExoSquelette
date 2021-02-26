import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import Dashboard from './components/Dashboard.vue'
import CreateOrder from './components/CreateOrder.vue'

// import vb from 'vue-babylonjs';

const routes = [
  { path: '/home', name : 'home', component: Dashboard },
  { path: '/order', name : 'order', component: CreateOrder }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(BootstrapVue);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
  
})


// Vue.use(vb);

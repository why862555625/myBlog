import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  axios from 'axios'
Vue.config.productionTip = false
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'//编辑器样式
import './plugins/element.js'
import './assets/style/global.css'
Vue.use(mavonEditor)
axios.defaults.baseURL = 'http://10.30.5.142:8080/'
//  axios.defaults.baseURL = 'http://10.30.5.194:8080/'
Vue.prototype.$http = axios;
//配置拦截器
axios.interceptors.request.use(config=>{
  config.headers.Authorization = window.localStorage.getItem('token')
  return config
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

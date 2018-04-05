// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "normalize.css";
import "./less/index.css";

import Vue from 'vue'
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import axios from 'axios';


Vue.use(ElementUI);

axios.defaults.baseURL = 'http://157.122.54.189:9095';
Vue.prototype.$http=axios;

import api from "./js/api-config";
Vue.prototype.$api=api;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

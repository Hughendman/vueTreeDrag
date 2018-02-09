// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//d3
import * as d3 from 'd3'
//VueX
import Vuex from 'vuex';
Vue.use(Vuex);
const  vuex_store = new Vuex.Store({
  state:{
    mse:"#icon-jiaoyiloudou"
  },
  mutations:{
    showUserName(state){
      alert(state.user_name);
    }
  }
})
//elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
//jquery
import $ from 'jquery'

//注册组件
import pie from './components/index/pie';
Vue.component("pie",pie);
import granav from './components/index/granav';
Vue.component("granav",granav);
import line from './components/index/line';
Vue.component("lines",line);
import rad from './components/index/rad';
Vue.component("rad",rad);

//iconfont
import './../static/icon/iconfont'

//eCharts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

//富文本编辑框
import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:vuex_store,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import {
  MessageBox
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './assets/css/style.css'
import Calender from './assets/Calendar-encapsulation/Calender.vue' //日程日历
import '../src/components/Login_encapsulation/encapsulation.vue' //登入的封装
import './assets/personal-information/personal_information.vue' //个人中心的封装

Vue.component("my-Calender", Calender)
Vue.use(ElementUI);
Vue.use(Antd);
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
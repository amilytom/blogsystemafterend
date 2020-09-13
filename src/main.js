// Vue默认引入
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
// 引入element-ui及默认主题
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入图标样式
import './assets/css/icon.css';
// 引入vuedraggable 弹窗拖拽组件
import './utils/directives';
// 引入babel-polyfill让不支持es6的浏览器能够正常运行
import 'babel-polyfill';

// vue使用element-ui
Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});

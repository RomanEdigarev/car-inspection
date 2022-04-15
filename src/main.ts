import Vue from 'vue';
import ElementUI from 'element-ui';
import lang from 'element-ui/lib/locale/lang/ru-RU';
import locale from 'element-ui/lib/locale';
import App from './app.vue';
import router from './router';
import store from './store';

import 'reset-css';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);
locale.use(lang);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

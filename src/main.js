import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";


import Vue from 'vue'
import App from './App.vue'
import ElementUI from "element-ui"
import locale from "element-ui/lib/locale"
// import '../node_modules/element-ui/lib/theme-chalk/reset.css'
import './assets/scss/app.scss'
import './assets/scss/element-variable.scss'




Vue.use(ElementUI, { locale });

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')

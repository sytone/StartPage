import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
//import BootstrapAlert from './plugins/vue-bootstrap-alert'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
//Vue.use(BootstrapAlert)

new Vue({
  render: h => h(App),
}).$mount('#app')

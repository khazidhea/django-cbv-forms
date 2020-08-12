import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    username: 'user'
  },
  mutations: {
    setUsername (state, username) {
      state.username = username
    }
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

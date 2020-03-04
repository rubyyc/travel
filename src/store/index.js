import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '北京'
  },
  // actions: {
  //   changeCity (ctx, city) {
  //     // console.log('1', ctx)
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    userLogin: false
  },
  mutations: {
    successLogin(state, payload) {
      // console.log(payload)
      state.isLogin = payload;
    },
    idLogin(state, payload) {
      // console.log(payload)
      state.userLogin = payload
    }
  },
  actions: {
    submitLogin({commit}, payload) {
      // console.log(payload)
      axios({
        method: 'POST',
        url: 'http://localhost:3000/users/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      .then(({data}) => {
        // console.log(data)
        commit('successLogin', true)
        localStorage.setItem('token', data.access_token)
        commit('idLogin', true)
      })
      .catch(err => { 
        console.log(err)
      })
    },

    submitRegister({commit}, payload) {
      
    }
  }
})

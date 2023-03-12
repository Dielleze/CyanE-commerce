import { createStore } from 'vuex'
import {getAuth, signOut} from 'firebase/auth'
export default createStore({
  state: {
    user: null,
  },
  getters: {
  },
  mutations: {
    setUser(state, user){
      state.user = user;
    }
  },
  actions: {
    userLogin({ commit }, user){
      commit('setUser', user)
    },
    logoutUser({ commit }){
      const auth = getAuth()
      signOut(auth);

      commit('setUser', null)
    }
  },
  modules: {
  }
})

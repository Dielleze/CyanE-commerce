import { createStore } from 'vuex'
import {getAuth, signOut} from 'firebase/auth'
export default createStore({
  state: {
    user: null,
    products: [],
  },
  getters: {
  },
  mutations: {
    setUser(state, user){
      state.user = user;
    },
    setProducts(state, products){
      state.products = products;
    },
    addProduct(state, product){
      state.products.push(product);
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
    },
    async fetchProducts({ commit }) {
      const res = await fetch('http://localhost:3000/products');
      const products = await res.json();
      commit('setProducts', products)
     },
    async createProducts({ commit }, newProduct){
      const res = await fetch('http://localhost:3000/products',
        {
          method:'post',
          body: JSON.stringify({ newProduct }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
      const result = res.json();
      console.log(result);
      commit('addProduct', result);
    }
  },
  modules: {
  }
})

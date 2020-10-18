import Vue from 'vue';
import Vuex from 'vuex';
import services, { setHeaderToken } from '@/http';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async ACTION_STORE_TOKEN({ dispatch }, password) {
      setHeaderToken(password);
      localStorage.setItem('token', password);

      return dispatch('ACTION_GET_PRODUCTS');
    },

    ACTION_GET_PRODUCTS() {
      return services.products.list();
    }
  },
  modules: {
  },
});

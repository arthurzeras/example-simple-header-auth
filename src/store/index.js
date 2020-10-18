import Vue from 'vue';
import Vuex from 'vuex';
import services, { setHeaderToken } from '@/http';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /**
     * salva token/senha no state para validar sessao futuramente
     */
    token: '',
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
    }
  },
  actions: {
    /**
     * Verifica com base no endpoint dos produtos se a senha digitada é valida
     */
    async ACTION_STORE_TOKEN({ dispatch, commit }, password) {
      setHeaderToken(password);
      localStorage.setItem('token', password);

      await dispatch('ACTION_GET_PRODUCTS');

      commit('SET_TOKEN', password);
    },

    ACTION_GET_PRODUCTS() {
      return services.products.list();
    }
  },
  modules: {
  },
});

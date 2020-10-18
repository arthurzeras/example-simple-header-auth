import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:8000/';

export const setHeaderToken = (token) => {
  Vue.http.headers.common.Authorization = token;
};

export default Vue.http;

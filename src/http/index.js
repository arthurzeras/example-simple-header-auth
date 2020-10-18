import Vue from 'vue';
import VueResource from 'vue-resource';
import services from './services';

Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:3006/';

Object.keys(services).forEach((service) => {
  services[service] = Vue.resource('', {}, services[service]);
});

export const setHeaderToken = (token) => {
  Vue.http.headers.common.Authorization = token;
};

export default services;

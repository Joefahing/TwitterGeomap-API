import Vue from 'vue';
import App from './App.vue';
import router from './router';


import VueGoogleHeatmap from 'vue-google-heatmap';

 
Vue.use(VueGoogleHeatmap, {
  apiKey: process.env.GOOGLE_MAP_KEY
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

import Vue from 'vue';
import VueGoogleHeatmap from 'vue-google-heatmap';
import App from './App.vue';
import router from './router';

Vue.use(VueGoogleHeatmap,{
  apiKey: process.env.GOOGLE_MAP_KEY
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

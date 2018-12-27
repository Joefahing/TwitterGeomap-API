import Vue from 'vue';
import App from './App.vue';
import router from './router';

import VueGoogleHeatmap from 'vue-google-heatmap';
 
Vue.use(VueGoogleHeatmap, {
  apiKey: 'AIzaSyB8HXh5SQwxFA_wogoj1uwpWlVNJ2YbpLQ'
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

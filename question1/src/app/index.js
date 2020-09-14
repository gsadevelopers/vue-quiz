import Vue from 'vue';

import WebApp from './WebApp.vue';
import router from './router';

/**
 * The entry point to the app.
 */
new Vue({
  el: '#app',
  router,
  render: h => h(WebApp),
  components: {
    WebApp,
  },
});

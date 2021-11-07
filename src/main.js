import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/hamburger.css';
import './tailwind.css';
import router from './router';
import store from './store';

router.beforeEach(() => {
  store.dispatch('toggleMenu', false);
});

createApp(App).use(store).use(router).mount('#app');

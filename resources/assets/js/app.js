
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('pizza-list', require('./components/PizzaList.vue'));
Vue.component('topping-list', require('./components/ToppingsList.vue'));
Vue.component('customize-pizza', require('./components/ConfigurePizza.vue'));

import { store } from './store';

window.app = new Vue({
    el: '#app',

    store: store,
});

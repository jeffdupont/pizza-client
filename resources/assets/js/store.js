import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        pizzas: [],
        toppings: [],

        pizza: {},
        topping: {},
        pizza_toppings: [],

        action: 'dashboard',

        loaded: {
            pizzas: false,
            toppings: false,
            pizza_toppings: false
        }
    },

    getters: {
        pizzaToppings(state) {
            return state.pizza_toppings;
        },
        availableToppings(state) {
            return state.toppings;
        }
    },

    mutations: {
        createPizza(state, pizza) {
            // console.log('create pizza');
            state.pizzas.push(pizza);
        },
        createTopping(state, topping) {
            // console.log('create topping');
            state.topping = {};
            state.toppings.push(topping);
        },
        editPizza(state, id) {
            // console.log('edit pizza');
            state.pizza = state.pizzas.find(pizza => {
                return pizza.id == id;
            });

            state.action = "customize";
            state.loaded.pizza_toppings = false;

            axios.get('https://pizzaserver.herokuapp.com/pizzas/' + state.pizza.id + '/toppings')
                .then(response => {
                    state.pizza_toppings = response.data;
                    state.loaded.pizza_toppings = true;
                })
                .catch(error => {
                    console.error(error);
                    state.pizza_toppings = [];
                    state.loaded.pizza_toppings = true;
                });

        },
        addTopping(state, topping) {
            topping.display = false;
            state.pizza_toppings.push(topping);
        },
        showDashboard(state) {
            state.action = "dashboard";

            state.pizza = {};
            state.topping = {};
            state.pizza_toppings = [];
        },
        loadToppings(state) {
            state.loaded.toppings = false;
            axios.get('https://pizzaserver.herokuapp.com/toppings')
                .then(response => {
                    // add display property
                    response.data.filter(item => {
                        item.display = true;
                        return item;
                    });
                    state.toppings = response.data;
                    state.loaded.toppings = true;
                });
        },
        loadPizzas(state) {
            state.loaded.pizzas = false;
            axios.get('https://pizzaserver.herokuapp.com/pizzas')
                .then(response => {
                    state.pizzas = response.data;
                    state.loaded.pizzas = true;
                });
        }
    },

    actions: {
        "pizza-created": function(context, pizza) {
            context.commit('createPizza', pizza);
        },
        "topping-created": function(context, topping) {
            context.commit('createTopping', topping);
        },
        "customize-pizza": function(context, id) {
            context.commit('editPizza', id);
        },
        "add-topping": function(context, topping) {
            context.commit('addTopping', topping);
        },
        "dashboard": function(context) {
            context.commit('showDashboard');
        },
        "load-toppings": function(context) {
            context.commit('loadToppings');
        },
        "load-pizzas": function(context) {
            context.commit('loadPizzas');
        }
    }
});

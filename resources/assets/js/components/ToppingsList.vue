<template lang="html">
    <div class="panel panel-default">
        <div class="panel-heading">Toppings</div>

        <div class="panel-body">

            <create-topping></create-topping>

            <div v-if="loaded">
                <dl v-for="topping in toppings" v-show="topping.display">
                    <dt>{{ topping.name }}</dt>
                    <a @click.prevent="addTopping(topping)">add</a>
                </dl>
            </div>
            <div v-else>
                Loading toppings...
            </div>
        </div>
    </div>
</template>

<script>
import CreateTopping from './CreateTopping.vue';

export default {
    computed: {
        toppings() {
            return this.$store.getters.availableToppings;
        },
        loaded() {
            return this.$store.state.loaded.toppings;
        }
    },

    components: {
        CreateTopping
    },

    methods: {
        addTopping(topping) {
            return axios.post('https://pizzaserver.herokuapp.com/pizzas/' + this.$store.state.pizza.id + '/toppings', {
                topping_id: topping.id
            }).then(response => {
                this.$store.dispatch('add-topping', topping);
            }).catch(error => {
                console.log(error)
            })
        }
    },

    mounted() {
        this.$store.dispatch('load-toppings');
    }
}
</script>

<style lang="css">
</style>

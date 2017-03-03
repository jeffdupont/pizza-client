<template lang="html">
<div class="panel panel-default">
    <div class="panel-heading">Pizzas</div>

    <div class="panel-body">

        <create-pizza></create-pizza>

        <div v-if="loaded">
            <dl v-for="pizza in pizzas">
                <dt>{{ pizza.name }}</dt>
                <dd>{{ pizza.description }}</dd>
                <a @click.prevent="editPizza(pizza.id)">Customize</a>
            </dl>
        </div>
        <div v-else>
            Loading pizzas...
        </div>
    </div>
</div>
</template>

<script>
import CreatePizza from './CreatePizza.vue';

export default {
    computed: {
        pizzas() {
            return this.$store.state.pizzas;
        },
        loaded() {
            return this.$store.state.loaded.pizzas;
        }
    },

    components: {
        CreatePizza
    },

    methods: {
        editPizza(id) {
            this.$store.dispatch('customize-pizza', id);
        }
    },

    mounted() {
        this.$store.dispatch('load-pizzas');
    }
}
</script>

<style lang="css">
</style>

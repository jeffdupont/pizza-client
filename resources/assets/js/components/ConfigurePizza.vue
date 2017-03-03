<template lang="html">
<div class="panel panel-default">
    <div class="panel-heading">Build Pizza <a @click.prevent="showDashboard()">Back to Dashboard</a></div>

    <div class="panel-body">

        <form>
          <div class="form-group">
            <label>Name</label>
            {{ pizza.name }}
          </div>
          <div class="form-group">
            <label>Description</label>
            {{ pizza.description }}
          </div>
        </form>

        <h5>Toppings</h5>
        <div v-if="loaded">
            <dl v-for="topping in toppings">
                <dt>{{ topping.name }}</dt>
            </dl>
        </div>
        <div v-else>
            Loading toppings...
        </div>

    </div>
</div>
</template>

<script>
export default {
    computed: {
        pizza() {
            return this.$store.state.pizza;
        },
        toppings() {
            return this.$store.getters.pizzaToppings;
        },
        loaded() {
            return this.$store.state.loaded.pizza_toppings;
        }
    },

    methods: {
        showDashboard() {
            this.$store.dispatch('dashboard');
        }
    }
}
</script>

<style lang="css">
</style>

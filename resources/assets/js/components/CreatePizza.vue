<template lang="html">
<div class="form-container">
    <form>
      <div class="form-group">
        <label>Name</label>
        <input v-model="pizza.name" placeholder="Pizza name" class="form-control">
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea v-model="pizza.description" class="form-control"></textarea>
      </div>
      <a href="#add" class="btn btn-primary"
          @click="addPizza">
          <i class="glyphicon glyphicon-plus"></i> Create Pizza</a>
    </form>
</div>
</template>

<script>
export default {
    computed: {
        pizza() {
            return this.$store.state.pizza;
        }
    },

    methods: {
        addPizza: function() {
            return axios.post('https://pizzaserver.herokuapp.com/pizzas', {
                pizza: this.$store.state.pizza
            }).then(response => {
                this.$store.dispatch('pizza-created', response.data);
                this.$store.dispatch('customize-pizza', response.data.id);
            }).catch(error => {
                console.log(error)
            })
        }
    },

}
</script>

<style lang="css">
</style>

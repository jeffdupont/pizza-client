<template lang="html">
    <div class="form-container">
        <form>
          <div class="form-group">
            <label>Name</label>
            <input v-model="topping.name" placeholder="Topping name" class="form-control">
          </div>
          <a href="#add" class="btn btn-primary"
              @click="addTopping">
              <i class="glyphicon glyphicon-plus"></i> Create Topping</a>
        </form>
    </div>
</template>

<script>
export default {
    computed: {
        topping() {
            return this.$store.state.topping;
        }
    },

    methods: {
        addTopping: function() {
            return axios.post('https://pizzaserver.herokuapp.com/toppings', {
                topping: this.topping
            }).then(response => {

                this.$store.dispatch('topping-created', response.data);

            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

<style lang="css">
</style>

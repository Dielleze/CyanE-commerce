
<template>

    <form @submit.prevent="createProduct">
        <div class="from-group" >
            <label for="name" >Name:</label>
            <input id="name"/>
        </div>
        <div class="from-group">
            <label for="description" >Description:</label>
            <input id="description"/>
        </div>
        <button>Create</button>
    </form>
</template>

<script>

    export default{
        data() {
            return {
                newProduct:{
                    name: '',
                    description: ''
                },
                allProducts: this.$store.state.products
            }
        },
        methods: {
            async createProduct() {
                this.$store.dispatch('createProducts', { ...this.newProduct})
            }
        }
    }
</script>
 
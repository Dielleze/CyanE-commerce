
<template>

    <form @submit.prevent="createProduct">
        <div class="from-group" >
            <label for="title" >Name:</label>
            <input id="title" v-model="newProduct.title"/>
        </div>
        <div class="from-group">
            <label for="description" >Description:</label>
            <input id="description" v-model="newProduct.description"/>
        </div>
        <button>Create</button>
    </form>
</template>

<script>

    export default{
        data() {
            return {
                newProduct:{
                    title: '',
                    description: ''
                },
                allProducts: this.$store.state.products,
            }
        },
        methods: {
            async createProduct() {
                this.$store.dispatch('createProducts', { ...this.newProduct})
            }
        }
    }
</script>
 
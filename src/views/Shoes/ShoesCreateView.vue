
<template>

    <form @submit.prevent="createProduct">
        <div class="from-group" >
            <label for="title" >Name:</label>
            <input class="input" id="title" v-model="newProduct.title"/>
        </div>
        <div class="from-group">
            <label for="description" >Description:</label>
            <input class="input" id="description" v-model="newProduct.description"/>
        </div>
        <div class="from-group">
            <label for="price" >Price:</label>
            <input class="input" id="price" v-model="newProduct.price"/>
        </div>
        <div class="from-group1">
            <label for="image" >Image:</label>
            <input type="file" id="image"/>
        </div>
        <button>Create</button>
    </form>
    <FooterView/>
</template>

<script>
    import FooterView from '../FooterView.vue';
    export default{
    data() {
        return {
            newProduct: {
                title: "",
                description: "",
                price: "",
                image: "",
            },
            allProducts: this.$store.state.products,
        };
    },
    methods: {
        async createProduct() {
            this.$store.dispatch("createProducts", { ...this.newProduct });
        }
    },
    components: { FooterView }
}
</script>
 <style scoped>
    form {
        max-width: 500px;
    margin: 0 auto;
    padding: 50px;
    }

    .from-group {
        margin-bottom: 20px;
    }
    .input {
        width: 100%;
        padding: 10px;
        border: none;
        font-size: 1.2rem;
        border: 1px solid #ccc;
        border-radius: 15px;
    }

    label {
        display: block;
        margin-bottom: 5px;
    }

    input[type="file"] {
        margin-left: 10px;
    }

    button {
        margin-top: 20px;
        background-color: #acc3dc;
        color: #fff;
        padding: 15px 20px;
        border: none;
        border-radius: 15px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0062cc;
    }
</style>
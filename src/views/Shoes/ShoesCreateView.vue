<template>
  <div>
    <h1>Add a new product</h1>
    <form @submit.prevent="addProduct">
      <label>Name:</label>
      <input class='input' type="text" v-model="product.tittle" required>

      <label>Price:</label>
      <input type="number" class='input' v-model="product.price" required>
      
      <label>Category:</label>
      <select class="input" v-model="product.category" required>
        <option v-for="category in categories" :key="category">{{ category }}</option>
      </select>
      
      <label>Description:</label>
      <textarea class='input' v-model="product.description" required></textarea>
      
      
      <button type="submit">Add product</button>
    </form>
    <FooterView/>
  </div>
</template>

<script>
    import FooterView from '../FooterView.vue';
    import axios from 'axios'
    export default{
        data() {
    return {
      product: {
      tittle: '',
      description: '',
      price: '',
      category: ''
      },
      categories: ['bags', 'shoes', 'clothes']
    }
  },
  methods: {
    addProduct() {
      let apiURL = "http://localhost:3000/products/create";      
      axios.post(apiURL, this.product)
        .then(response => {
          console.log('Product added successfully', response);
          this.product = {
          name: '',
          description: '',
          price: '',
          category: '',
          }
        })
        .catch(error => {
          console.error(error);
        });
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
                margin-bottom: 20px;
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
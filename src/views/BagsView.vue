<template>
  <div>
    <h1>Add a new product</h1>
    <form @submit.prevent="addProduct">
      <label>Name:</label>
      <input type="text" v-model="product.tittle" required>
      
      <label>Description:</label>
      <textarea v-model="product.description" required></textarea>
      
      <label>Price:</label>
      <input type="number" v-model="product.price" required>
      
      <label>Category:</label>
      <select v-model="product.category" required>
        <option v-for="category in categories" :key="category">{{ category }}</option>
      </select>
      
      <button type="submit">Add product</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
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
  }
}
</script>




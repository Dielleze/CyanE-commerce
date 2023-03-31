<template>
  <div class="about">
    <h1>Shoes page</h1>
  </div>
  <div class="container">
    <h2 class="title">Product List</h2>
    <ul>
      <li v-for="product in products"
       v-bind:key="product.id" class="product-item">
        <h3>{{ product.name }}</h3>
        <p class="description">{{ product.description }}</p>
        <p class="price">Price: {{ product.price }}</p>
      </li>
    </ul>
  </div>
  <FooterView/>
</template>

<script>
  
  import FooterView from './FooterView.vue';
  export default {
    name: "ProductList",
    data(){ 
      return {
        products: [{
              id: 1,
              name: "Product 1",
              description: "This is product 1",
              price: 10,
            },
            {
              id: 2,
              name: "Product 2",
              description: "This is product 2",
              price: 20,
            },
            {
              id: 3,
              name: "Product 3",
              description: "This is product 3",
              price: 30,
            },
          ],
      }
    },
    components:{ FooterView }
  }
</script>

<style scoped>

.container{
  display: flex;
  flex-direction: row;
}
.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.product-item {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.product-item h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.description {
  margin-top: 0;
  margin-bottom: 10px;
}

.price {
  margin-top: 0;
  font-weight: bold;
}
</style>

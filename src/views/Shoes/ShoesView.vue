<template>
  <div class="about">
    <h1>Shoes page</h1>
  </div>
  <div class="container">
    <h2 class="title">Product List</h2>
    <ul>
      <li v-for="product in this.products"
       :key="product.id" class="product-item">
        <h3>{{ product.title }}</h3>
        <p class="description">{{ product.description }}</p>
        <!--<p class="price">Price: {{ product.price }}</p>-->
      </li>
    </ul>
  </div>
  <FooterView/>
</template>

<script>
  import FooterView from '../FooterView.vue';
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['products'])
    },
    mounted() {
      this.$store.dispatch('fetchProducts');
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

<template>
  <Header />
  <router-view/>
  <FooterView />
</template>

<script>
  import Header from './components/Header';
import FooterView from './views/FooterView.vue';

  export default {
    components:{
    Header,
    FooterView
}
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-weight: bold;
}

nav {
  padding: 20px;
  margin-right: 50px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>

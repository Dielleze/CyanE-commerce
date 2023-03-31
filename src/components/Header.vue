<!-- eslint-disable vue/return-in-computed-property -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
  <div class="content">
      <h1>Cyan</h1>
  </div>
  <div class="overlay"></div>
  </header>
    <nav>
      <ul>
        <li 
          v-for="item in navigationItems"
          v-bind:key="item.name"
        >
          <router-link v-bind:to="item.path">{{item.name}}</router-link>
        </li>
        <li v-if="user"> Hello {{ user.email }}<Button @click="handleLogout">Logout</Button></li>

          <div class="div" v-else>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </div>
      </ul>
    </nav>
</template>

<script>

import { mapState } from 'vuex';
  export default {
    computed:{
      ...mapState(['user'])
    },
    data() {
      return{
        title: 'Cyan',
        navigationItems: [
          { path: '/', name: 'Home' },
          { path: '/about', name: 'About Us' },
          { path: '/womensfashion', name: 'Women\'s Fashion' },
          { path: '/bags', name: 'Bags' },
          { path: '/shoes', name: 'Shoes' },
          { path: '/contactus', name: 'Contact Us' }
        ]
      }
    }
    ,
    methods: {
      handleLogout(){
        this.$store.dispatch('logoutUser', null);
      }
    }
  }
</script>

<style scoped>


  header {
      height: 100%;
      text-align: center;
      background: url(https://unsplash.imgix.net/45/ZLSw0SXxThSrkXRIiCdT_DSC_0345.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=857f07b76abac23a7fb7161cc7b12a46) center no-repeat;
      /* Image Credit: Unsplash.me */
      background-size: cover;
  }
  header h1 {
    margin: 0;
  }
  .content {
    display: inline-block;
    color: #fff;
    border: 7px solid #fff;
    padding: .90em 5em;
    background-color: rgba(0, 0, 0, 0.2);
  }


  h1{
    font-size: 2rem;
  }
  ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .div li {
  margin-right: 20px;
  }

  a:link,
  a:visited{
    text-decoration: none;
    color: black;
  }
  .link:hover {
  transform: scale(1.9);
  background-color: gray;
  color: white;
}
</style>
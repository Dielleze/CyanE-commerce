<template>
  <Header />
  <router-view/>
</template>

<script>
import Header from './components/Header';
import { getAuth, onAuthStateChanged } from '@firebase/auth';

  export default {
    created(){
      const auth = getAuth();
      onAuthStateChanged(auth, (userAuth)=>{
        if(userAuth){
          this.$store.dispatch('userLogin', userAuth)
        }
      })
    },
    components:{
    Header,
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

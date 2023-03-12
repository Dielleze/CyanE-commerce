<template>
  <div class="login-container">
    <form @submit.prevent="handleRegister" class="login-form">
      <h2>Login</h2>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" id="email" v-model="email" placeholder="Enter Email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" placeholder="Enter password">
      </div>
      <button type="submit" class="login-button">Register</button>
    </form>
  </div>
  <FooterView/>
</template>

<script>
import FooterView from './FooterView.vue';
import '@/firebase';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

export default {
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        async handleRegister() {
          const auth = getAuth();
          const { user } = await createUserWithEmailAndPassword(auth, this.email, this.password)
          console.log(user);
          // signOut(auth);
          // this.$router.push('./login')
        }
    },
    components: { FooterView }
}
</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.login-form {
  padding: 3rem;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #9fbfe221;
  max-width: 400px;
  width: 100%;
}

.login-form h2 {
  font-size: 2rem;
  text-align: center;
  color: #444;
}

.form-group {
  margin-bottom: 2rem;
}

.form-group label {
  display: block;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #444;
}

.form-group input {
  display: block;
  width: 100%;
  padding: 0.6rem;
  border-radius: 3px;
  border: none;
  font-size: 1.2rem;
  color: #333;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}

.login-button {
  display: block;
  margin: 1rem auto 0;
  padding: 0.5rem;
  background-color: #acc3dc;
  color: #fff;
  border: none;
  border-radius: 100px;
  font-size: 1.2rem;
  text-transform: uppercase;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin-top:  3rem;
  width: 50%;
}

.login-button:hover {
  background-color: #0062cc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
</style>

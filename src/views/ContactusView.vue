<template>
  <section class="firstSection">
    <div class="container">
        <div class="wrapper">
          <div class="photoWrapper">
            <img src="https://www.vandolph.co.za/wp/wp-content/uploads/2018/09/contact-us-background-2.jpg" alt="" />
          </div>
          <div class="textSection">
            <h1>Contact us</h1>
            <p>
              Whenever, wherever
            </p>
          </div>
        </div>
      </div>
  </section>
  <div class="contact-form">
    <h2>Contact us via form</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="contact.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="contact.email" required>
      </div>
      <div class="form-group">
        <label for="subject">Subject:</label>
        <input type="text" id="subject" v-model="contact.subject" required>
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="contact.message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    <div v-if="showSuccess" class="success-message">
      <p>Your message has been sent!</p>
    </div>
  </div>
  <FooterView/>
</template>

<script>
  import FooterView from './FooterView.vue';
  import axios from 'axios'

  export default {
    components:{ FooterView },
    data() {
    return {
      contact: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      showSuccess: false,
    };
  },
  methods: {
    submitForm() {
      let apiUrl = 'http://localhost:3000/contacts'
      axios.post(apiUrl, this.contact)
      .then(response => {
        console.log(response)
        this.contact = {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
      })
      this.showSuccess = true;
    },
  },
  }

</script>

<style scoped>
  .firstSection {
    background: url("https://www.vandolph.co.za/wp/wp-content/uploads/2018/09/contact-us-background-2.jpg") no-repeat
      center;
    background-size: cover;
    background-position: center;
    position: relative;
  }
  img{
    width: 50%;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    width: 95%;
  }
  .photoWrapper {
    width: 45%;
  }
  .textSection {
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
  }
  h1 {
    font-size: 33px;
    color: white;
  }

  p {
    font-size: 14px;
    color: white;
  }
  a{
    color:rgb(90, 187, 228);
    text-decoration: underline;
  }
  .contact-form {
    max-width: 500px;
    margin: 0 auto;
    padding: 50px;
  }
  .contact-form h2 {
    text-align: center;
  }
  .form-group {
    margin-bottom: 20px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input[type="text"],
  input[type="email"]
  {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 50px;
  }
  textarea {
    height: 150px;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 25px;
  }
  button[type="submit"] {
    background-color: #acc3dc;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
  }
  button[type="submit"]:hover {
    background-color: #0062cc;
  }
.success-message {
  background-color: #DFF2BF;
  color: #4F8A10;
  padding: 10px;
  border: 1px solid #4F8A10;
  border-radius: 5px;
  margin-top: 20px;
}
</style>
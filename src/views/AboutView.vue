<!-- eslint-disable vue/no-parsing-error -->
<template>
  <section class="background firstsection">
    <div class="box-main">
      <div class="firstHalf">
        <p class="text-big">About US</p>
        <p class="text-small">
          Welcome to Cayn, your ultimate destination for high-quality products at affordable prices.
          At Cyan, we believe that shopping should be a fun and hassle-free experience, and we're committed to providing
          our customers with the best possible service and support.
          Our story began with a simple idea: to create an online shopping destination where
          people could find everything they need for their home, lifestyle, and hobbies.
          We started small, but with a lot of hard work and dedication, 
          we've grown into a thriving e-commerce store that serves customers all over the world.
        </p>
        <br>
        <p class="text-small">
          At Cyan, we're passionate about providing our customers with the best possible 
          shopping experience. That's why we offer a wide range of high-quality products
          at affordable prices, with fast and reliable shipping and excellent customer service.
          Whether you're looking for the latest gadgets, stylish home decor, or outdoor gear for
          your next adventure, we've got you covered. We're constantly adding new products to our store,
          so be sure to check back often for the latest and greatest deals.
        </p>
        <br>
        <p class="text-small">
          Thank you for choosing Cyan, and happy shopping!
        </p>
      </div>
    </div>
  </section>
  <section class="service">
    <h1 class="h-primary center" style="margin-top:30px;text-align:center;">
      What our costumers says about us
    </h1>
    <div id="services">
      <div class="box">
        <img src="https://multifiles.pressherald.com/uploads/sites/10/2022/11/AP22320370266647-e1678221302762.jpg" alt="picture goes here"/>
          <p class="center">
            <p href="#xyz" style="text-decoration:none;color:black;font-weight:bold;font-family: 'Langar', cursive;">
              Dielleza 
            </p>
          </p>
          <p style="font-family: 'Langar', cursive;">I absolutely love shopping at Cyan! The website is easy to navigate, and I always find exactly what I'm looking for.
            The prices are great, and the shipping is fast and reliable.
          </p>
      </div>
        <div class="box">
          <img src="https://i.pinimg.com/564x/9e/ed/f8/9eedf85bfa6493bb4031f103370b414c.jpg" alt="picture goes here"/>
          <p class="center">
            <p href="#abc" style="text-decoration:none;color:black; font-weight:bold;font-family: 'Langar', cursive;">
              Emily
            </p>
          </p>
          <p style="font-family: 'Langar', cursive; ">I've been a loyal customer of Cyan for years, and for good reason.
            They offer a fantastic selection of products at unbeatable prices, and the quality is always top-notch.</p>
        </div>
          <div class="box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVvD_i9a6f5LrW0rlFkiKY33KIskHfUVSuzw&usqp=CAU" alt="picture goes here"/>
            <br>
            <p class="center">
              <p href="#xyz" style="text-decoration:none;color:black; font-weight:bold;font-family: 'Langar', cursive;">
                Asya
              </p>
            </p>
              <p style="font-family: 'Langar', cursive; ">
                I recently discovered Cyan and I'm already hooked.
                Not only do they have a great selection of products, but their website is user-friendly and easy to use.
                I also love the fact that they offer free shipping on orders over a certain amount.
              </p>
          </div>
      </div>
      
    </section>
  <FooterView/>
</template>

<script>
  import FooterView from './FooterView.vue';

  export default {
    components: {
      FooterView
    }
  }
</script>

<style scoped>
	.box-main {
		display: flex;
		justify-content: center;
		align-items: center;
    background-color: #f4f4f4;
		color: #004d00;
	}

	.firstHalf {
		width: 75%;
		display: flex;
		flex-direction: column;
		justify-content: center
	}

	.text-big {
    display: flex;
		justify-content: center;
		align-items: center;
		font-family: 'Piazzolla', serif;
		font-weight: bold;
		font-size: 41px;
	}

	.text-small {
		font-family: 'Sansita Swashed';
		font-size: 18px;
	}

	#service {
		margin: 34px;
		display: flex;
	}

	#service .box {
		padding: 100px;
		margin: 3px 6px;
		border-radius: 28px;
	}

	#service .box img {
		margin-top: 10px;
		height: 150px;
		margin: auto;
		display: block;
		border-radius: 200px;
	}

	#service .box p {
    font-family: sans-serif;
		text-align: center;
	}

	#services {
		margin: 34px;
		display: flex;
	}

	#services .box {
		padding: 100px;
		margin: 3px 6px;
		border-radius: 28px;
	}

	#services .box img {
		margin-top: 10px;
		height: 150px;
		margin: auto;
		display: block;
		border-radius: 100px;
	}

	#services .box p {
		font-family: sans-serif;
		text-align: center;
	}
</style>
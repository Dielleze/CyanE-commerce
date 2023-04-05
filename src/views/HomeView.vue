<template>
    <section class="section promotion">
    <div class="title">
      <h2>Koleksionet</h2>
    </div>

    <div class="promotion-layout container">
      <div class="promotion-item">
          <img src="https://img.freepik.com/premium-photo/pair-black-shoes-are-sitting-stool-front-brick-wall_361821-2975.jpg?w=2000" alt="" />
                <div class="promotion-content">
                  <h3><title>hi</title></h3>
                  <a href="">text</a>
                </div>
              </div>
      <div class="promotion-item">
          <img src="https://img.freepik.com/premium-photo/pair-black-shoes-are-sitting-stool-front-brick-wall_361821-2975.jpg?w=2000" alt="" />
                <div class="promotion-content">
                  <h3><title></title></h3>
                  <a href="">text</a>
                </div>
              </div>
              <div class="promotion-item">
          <img src="https://img.freepik.com/premium-photo/pair-black-shoes-are-sitting-stool-front-brick-wall_361821-2975.jpg?w=2000" alt="" />
                <div class="promotion-content">
                  <h3><title></title></h3>
                  <a href="">text</a>
                </div>
            </div>
            <div class="promotion-item">
          <img src="https://img.freepik.com/premium-photo/pair-black-shoes-are-sitting-stool-front-brick-wall_361821-2975.jpg?w=2000" alt="" />
                <div class="promotion-content">
                  <h3><title></title></h3>
                  <a href="">text</a>
                </div>
              </div>
            </div>
            

  </section>

  <section class="section products">
    <div class="title">
      <h2>Produktet e Reja</h2>
    </div>
    
    <div class="product-layout">
         
              <div class="product">
                <div class="img-container">
                  <img src="https://img.freepik.com/premium-photo/pair-black-shoes-are-sitting-stool-front-brick-wall_361821-2975.jpg?w=2000" alt="" />
                  <div class="addCart">
                    <i class="fas fa-shopping-cart"></i>
                  </div>
                </div>
                <div class="bottom">
                  <a href="productDetails.php">name</a>
                  <div class="price">
                    <span>price</span>
                  </div>
                </div>
              </div>
              <div class="product">
                <div class="img-container">
                  <img src="" alt="" />
                  <div class="addCart">
                    <i class="fas fa-shopping-cart"></i>
                  </div>
                </div>
                <div class="bottom">
                  <a href="productDetails.php">name</a>
                  <div class="price">
                    <span>price</span>
                  </div>
                </div>
              </div>
              <div class="product">
                <div class="img-container">
                  <img src="" alt="" />
                  <div class="addCart">
                    <i class="fas fa-shopping-cart"></i>
                  </div>
                </div>
                <div class="bottom">
                  <a href="productDetails.php">name</a>
                  <div class="price">
                    <span>price</span>
                  </div>
                </div>
              </div>
              
    </div>
  </section>
  <FooterView/>
</template>

<script>
// @ is an alias to /src'
import FooterView from './FooterView.vue';
export default {
  name: 'HomeView',
  components: { FooterView }
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
.section {
  padding:  0 5rem ;
}

.section .title {
  text-align: center;
  margin-bottom: 5rem;
}

.section .title h2 {
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
}

.section .title span {
  color: var(--grey2);
}


.promotion-layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.promotion-item {
  overflow: hidden;
  position: relative;
  z-index: 0;
}

.promotion-item img {
  height: 100%;
  width: 100%;
}

.promotion-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--white);
  text-align: center;
  z-index: 3;
}

.promotion-content h3 {
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5rem;
  padding: 0.7rem 1.4rem;
  font-size: 1.7rem;
  font-weight: inherit;
  margin-bottom: 1rem;
}

.promotion-content a {
  font-size: 1.4rem;
}

.promotion-content a:hover {
  color: var(--primary);
}

.promotion-item:hover .promotion-content h3 {
  background-color: var(--white);
  color: var(--black);
}

.promotion-item::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  transition: all 500ms ease-in-out;
}

.promotion-item:hover::after {
  visibility: visible;
  opacity: 1;
}

@media only screen and (max-width: 1200px) {
  .promotion-content h3 {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 5rem;
    padding: 0.7rem 1.4rem;
    font-size: 1.6rem;
  }
}

@media only screen and (max-width: 996px) {
  .promotion-layout {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 768px) {
  .promotion-layout {
    grid-template-columns: 1fr;
  }
}

.section .product-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 3rem;
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 1.6rem;
}

.product {
  overflow: hidden;
}

.product .img-container {
  position: relative;
  cursor: pointer;
}

.product .img-container img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.product .bottom {
  padding: 1rem;
  text-align: center;
}

.product .bottom a {
  margin-bottom: 1rem;
  font-weight: inherit;
  font-size: 1.5rem;
}

.product .bottom a:hover {
  color: var(--primary);
}

.product .bottom span {
  color: var(--primary);
  font-size: 1.8rem;
}

.product .addCart {
  position: absolute;
  right: 0;
  bottom: 0.6rem;
  background-color: var(--white);
  border-radius: 50%;
  padding: 1.3rem 1.6rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  transition: all 300ms ease-in-out;
}

.product:hover .addCart {
  border-radius: 1rem 0 0 0;
}

.product .addCart:hover {
  background-color: rgb(255, 70, 70);
  color: var(--white);
}

.product i {
  transition: all 300ms ease-in-out;
}

.product .side-icons {
  position: absolute;
  right: 0;
  top: 30%;
  transform: translate(80%, -50%);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  transition: all 500ms ease-in-out;
}

.product .side-icons span {
  font-size: 1.4rem;
  background-color: var(--white);
  margin: 0.3rem;
  padding: 1rem 1.3rem;
  border-radius: 50%;
  transition: all 300ms ease-in-out;
}

.product .side-icons span:hover {
  background-color: var(--primary);
  color: var(--white);
}

.product:hover .side-icons {
  transform: translate(0%, -50%);
}

@media only screen and (max-width: 996px) {
  .prodouct-layout {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (max-width: 768px) {
  .prodouct-layout {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 567px) {
  .prodouct-layout {
    grid-template-columns: 1fr;
  }
}
</style>
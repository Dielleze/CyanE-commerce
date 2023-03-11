<template>
  <footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">Cyan</h1>
        
    <h2>Contact</h2>
    
    <address>
      5534 Somewhere In. The World 22193-10212<br>
          
      <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Follow us</h2>

      <ul class="nav__ul">
        <li>
          <a href="#">Instagram</a>
        </li>

        <li>
          <a href="#">Facebook</a>
        </li>
            
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Our Fashion</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="#">Women's</a>
        </li>
        
        <li>
          <a href="#">Shoes</a>
        </li>
        
        <li>
          <a href="#">Bags</a>
        </li>
        
        <li>
          <a href="#">Jeans</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2023. All rights reserved.</p>
    
    <div class="legal__links">
      <span>Made with <span class="heart">♥</span> from Cyan</span>
    </div>
  </div>
</footer>
</template>

<style>

.footer {
  display: flex;
  flex-flow: row wrap;
  padding: 30px 30px 20px 30px;
  background-color: #f4f4f4;
}

.footer > * {
  flex:  1 100%;
}

.footer__addr {
  margin-right: 1.25em;
  margin-bottom: 3em;
}

.footer__logo {
  font-family: 'Pacifico', cursive;
  font-size: 1.5rem;
}

.footer__addr h2 {
  margin-top: 1.6em;
  font-size: 15px;
  font-weight: 400;
}

.nav__title {
  font-size: 15px;
}

.footer address {
  font-style: normal;
  color: #999;
}

.footer__btn {
  display: flex;
  align-items: center;
  height: 36px;
  max-width: max-content;
  background-color: #acc3dc;
  border-radius: 100px;
  color: #fff;
  line-height: 0;
  margin: 0.6em 0;
  font-size: 1rem;
  padding: 0 1.3em;
}
.footer__btn:hover {
  background-color: #0062cc;
}

.footer ul {
  list-style: none;
  padding-left: 0;
}

.footer li {
  line-height: 3em;
}

.footer a {
  text-decoration: none;
}

.footer__nav {
  display: flex;
}

.nav__ul a {
  color: #999;
}

.nav__ul--extra {
  column-count: 2;
}

.legal {
  display: flex;
}
  
.legal__links {
  display: flex;
  align-items: center;
}

.heart {
  color: #fd0202;
}

@media screen and (min-width: 24.375em) {
  .legal .legal__links {
    margin-left: auto;
  }
}

@media screen and (min-width: 40.375em) {
  .footer__nav > * {
    flex: 1;
  }
  
  .nav__item--extra {
    flex-grow: 2;
  }
  
  .footer__addr {
    flex: 1 0px;
  }
  
  .footer__nav {
    flex: 2 0px;
  }
}
</style>
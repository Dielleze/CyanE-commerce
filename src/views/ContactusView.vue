<template>
  <section class="backgroundFirstsection">
    <div class="box-main">
      <p class="text-big">Contact US</p>

      <div class="firstHalf">
        <img src="https://wallpaperaccess.com/full/3124512.jpg"/>
        <p class="text-small">
        </p>
        <br>
        <p class="text-small">
        </p>
        <br>
        <p class="text-small">
        </p>
      </div>
    </div>
  </section>
  <FooterView/>
</template>

<script>
  
  import FooterView from './FooterView.vue';
  export default {
    components:{ FooterView }
  }
</script>

<style scoped>
  .backgroundFirstsection{
    display: flex;
    background-color: #f4f4f4;
		color: #004d00;
  }
  img{
    display: flex;
    width: 100%;
    height: 100%;
  }

  .box-main{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .firstHalf {
		width: 75%;
		display: flex;
		flex-direction: row;
		justify-content: center
	}

	.text-big {
    display: flex;
		justify-content: center;
		align-items: center;
    flex-direction: row;
		font-family: 'Piazzolla', serif;
		font-weight: bold;
		font-size: 41px;
	}

	.text-small {
		font-family: 'Sansita Swashed';
		font-size: 18px;
	}

</style>
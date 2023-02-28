<template>
  <div class="home" ref="home">
    <h2>Home</h2>
    <h1>Products</h1>
    <div class="products">
      <div v-for="product in productsArr" v-bind:key="product.id" class="productBlock">
        <h4 class="title">{{ product.title }}</h4>
        <div>
          <div class="img">
            <img v-bind:src="product.image" alt="no">
          </div>  
          <div class="price">{{ product.price }} $</div>
          <button class="buttonBuy">Buy</button>
        </div>
        
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
       productsArr: null,
    }
  },
  beforeMount(){
    axios
      .get('https://fakestoreapi.com/products')
      .then((products)=>{
        this.productsArr = products.data
        this.$refs.home.style.background = "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(171,85,24,1) 10%)"
      })
  },
  methods(){

  },
}
</script>

<style scoped>
  .home{
    text-align: center;
    padding: 30px;
  }
  .products{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: white;
    border-radius: 15px;
    gap: 15px;
    margin: 15px auto;
    padding: 20px;
    max-width: 1000px;
  }
  .productBlock{
    box-shadow: 1px 1px 7px 2px rgba(0, 0, 255, .2);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
    width: 170px;
  }
  .title{
    max-width: 150px;
  }
  .img>img{
    max-width: 100px;
    max-height: 100px;
  }
  .buttonBuy{
    padding: 3px 15px;
    margin: 5px;
    background-color: rgb(42, 204, 216);
    border: none;
    border-radius: 5px;
  }
  .buttonBuy:hover{
    cursor: pointer;
    background-color: rgb(144, 233, 54);
  }
</style>
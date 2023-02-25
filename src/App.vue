<template>
  <div>
    <div class="backgroundImg">
      <div class="nav">
        <router-link to="/todo">to do</router-link>
        <router-link to="/">home</router-link>
        <router-link to="/profile">profile</router-link>
      </div>
      <!-- <ToDOList/> -->

      <div class="modalWindow">
        <h3 ref="title">{{ title }}</h3>
        <div v-if="showModal">
          <Modal titleText="new text" v-bind:bodyText="bodyText" v-on:close="toggleShowModal">
            <p>slots</p>
          </Modal>
        </div>
        <button v-on:click="toggleShowModal">Show Modal</button>
      </div>
      <router-view/>
    </div>
  </div>
  
</template>

<script>
import Modal from './components/Modal.vue'
import ToDOList from './view/ToDOList.vue'

export default {
  name: 'App',
  components: { Modal, ToDOList },
  data(){
    return{
      showModal: false,
      title: 'Vue 3',
      bodyText: 'body text'
    }
  },
  methods:{
    toggleShowModal(){
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Tilt Neon', cursive;
}
.nav{
  display: flex;
  padding: 15px;
  max-width: 300px;
  justify-content: space-between;
  margin: 0 auto;
  color: aliceblue;
}
.backgroundImg{
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(../public/backgroundimg.jpg);
  background-repeat: no-repeat;
  background-position: center center;
}
.modalWindow{
  width: 30%;
  margin: 10px auto;
  text-align: center;
}
.modalWindow>div{
  position: absolute;
  top: 0;
  left: 0;
}
.modalWindow>button{
  padding: 10px;
  background-color: aqua;
  border: none;
}
</style>

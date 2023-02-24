<template>
    <div>
        <div class="modalBack" v-on:click.self="closeModal">
            <div class="modalText">
                <h1>{{ titleText }}</h1>
                <p>{{ bodyText }}</p>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['titleText', 'bodyText'],
    data(){
        return{
            text: 'modal'
        }
    },
    methods:{
        closeModal(){
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
.modalBack{
    background-image: url(../../public/modal.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    position: fixed;
    width: 100%;
    height: 100%;
}
.modalText{
    background-color: coral;
    padding: 20px;
    margin: 50px auto;
    width: 400px;
    border-radius: 10px;
    color: white;
}
</style>
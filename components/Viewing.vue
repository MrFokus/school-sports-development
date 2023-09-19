<template>
  <div v-if="photo" class="viewing">
    <div class="card">
      <img :src="photo" alt="">
    </div>
    <div @click="ClosePhoto" class="outer-space">
    </div>
    <button @click="ClosePhoto" class="close"><img :src="require('@/assets/img/close.svg')" alt=""></button>
  </div>
</template>

<script>
export default {
  computed:{
    photo(){
      return this.$store.getters["modal/viewing_photo"]
    },
  },
  methods:{
    ClosePhoto(){
        this.$store.commit('modal/setViewingPhoto', null)
        document.documentElement.style.overflow = 'auto'
    },
  },

}
</script>
<style scoped>
  .close{
    position: absolute;
    z-index: 30;
    max-width: 30px;
    max-height: 30px;
    min-width: 10px;
    min-height: 10px;
    background: none;
    outline: none;
    width: 3vw;
    height: 3vw;
    border: none;
    top: 5%;
    right: 0;
    left: 90%;
    bottom: 0;
  }
  .close img{
    width: 100%;
    height: 100%;
  }
  .viewing{
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .viewing .card{
    position: relative;
    z-index: 22;
  }
  .viewing .card img{
    max-width: 100%;
    width: 100%;
  }
  .viewing .outer-space{
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0,0,0,0.5);
  }
  @media (orientation: portrait){
    .viewing .card{
      max-width: 100vw;
      width: 100vw;
    }
  }
  @media (orientation: landscape) {
    .viewing .card img{
      max-height: 80vh;
      min-width: 70vw;
    }
  }

</style>

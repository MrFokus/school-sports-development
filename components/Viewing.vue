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
    max-width: 50px;
    max-height: 50px;
    min-width: 30px;
    min-height: 30px;
    background: rgba(159, 132, 132, 0.24);
    outline: none;
    width: 3vw;
    height: 3vw;
    border: none;
    top: 5%;
    right: 0;
    left: 90%;
    bottom: 0;
    border-radius: 999px;
    padding: min(2vw, 10px);
    box-sizing: border-box;
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
      max-height: 90vh;
      min-height: 80vh;
      max-width: 100vw;
    }
  }

</style>

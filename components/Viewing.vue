<template>
  <div v-if="photo" class="viewing">
    <div class="card">
      <img :src="photo" alt="">

    </div>
    <div @click="ClosePhoto" class="outer-space">
    </div>
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
      if (window.innerWidth<=425) {
        this.$store.commit('modal/setViewingPhoto', null)
        document.documentElement.style.overflow = 'auto'
      }
    },
  },

}
</script>
<style scoped>
.viewing{
  display: none;
}
@media (max-width: 425px) {
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
    max-width: 100vw;
    width: 100vw;
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
}

</style>

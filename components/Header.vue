<template>
  <header v-if="!viewing" ref="Header">
    <div class="container">
      <div class="call">
        <p>8 (980) 355-66-60</p>
      </div>
      <div class="logo">
        <nuxt-link to="/"><img src="~/assets/img/Logo.svg" alt=""></nuxt-link>
        <nuxt-link class="mobile" to="/"><img src="~/assets/img/mobile-logo.svg" alt=""></nuxt-link>
      </div>
      <div class="container-menu">
        <div @click="menuActive=!menuActive" :class="['burger-menu',{'menu-active':menuActive}]">
          <div class="burger-component"/>
          <div class="burger-component"/>
        </div>
      </div>
      <Menu @close-menu="menuActive=false" v-if="menuActive"/>
    </div>
    <div v-if="menuActive" @click="menuActive=false" class="out-space"/>
  </header>
</template>

<script>
import Menu from "@/components/Menu"

export default {
  data() {
    return {
      menuActive: false,
    }
  },
  components: {
    Menu,
  },
  computed:{
    viewing(){
      return this.$store.getters["modal/viewing_photo"]
    }
  },
  methods:{
    handleScroll(){
      if(window.innerWidth <=425){
        if (window.scrollY>10 && this.$refs.Header.style){
          this.$refs.Header.style.backgroundColor='#181818'
        }
        else {
          this.$refs.Header.style.background='none'
        }
      }
      else{
        this.$refs.Header.style.backgroundColor='#EDB406'
      }
    }
  },

  mounted() {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize',this.handleScroll)
  },
}
</script>

<style scoped>


header {
  width: 100%;
  background-color: #EDB406;
  height: fit-content;
  align-items: center;
  justify-content: center;
}

.container {
  width: min(1300px, 100%);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 5px 0;
  position: relative;
}

.out-space {
  position: fixed;
  width: 100vw;
  height: 1000vh;
}

img {
  height: fit-content;
}

div {
  align-items: center;
}

.call {
  flex-direction: column;
  align-items: flex-start;
}

.logo {
  justify-content: center;
}

.logo > a {
  display: inline-block;
  height: fit-content;
  line-height: 0;
}

.call > p {
  font-size: 18px;
  color: white;
}

.call > button {
  outline: 0;
  border: 0;
  background: none;
  font-size: 14px;
  color: white;
}

.call > button:active {
  color: white;
}

.container-menu {
  justify-content: flex-end;
}

.burger-menu {
  flex-direction: column;
  justify-content: center;
  min-height: 10px;
  min-width: 18px;
  position: relative;
  cursor: pointer;
}

.burger-component {
  position: absolute;
  width: 20px;
  background-color: white;
  border: white 1px solid;
  border-radius: 999px;
  transition: all 0.2s;
}

.burger-component:first-child {
  top: 0;
}

.burger-component:not(.burger-component:first-child) {
  margin-top: 4px;
  bottom: 0;
}

.menu-active .burger-component:first-child {
  transform: rotate(45deg) scale(1.2);
  transform-origin: center center;
  top: 40%;
  right: 0;
}

.menu-active .burger-component:last-child {
  transform-origin: center center;
  transform: rotate(-45deg) scale(1.2);
  bottom: 40%;
  margin: 0;
  right: 0;
}
.mobile {
  display: none !important;
}

@media (max-width: 1439px) and (min-width: 426px) {

  .logo > a > img {
    width: 5.5vw;
  }

  header {
    width: 100%;
    padding: 0 4.9vw;
    background-color: #EDB406;
  }

  .container {
    width: 100%;
    margin: 0.3vw 0;
  }

  .call > p {
    font-size: 1.25vw;
  }

  .call > button {
    font-size: 1vw;
  }

  .burger-menu {
    min-width: auto;
    min-height: auto;
    width: 1.75vw;
    height: 1vw;
  }

  .burger-component {
    width: 100%;
  }
}

@media (max-width: 425px), (max-width: 425px) and (orientation: landscape) {
  .mobile {
    display: flex !important;
    max-height: 100%;
  }
  .mobile>img{
    width: 66px;
    aspect-ratio: 1/1;
  }
  .logo{
    max-height: 100%;
  }

  header {
    /*background: #181818;*/
    background: none;
    padding: 13px 18px;
  }

  .container {
    justify-content: space-between;
    display: flex;
    align-items: center;
    max-height: 100%;

}
  .logo>a:not(.mobile){
    display: none;
  }
  .call {
    display: none;
  }
  .menu{
    top: 130%;
  }
}
</style>

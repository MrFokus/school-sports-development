<template>
  <div class="default">
    <Header  class="header"/>
    <Nuxt />
    <Footer/>
    <ModalPolicy/>
    <viewing/>
<!--    <News/>-->
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ModalPolicy from "@/components/ModalPolicy";
import Viewing from "@/components/Viewing";
import News from "@/components/News"
export default {
  components:{
    Header,
    Footer,
    ModalPolicy,
    Viewing,
    News,
  },
}
</script>


<style scoped>
.default{
  flex-direction: column;
  width: 100%;
}
.header{
  position: sticky;
  top: 0;
  z-index: 999;
}
/*@media (max-width: 425px), (max-width: 425px) and (orientation: landscape) {*/
/*  .default{*/
/*    overflow-x: hidden;*/
/*  }*/

/*}*/
</style>

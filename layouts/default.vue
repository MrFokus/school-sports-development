<template>
  <div class="default">
    <Header  class="header"/>
    <Nuxt />
  </div>
</template>

<script>
import Header from "@/components/Header"
export default {
  components:{
    Header,
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
/*@media (max-width: 425px) {*/
/*  .default{*/
/*    overflow-x: hidden;*/
/*  }*/

/*}*/
</style>

<template>
  <div class="default">
    <Header  class="header"/>
    <Nuxt />
    <footer>

    </footer>
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
footer{
  width: 100%;
  height: 100px;
  background-color: #181818;
}
</style>

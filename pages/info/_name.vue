<template>
  <div class="info">
    <Info :discipline="$store.getters['discipline/active'][$route.params.name]"/>
  </div>
</template>

<script>
import Info from "@/components/Info"
export default {
  // head:{
  //   title:"",
  // },
  middleware:'route',
  components: {
    Info
  },
  //  createdreate(){
  //   console.log()
  //    console.log(this.$store.getters['discipline/active'][this.$route.params.name])
  //    this.$set(this.$data, 'head', this.$store.getters['discipline/active'][this.$route.params.name].head)
  //   // this.head = this.$store.getters['discipline/active'][this.$route.params.name].head
  //   console.log(this.head)
  // },
}
</script>

<style scoped>
.info{
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding: 0 24px;
}
</style>

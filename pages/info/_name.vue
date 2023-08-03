<template>
  <div class="info">
    <Info :discipline="$store.getters['discipline/active'][$route.params.name]"/>
  </div>
</template>

<script>
import Info from "@/components/Info"
export default {
  head() {
    return{
      title: this.$store.getters["discipline/active"][this.$route.params.name].head.title,
      meta: this.$store.getters["discipline/active"][this.$route.params.name].head.meta,
    }
  },
  middleware:'route',
  components: {
    Info
  },
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

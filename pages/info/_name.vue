<template>
  <div class="info">
    <Info :discipline="$store.getters['discipline/active'][$route.params.name]"/>
  </div>
</template>

<script>
import Info from "@/components/Info"
export default {
  middleware:'route',
  components: {
    Info
  }
}
</script>

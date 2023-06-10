<template>
  <div class="gallery">
    <div v-for="s in source" class="video">
      <iframe :src="s" width="640" height="360" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      source:['https://vk.com/video_ext.php?oid=-187206619&id=456239027&hash=10cdf71a2cab19a3&hd=2','https://vk.com/video_ext.php?oid=-187206619&id=456239027&hash=10cdf71a2cab19a3&hd=2','https://vk.com/video_ext.php?oid=-187206619&id=456239027&hash=10cdf71a2cab19a3&hd=2','https://vk.com/video_ext.php?oid=-187206619&id=456239027&hash=10cdf71a2cab19a3&hd=2','https://vk.com/video_ext.php?oid=-187206619&id=456239027&hash=10cdf71a2cab19a3&hd=2']
    }
  }
}
</script>

<style scoped>
.gallery{
  max-width: 100%;
  overflow-x: scroll;
}
.video{
  aspect-ratio: 16/9;
  margin-right: 40px;
  border: #EDB406 1px solid;
}
</style>

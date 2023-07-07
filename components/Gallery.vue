<template>
  <div class="gallery">
    <div v-for="s in source" class="video">
      <iframe class="frame" :src="s" :width="width" :height="height" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      width:0,
      height:0,
      source:['https://vk.com/video_ext.php?oid=-187206619&id=456239027&hash=10cdf71a2cab19a3&hd=2','https://vk.com/video_ext.php?oid=-187206619&id=456239020&hash=7b89e6f41345b686&hd=3','https://vk.com/video_ext.php?oid=-187206619&id=456239023&hash=22ef103f6d90dabc&hd=1','https://vk.com/video_ext.php?oid=-187206619&id=456239031&hash=a89e69b8786fdb3d&hd=2']
    }
  },
  methods:{
    WidthWindow(){
      if(window.innerWidth<=425){
        this.width=0.9*window.innerWidth;
        this.height=this.width*0.5625;
      }else {
        this.width = window.innerWidth * (640 / 1440);
        this.height = window.innerWidth * (360 / 1440);
      }
    }
  },
  mounted() {
    if(process.browser){
      this.WidthWindow()
      window.addEventListener('resize', this.WidthWindow)
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
@media (max-width: 425px) {
  .gallery{
    width: 100vw;
    max-height: none;
    margin-left: -25px;
  }
  .video:first-child{
    margin-left: 25px;
  }
  .video{
    margin-right: 20px;
  }
}
</style>

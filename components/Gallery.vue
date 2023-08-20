<template>
  <div class="gallery">
    <div v-if="s.type==='photo'" v-for="s in source.all.gallery.img" class="content">
      <img  :src="s.src" :alt="s.text">
    </div>
    <div v-if="s.type==='video'" v-for="s in source.all" class="content">
      <iframe :src="s.src" width="100%" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    source:{
      type:[Array,Object],
      default:()=>[],
    }
  },
  data(){
    return{
      width:0,
      height:0,
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
.content{
  min-width: 60vw;
  max-width: 60vw;
  aspect-ratio: 16/9;
  margin-right: 40px;
  border: #EDB406 1px solid;
}
.content img{
  width: 100%;
  object-fit: cover;
}
@media (max-width: 425px) {
  .gallery{
    width: 100vw;
    max-height: none;
    margin-left: -25px;
  }
  .content:first-child{
    margin-left: 25px;
  }
  .content{
    min-width: 80vw;
    max-width: 80vw;
    margin-right: 20px;
  }
}
</style>

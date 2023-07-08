<template>
  <div class="gallery">
    <div :style="{minWidth:width , minHeight:height}" v-for="s in source" class="video">
      <iframe v-if="s.type==='video'" class="frame" :src="s.src" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
      <img class="frame" :style="`object-fit:cover;`" v-else :src="s.src" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      width:0,
      height:0,
      source:[
        {
          src:'https://sun1-47.userapi.com/impg/_48hsTgtgPV-RvLXzU04MaVJHMFDTPKOueMZbg/pOB2bT0320Q.jpg?size=2560x1920&quality=95&sign=e042b0368894952cec4c08686957f9e3&type=album',
          type:'img',
        },
        {
          src:'https://vk.com/video_ext.php?oid=-187206619&id=456239027&hash=10cdf71a2cab19a3&hd=2',
          type:'video',
        },
        {
          src:'https://sun9-66.userapi.com/impg/WDVT8Fw06EvunOS1lUGALoo-xsKXYG0Q_oF5LQ/QzePf-3VUdw.jpg?size=2560x1920&quality=95&sign=2f2e36d05133baba7e16642fadafe1d7&type=album',
          type:'img',
        },
        {
          src:'https://vk.com/video_ext.php?oid=-187206619&id=456239020&hash=7b89e6f41345b686&hd=3',
          type:'video',
        },
        {
          src:'https://vk.com/video_ext.php?oid=-187206619&id=456239023&hash=22ef103f6d90dabc&hd=1',
          type:'video',
        },
        {
          src:'https://vk.com/video_ext.php?oid=-187206619&id=456239031&hash=a89e69b8786fdb3d&hd=2',
          type:'video',
        }
      ]
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
.frame{
  width: 100%;
  height: 100%;
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

<template>
  <div class="gallery">
    <div v-for="s in source" class="video">
      <iframe v-if="s.type==='video'" class="frame" :src="s.src" :width="width" :height="height" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
      <img class="frame" v-else :src="s.src" alt="">
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
          src:'https://s450vla.storage.yandex.net/rdisk/9a9e3656a96f1c8c834fc65b6c741417c48f4842b76288849d40eb0697088a19/64a9d0a7/i9Csq2gj3ScbgxgVIF4fc38jbeY3uwOjMAKHru7g0ufOnP016-oKKAMpiDlwvNGdExJdmzFl4P1toiJkbbO5Xg==?uid=668448399&filename=image%2020.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=668448399&fsize=4591453&hid=5b363d53a90b91e1ce6332c12c1d1b6d&media_type=image&tknv=v2&etag=096c9303c96966c744476dea2ea469ec&rtoken=0ocgeCT75PNk&force_default=yes&ycrid=na-2165b9f2691c978df9bdd16954052a56-downloader12e&ts=600002c0837c0&s=48ac781c3a2f3c6436ab3358e94e0446e53492b05d2883ebb20ebbd775d68374&pb=U2FsdGVkX19Jk8GOBSuG0Po-ge9v2PDyFj-q6KwKKILHwhA69xLrFlWWWpbMcgQd6le02u6GjE8oWbW7CczjFRW-YBQKhmnyHT5_EFO2dZE',
          type:'img',
        },
        {
          src:'https://s91vlx.storage.yandex.net/rdisk/25e1ff168f014dca0139c257589806ad8dc903669555d34317316481d3e16e23/64a9d104/i9Csq2gj3ScbgxgVIF4fcziIO5qeWnFbkSco7NbokNG7Tgazoh2oNSRS42JPpGaSJNUJ8TDk5guf_tk1L6rGVg==?uid=668448399&filename=image%2019.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=668448399&fsize=2563209&hid=b1dcefe08daaa41865b25f67482ef8c2&media_type=image&tknv=v2&etag=5439cc3b174e8b3bea74bd14b585a93e&rtoken=x1sFWUTv08IO&force_default=yes&ycrid=na-3b34ae296bac7fdbc290b22964ae3cc0-downloader12e&ts=6000031934900&s=cc2bbf30497946e74e9fbd65f5534c560e070cdba251889c4ac9c27af02d1643&pb=U2FsdGVkX1_FOPvCg-UaH0vMxM-l9qPDyB_z8wpmW1sTQanSS8Nvrg6sQJAAnygYYqF9F-TNjyU5HXjd6OScQ4oXX5XYTzvJpyX0dMHT-kY',
          type:'img',
        },
        // {
        //   src:'https://vk.com/video_ext.php?oid=-187206619&id=456239027&hash=10cdf71a2cab19a3&hd=2',
        //   type:'video',
        // },
        {
          src:'https://sun9-66.userapi.com/impg/WDVT8Fw06EvunOS1lUGALoo-xsKXYG0Q_oF5LQ/QzePf-3VUdw.jpg?size=2560x1920&quality=95&sign=2f2e36d05133baba7e16642fadafe1d7&type=album',
          type:'img',
        },
        // {
        //   src:'https://vk.com/video_ext.php?oid=-187206619&id=456239020&hash=7b89e6f41345b686&hd=3',
        //   type:'video',
        // },
        // {
        //   src:'https://vk.com/video_ext.php?oid=-187206619&id=456239023&hash=22ef103f6d90dabc&hd=1',
        //   type:'video',
        // },
        // {
        //   src:'https://vk.com/video_ext.php?oid=-187206619&id=456239031&hash=a89e69b8786fdb3d&hd=2',
        //   type:'video',
        // }
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
  min-width: 60vw;
}
.frame{
  width: 100%;
  object-fit: cover;
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
    object-fit: contain;
    min-width: 80vw;
  }
}
</style>

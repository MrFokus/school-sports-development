<template>
  <div class="default">
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript" >
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(94688483, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      });
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/94688483" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
    <Header  class="header"/>
    <Nuxt />
    <Footer/>
    <ModalPolicy/>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ModalPolicy from "@/components/ModalPolicy";
export default {
  components:{
    Header,
    Footer,
    ModalPolicy,
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

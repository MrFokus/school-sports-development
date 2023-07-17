<template>
  <div class="info">
    <Info :discipline="$store.getters['discipline/active'][$route.params.name]"/>
    <footer>
      <div class="content">
        <p class="phone">8 (980) 355-66-60</p>
        <div class="messengers">
          <a href="https://t.me/karatelipetsk"><img src="@/assets/img/telegram-icon.svg" alt=""></a>
          <a href="https://vk.com/kickboxinglipetsk"><img src="@/assets/img/vk-icon.svg" alt=""></a>
        </div>
      </div>
    </footer>
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
}
footer{
  width: 100%;
  padding: 50px 0;
  background-color: #0e0e0e;
  justify-content: center;
  margin-top: 60px;
}
footer .content{
  width: min(100%,1300px);
  align-items: center;
  justify-content: space-between;
}
footer .content p{
  color: white;
  font-size: 20px;
}
.messengers img:last-child{
  margin-left: 28px;
}
@media (max-width: 1439px) and (min-width:426px) {
  footer{
    padding: 3.4vw 0;
    margin-top: 4.2vw;
  }
  footer .content{
    width: 100%;
    padding: 0 5.5vw;
  }
  footer .content p{
    font-size: 1.4vw;
  }
  .messengers img:last-child{
    margin-left: 2vw;
  }
  .messengers img{
    width: 2vw;
  }
}
@media (max-width: 425px) {
  .info{
    padding: 0 24px;
  }
  footer{
    padding:40px 25px;
    width: 100vw;
    margin-top: 20px;
  }
  .content .phone{
    font-size: 14px;
  }
  .messengers a>img{
    width: 40px;
    margin-left: 16px !important;
  }
}
</style>

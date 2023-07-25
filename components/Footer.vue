<template>
  <footer>
    <div class="content">
      <p class="phone">8 (980) 355-66-60</p>
      <nuxt-link class="privacy" to="/privacy">Политика конфидециальности</nuxt-link>
      <div class="messengers">
        <a href="https://t.me/karatelipetsk"><img src="@/assets/img/telegram-icon.svg" alt=""></a>
        <a href="https://vk.com/kickboxinglipetsk"><img src="@/assets/img/vk-icon.svg" alt=""></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.privacy{
  text-decoration: #EDB406 underline;
  color: #EDB406;
}
footer{
  width: 100%;
  padding: 20px 0;
  background-color: #0e0e0e;
  justify-content: center;
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
    padding: 1.4vw 0;
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
  footer{
    padding:10px 25px;
    width: 100vw;
  }
  .content .phone{
    font-size: 14px;
  }
  .messengers a>img{
    width: 30px;
    margin-left: 16px !important;
  }
  .phone{
    display: none;
  }
  .privacy{
    font-size: 14px;
  }
}
</style>

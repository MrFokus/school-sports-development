<template>
  <header ref="Header">
    <div class="container">
      <div class="call">
          <p>+7(495) 921 9300</p>
          <button>Заказать звонок</button>
      </div>
      <div class="logo">
        <nuxt-link to="/"><img src="~/assets/img/Logo.svg" alt=""></nuxt-link>
      </div>
      <div class="burger-menu">
        <img src="~/assets/img/BurgerMenu.svg" alt="">
      </div>
    </div>
  </header>
</template>

<script>
//TODO: Сделать компонент меню
export default {

}
</script>

<style scoped>
  header{
    width: 100%;
    background-color:#EDB406;
    height: fit-content;
    align-items: center;
    justify-content: center;
  }
  .container{
    width: min(1300px,100%);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 5px 0;
  }
  img{
    height: fit-content;
  }
  div{
    align-items: center;
  }
  .call{
    flex-direction: column;
    align-items: flex-start;
  }
  .logo{
    justify-content: center;
  }
  .burger-menu{
    justify-content: flex-end;
  }
  .logo>a{
    display: inline-block;
    height: fit-content;
    line-height: 0;
  }
  .call>p{
    font-size: 18px;
    color: white;
  }
  .call>button{
    outline: 0;
    border: 0;
    background: none;
    font-size: 14px;
    color: white;
  }
  .call>button:active{
    color: white;
  }
</style>

<template>
  <div class="card-discipline">
    <div @click="$router.push(card.src)" :style="{background: `url('${require(`~/assets/img/${card.img}`)}')`}" class="card">
      <div class="blackout"/>
      <div class="content">
        <span class="strong">{{ card.title }}</span>
        <p class="age">от {{ card.age }} лет</p>
        <button class="price">от {{card.price}} ₽</button>
      </div>
    </div>
    <button @click="$store.commit('modal/setModalActive',true)" class="sign-up-training"> ЗАПИСАТЬСЯ НА ПРОБНУЮ ТРЕНИРОВКУ </button>
  </div>
</template>

<script>
export default {
  props: ['card'],
}
</script>

<style scoped>
.card-discipline{
  flex-direction: column;
}
.card{
  position: relative;
  flex-direction: column;
  width: 100%;
  min-height:210px ;
  background-size: cover !important;
  background-position: center !important;

}
.content{
  flex-direction: column;
  z-index: 2;
  padding: 10px 0 0 8px;
  width: 100%;
  height: 100%;
}
.content>*{
  width: fit-content;
  height: fit-content;
  color:white;
}
.blackout{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
}
.strong{
  font-size: 20px;
  font-weight: 600;
}
.age{
  font-weight: 400;
  font-size: 18px;
}
.price{
  margin: 72px 0 0 26px;
  background-color: #EDB406;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 600;
  padding: 7px 17px;
}
.price:hover {
  background-color: #dfa900;
}

.price:active {
  background-color: #c79600;
}
.sign-up-training{
  margin-top: 40px;
  width: 100%;
  padding: 21px 0;
  background: none;
  border: #EDB406 2px solid;
  color: white;
  font-size: 12px;
  font-weight: 600;
  transition: background-color .3s;
}
.sign-up-training:hover{
  background: #EDB406;
}
.sign-up-training:active{
  transition: background-color 0s;
  background: #c79600;
}
@media (max-width: 1439px) and (min-width: 426px) {

  .card{
    min-height:14.58vw;
  }

  .strong{
    font-size:1.4vw;
  }
  .age{
    font-size: 1.35vw;
  }
  .price{
    margin: 5vw 0 0 1.8vw;
    font-size: 1.4vw;
    padding: 0.5vw 1.3vw;
  }

  .sign-up-training{
    margin-top: 2.8vw;
    padding: 1.5vw 0;
    font-size: 0.8vw;
  }
}
@media (max-width: 425px), (max-width: 425px) and (orientation: landscape) {

  .strong{
    font-size: 16px;
    font-weight: 600;
  }
  .age{
    font-size: 14px;
    font-weight: 400;
  }
  .price{
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    margin-top: 30%;
  }
  .sign-up-training{
    margin: 10px 0 0 0;
  }
}
</style>

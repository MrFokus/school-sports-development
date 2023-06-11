<template>
  <div class="card-discipline">
    <div :style="{background: `url('${require(`~/assets/img/${card.img}`)}')`}" class="card">
      <div class="blackout"/>
      <div class="content">
        <h3>{{ card.title }}</h3>
        <p class="age">от {{ card.age }} лет</p>
        <button @click="$store.commit('modal/setModalActive',true)" class="price">от {{card.price}} ₽</button>
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
  background-size: cover;
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
h3{
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
  outline: #EDB406 2px solid;
  border: 0;
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
</style>

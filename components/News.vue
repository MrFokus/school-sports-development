<template>
  <div v-if="news_open" class="news">
    <div class="container">
      <button @click="news_open = false" class="close"><img :src="require('@/assets/img/close.svg')" alt=""></button>
    </div>
    <h2>Внимание, добавилось новое место для проведения тренировок – ФОК «Спортивный Город» </h2>
    <p>В разделе "Расписание" вы можете ознакомиться с датой и времененм проведения занятий в ФОК «Спортивный
      Город» </p>
    <img :src="require('@/assets/img/News.png')" alt="ФОК «Спортивный Город»">
    <button @click="SignUp" class="sign-up">Записаться</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      news_open:true,
    }
  },
  methods:{
    SignUp(){
      this.$store.commit('modal/setModalActive',true);
      this.news_open = false
    }
  }
}
</script>

<style scoped>
.news {
  width: min(850px,100%);
  flex-direction: column;
  z-index: 100;
  position: fixed;
  top: 10%;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  padding: 20px 40px;
  background-color: #181818;
  align-items: center;
  height: fit-content;
  border: 1px #EDB406 solid;
}

.news > p, .news > h2 {
  color: white;
  text-align: center;
  margin: 10px 0;
}
.news > h2{
  margin-top: 0px;
}

.news > img {
  display: block;
  margin: auto;
  max-width: 80%;
  object-fit: cover;
  margin-bottom: 20px;
  aspect-ratio: 16/9;
}
.container{
  width: 100%;
  justify-content: flex-end;
  align-items: center;
}

.close {
  max-width: 35px;
  max-height: 35px;
  min-width: 20px;
  min-height: 20px;
  background: rgba(159, 132, 132, 0.24);
  outline: none;
  width: 3vw;
  height: 3vw;
  border: none;
  border-radius: 999px;
  padding: min(2vw, 10px);
  box-sizing: border-box;
  aspect-ratio: 1/1;
}

.close img {
  width: 100%;
  height: 100%;
}
.sign-up{
  width: 80%;
  background-color: #EDB406;
  padding: 10px 20px;
  border: none;
  color: white;
}
@media (max-width: 1440px) {
  .close {
    padding: 8px;
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 425px), (max-width: 425px) and (orientation: landscape) {
  .news {
    max-width: 100vw;
    padding: 5px 10px 10px 10px;
  }
  .news > h2{
    font-size: 16px;
    margin-bottom: 5px;
  }
  .news > p{
    font-size: 10px;
    margin: 0;
    margin-bottom: 5px;
  }
  .news > img{
    max-width: 95%;
  }
  .close {
    padding: 5px;
    width: 25px;
    height: 25px;
  }
}
</style>

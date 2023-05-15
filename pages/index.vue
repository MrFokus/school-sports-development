<template>
  <main>
    <div class="background-block">
      <img class="scratches-background" src="~/assets/img/scratches-background.png" alt="">
      <img src="~/assets/img/black-img.png" alt="" class="black-img">
      <div class="content">
        <div class="title-block">
          <div class="title">
            <h1>ШКОЛА СПОРТИВНОГО РАЗВИТИЯ ИМЕНИ <br> В. Н. КЫЗЫМ</h1>
            <div class="btn-block">
              <button>ЗАПИСАТЬСЯ НА БЕСПЛАТНУЮ ТРЕНИРОВКУ</button>
              <img src="~/assets/img/btn-arrow.png" alt="" class="btn-arrow">
            </div>
          </div>
          <div class="portrait-title">
            <img src="~/assets/img/portrait-title.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="background-block" style="z-index: 5">
      <img class="first-break-background" src="~/assets/img/first-break-background.png" alt="">
      <div class="training">
        <div class="title-training">
          <p>НАШИ</p>
          <h1>ТРЕНИРОВКИ</h1>
        </div>
        <div class="cards-discipline">
          <card-discipline :card="card" :key="index" v-for="(card,index) of cardDiscipline"/>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import CardDiscipline from "@/components/CardDiscipline";

export default {
  components:{
    CardDiscipline,
  },
  data(){
    return{
      cardDiscipline:[
        {
          title:'Каратэ',
          age:5,
          price:200,
          img:'Karate.png'
        },
        {
          title:'Кикбоксинг',
          age:5,
          price:200,
          img:'KickBoxing.png'
        },
        {
          title:'Развивающие детские тренировки',
          age:3,
          price:200,
          img:'YoungTR.png'
        },
      ],
    }
  }
}
</script>


<style scoped>
main {
  width: 100%;
  justify-content: center;
  flex-direction: column;
}

.background-block {
  width: 100%;
  position: relative;
  flex-direction: column;
}
.background-block>div{
  margin: auto;
  width: min(1300px, 100%);
}
.scratches-background, .black-img, .first-break-background {
  position: absolute;
  width: 100%;
  object-fit: cover;
}

.scratches-background {
  z-index: 4;
}

.black-img {
  z-index: 2;
}

.first-break-background {
  top: -80px;
  z-index: 6;
}

.content {
  z-index: 5;
  width: min(1300px, 100%);
  position: relative;
  flex-direction: column;
  margin: auto;
}

.title-block {
  width: 100%;
}

.title {
  flex-direction: column;
  height: fit-content;
  margin-top: 135px;
}

h1 {
  width: 600px;
  font-size: 48px;
  font-weight: 600;
  color: white;
}

.btn-block {
  align-items: flex-end;
  margin: 20px 0 0 0;
  overflow: hidden;
}

.btn-block > button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: fit-content;
  background: #EDB406;
  color: white;
  border: none;
  outline: none;
  padding: 18px 30px;
  box-sizing: border-box;
  margin: 0 0 25px 0;
  font-size: 14px;
  font-weight: 600;
}

.btn-arrow {
  margin-left: 70px;
}

.btn-block > button:hover {
  background-color: #dfa900;
}

.btn-block > button:active {
  background-color: #c79600;
}

.portrait-title {
  margin-top: 95px;
  margin-left: 30px;
}

.portrait-title > img {
  width: 110%;
}
.training{
  z-index: 6;
  padding-top: 270px;
  box-sizing: border-box;
  flex-direction: column;
}
.title-training{
  flex-direction: column;
}
.title-training>p{
  font-size: 20px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
  margin-bottom: 15px;
}
.cards-discipline{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 40px;
  margin-top: 60px;
}
</style>

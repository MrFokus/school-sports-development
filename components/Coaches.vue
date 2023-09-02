<template>
  <div class="coaches">
    <div v-for="coach in coaches" class="coach">
      <img :src="coach.img" :alt="coach.clear_name">
      <div class="name-block">
        <p class="name" v-html="coach.name"></p>
        <p class="discipline">{{ coach.discipline }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coaches: [
        {
          img: '/coaches/Kyzym-Evgeniy.png',
          clear_name:'Кызым Евгений Васильевич',
          name:'Кызым Евгений<br>Васильевич',
          discipline:"Каратэ, Кикбоксинг",
        },
        {
          img: '/coaches/Kyzym-Igor.png',
          clear_name:'Кызым Игорь Васильевич',
          name:'Кызым Игорь<br>Васильевич',
          discipline:"Каратэ",
        },
        {
          img: '/coaches/Mamedov-Rauf.png',
          clear_name:'Мамедов Рауф Фахрадович',
          name:'Мамедов Рауф<br>Фахрадович',
          discipline:"Кикбоксинг",
        },
        {
          img: '/coaches/Buneev-Maxim.png',
          clear_name:'Бунеев Максим Николаевич',
          name:'Бунеев Максим<br>Николаевич',
          discipline:"Каратэ",
        },
        {
          img: '/coaches/Kyzym-German.png',
          clear_name:'Кызым Герман Игоревич',
          name:'Кызым Герман<br>Игоревич',
          discipline:"Каратэ",
        }
      ],
    }
  },
}
</script>


<style scoped>
.coaches {
  max-width: 100%;
  overflow-x: scroll;
}
.coach{
  flex-direction: column;
  margin-right: 40px;
}
.name-block{
  margin-top: 20px;
  flex-direction: column;
}
.name{
  color: white;
  font-size: 24px;
  font-weight: 700;
}
.discipline{
  font-weight: 400;
  font-size: 20px;
  color: #A3A3A3;
  margin-top: 20px;
}
@media (max-width: 1439px) and (min-width:426px) {
  .coaches {
    max-width: 100%;
  }
  .coach{
    width: 28.26vw;
    margin-right: 2.8vw;
  }
  .name-block{
    margin-top: 1.4vw;
  }
  .name{
    font-size: 1.7vw;
  }
  .discipline{
    font-size: 1.4vw;
    margin-top: 1.4vw;
  }
}
@media (max-width: 425px) {
  .coaches{
    width: 100vw;
    margin-left: -25px;
  }
  .name{
    font-size: 16px;
    font-weight: 600;
  }
  .discipline{
    font-size: 14px;
    margin-top: 10px;
    font-weight: 500;
  }
  .coach{
    margin-right: 10px;
  }
  .coach >img{
    width: 50vw;
  }
  .coach:first-child{
    margin-left: 25px;
  }
}
</style>

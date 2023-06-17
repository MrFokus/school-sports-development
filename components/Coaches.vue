<template>
  <div class="coaches">
    <div v-for="coach in coaches" class="coach">
      <img :src="coach.img" alt="">
      <div class="name-block">
        <h3 class="name" v-html="coach.name"></h3>
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
          name:'Кызым Евгений<br>Васильевич',
          discipline:"Карате, Кикбоксинг",
        },
        {
          img: '/coaches/Kyzym_Igor.png',
          name:'Кызым Игорь<br>Васильевич',
          discipline:"Карате",
        },
        {
          img: '/coaches/Mamedov-Rauf.png',
          name:'Мамедов Рауф<br>Фахрадович',
          discipline:"Кикбоксинг",
        },
        {
          img: '/coaches/Buneev-Maxim.png',
          name:'Бунеев Максим<br>Николаевич',
          discipline:"Карате",
        },
        {
          img: '/coaches/Kyzym-German.png',
          name:'Кызым Герман<br>Игоревич',
          discipline:"Карате",
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
@media (max-width: 1439px) {
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
</style>

<template>
  <div class="filials">
    <div class="container">
      <p class="title-page">Наши филиалы</p>
      <div v-for="address in addresses" class="card">
        <p class="title">{{address.name}}</p>
        <p class="description">Мы находимся по адресу – {{address.address}}</p>
        <img :src="require(`~/assets/img/filials/${address.img}`)" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      addresses:[
        {
          name:'Филиал на Перова',
          address:'г. Липецк, улица Перова 47',
          img:'perova47.webp'
        },
        {
          name:'Филиал на Филипченко',
          address:'г. Липецк, улица Филипченко, 7/4',
          img:'filipchenko.png'
        },
        {
          name:'Филиал в Школе №45',
          address:'г. Липецк, улица П.А. Папина, 4',
          img:'school45.png'
        },
        {
          name:'Филиал в Школе №48',
          address:'г. Липецк, улица Космонавтов, 82/4',
          img:'school48.png'
        },
        {
          name:'Филиал в Школе №18',
          address:'г. Липецк, улица Леонтия Кривенкова, 25',
          img:'school18.png'
        },
        {
          name:'Филиал в Школе №33',
          address:'г. Липецк, бульвар имени Павла Шубина, 15',
          img:'school33.png'
        },
        {
          name:'Филиал в ГДЮЦ «Спортивный»',
          address:'г. Липецк, улица А.Г. Стаханова, 28Б',
          img:'sport.png'
        },
        {
          name:'Филиал на Ильича',
          address:'г. Липецк, улица Ильича, 31',
          img:'ilitcha.png'
        },
        {
          name:'Филиал в ФОК «Спортивный Город»',
          address:'г. Липецк, улица Германа Титова, 8Г',
          img:'sport-city.png'
        },
        {
          name:'Филиал в Школе №49',
          address:'г. Липецк, Звёздная улица, 12',
          img:'school49.png'
        },
      ]
    }
  },
}
</script>

<style scoped>
.filials{
  min-height: 100vh;
  min-width: 100vw;
  padding: 40px 0;
}
.container{
  color: white;
  margin: auto;
  width: min(1300px, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card{
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px #EDB406 solid;
  width: 100%;
}
.card img{
  max-width: 100%;
  width: 100%;
}
.card:nth-child(1){
  border-top: 1px #EDB406 solid;
}
.card .title{
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
}
.card .description{
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
}
.title-page{
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 800;
  margin-bottom: 30px;
}
</style>

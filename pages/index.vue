<template>
  <main>
    <div class="background-block" :style="{background: `url('${require(`~/assets/img/scratches-background.png`)}`, backgroundSize: 'cover'}">
      <div class="content">
        <div class="title-block">
          <div class="title">
            <h1>ШКОЛА СПОРТИВНОГО РАЗВИТИЯ ИМЕНИ <br> В. Н. КЫЗЫМ</h1>
            <div class="btn-block">
              <button @click="$store.commit('modal/setModalActive',true)">ЗАПИСАТЬСЯ НА БЕСПЛАТНУЮ ТРЕНИРОВКУ</button>
              <img src="~/assets/img/btn-arrow.png" alt="" class="btn-arrow">
            </div>
          </div>
          <div class="portrait-title">
            <img src="~/assets/img/portrait-title.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div
      :style="{zIndex:'10',marginTop:'-190px' ,background: `url('${require(`~/assets/img/first-break-background.png`)}')`, backgroundSize: 'cover'}"
      class="background-block">
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
    <div :style="{paddingBottom:'70px',background: `url('${require(`~/assets/img/second-break-background.png`)}')`, backgroundSize: 'cover'}" class="background-block"
         style="z-index: 6; background-size: cover;">
      <div id="schedule" class="schedule-block">
        <div class="title-schedule">

          <h1>РАСПИСАНИЕ</h1>
          <button @click="$store.commit('modal/setModalActive',true)">ЗАПИСАТЬСЯ</button>
        </div>
        <div class="schedule">
          <table-schedule :schedule="schedule"/>
        </div>
      </div>
      <div class="block-gallery">
        <p>НАШИ ТЕРНИРОВКИ</p>
        <h1>ГАЛЕРЕЯ</h1>
        <Gallery/>
      </div>
      <div id="teachers" class="coaches-block">
        <div class="title">
          <p>НАШИ НАСТАВНИКИ</p>
          <h1>ТРЕНЕРЫ</h1>
        </div>
        <coaches/>
      </div>
      <div id="contacts" class="contacts">
        <div class="title">
          <h1>
            КОНТАКТЫ
          </h1>
        </div>
        <div class="contacts-info">
          <div class="mail">
            <img src="@/assets/img/mail-icon.svg" alt="">
            <p>example@mail.ru</p>
          </div>
          <div class="phone">
            <img src="@/assets/img/smartphone-icon.svg" alt="">
            <p>+7 (888) 888-88-88</p>
          </div>
          <div class="address">
            <img src="@/assets/img/map-point-icon.svg" alt="">
            <p>г. Липецк, ул. Перова 47 </p>
          </div>
          <div class="messengers">
            <nuxt-link to="/"><img src="@/assets/img/telegram-icon.svg" alt=""></nuxt-link>
            <nuxt-link to="/"><img src="@/assets/img/vk-icon.svg" alt=""></nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <ClientOnly>
    <yandex-map class="map" :coords="main_coord" :zoom="17" ref="map" :controls="['fullscreenControl']">
      <ymap-marker :coords="main_coord" :searchControl="false" :markerId="1"/>
      <ymap-marker :key="index++" v-for="(c,index) in coord" :coords="c" :searchControl="false" :markerId="index++"/>
    </yandex-map>
    </ClientOnly>
    <modal-form v-if="$store.getters['modal/active']===true" @closeModal="$store.commit('modal/setModalActive',false)" class="form"/>
  </main>
</template>

<script>
import CardDiscipline from "@/components/CardDiscipline";
import TableSchedule from "@/components/TableSchedule";
import Gallery from "@/components/Gallery"
import Coaches from "@/components/Coaches";
import ModalForm from "@/components/ModalForm";

export default {
  components: {
    CardDiscipline,
    TableSchedule,
    Gallery,
    Coaches,
    ModalForm,
  },
  mounted() {
    console.log(this.$store.getters["modal/active"])
  },
  data() {
    return {
      modal:false,
      main_coord: [52.600753, 39.566943],
      coord:[
        [52.598325, 39.558508],
        [52.583165, 39.505077],
        [52.613370, 39.547243],
        [52.590945, 39.518785],
        [52.589118, 39.523878],
        [52.606141, 39.548815],
        [52.535731, 39.589455],
      ],
      schedule: [
        {
          discipline: 'КАРАТЭ',
          group: 'ГРУППА НАЧАЛЬНОЙ ПОДГОТОВКИ',
          teacher: [
            {
              name: "Кызым Евгений Васильевич",
              days: [
                {
                  day: "ВТ/ЧТ",
                  time: "18:00 – 19:00",
                  address: "Школа №45",
                  address_hall: "УЛ. П.А. ПАПИНА 4",
                }
              ],
            },
            {
              name: "Кызым Игорь Васильевич",
              days: [
                {
                  day: "СБ",
                  time: "10:00 – 11:00",
                  address: "УЛ. ПЕРОВА 47",
                  address_hall: null,
                },
                {
                  day: "СР",
                  time: "18:00 – 19:00",
                  address: "УЛ. ПЕРОВА 47",
                  address_hall: null,
                },
                {
                  day: "ВТ/ЧТ",
                  time: "8:30 – 9:30",
                  address: "Школа №18",
                  address_hall: "УЛ. ЛЕОНТИЯ КРИВЕРКОВА 25",
                },
                {
                  day: "ВТ/ЧТ",
                  time: "17:30 – 18:30",
                  address: "Школа №18",
                  address_hall: "УЛ. ЛЕОНТИЯ КРИВЕРКОВА 25",
                },
                {
                  day: "ПН/ПТ",
                  time: "17:30 – 18:30",
                  address: "Школа №48",
                  address_hall: "УЛ. КОСМОНАВТОВ 82/4",
                },
                {
                  day: "ПН/ПТ",
                  time: "20:00 – 21:00",
                  address: "Школа №49",
                  address_hall: "УЛ. ЗВЁЗДНАЯ 12",
                },
              ],
            },
            {
              name: "Кызым Герман Игоревич",
              days: [
                {
                  day: "ВТ/ЧТ",
                  time: "19:00 – 20:00",
                  address: "Школа №33",
                  address_hall: "БУЛ. ШУБИНА 15",
                },
                {
                  day: "ЧТ",
                  time: "15:10 – 16:40",
                  address: "ГДЮЦ «Спортивный»",
                  address_hall: "УЛ. СТАХАНОВА 28Б",
                },
                {
                  day: "ЧТ",
                  time: "16:50 – 18:20",
                  address: "ГДЮЦ «Спортивный»",
                  address_hall: "УЛ. СТАХАНОВА 28Б",
                },
                {
                  day: "СБ",
                  time: "15:20 – 16:50",
                  address: "ГДЮЦ «Спортивный»",
                  address_hall: "УЛ. СТАХАНОВА 28Б",
                },
                {
                  day: "СБ",
                  time: "17:00 – 18:30",
                  address: "ГДЮЦ «Спортивный»",
                  address_hall: "УЛ. СТАХАНОВА 28Б",
                },
              ],
            },
          ],
        },//Началка
        {
          discipline: 'КАРАТЭ',
          group: 'ГРУППА НАЧАЛЬНОЙ ПОДГОТОВКИ (2 ГОД)',
          teacher: [
            {
              name: "Кызым Евгений Васильевич",
              days: [
                {
                  day: "ПН/СР/ПТ",
                  time: "18:00 – 19:00",
                  address: "Школа №45",
                  address_hall: "УЛ. П.А. ПАПИНА 4",
                }
              ],
            }
          ],
        },//Началка 2 год
        {
          discipline: 'КАРАТЭ',
          group: 'ТРЕНИРОВОЧНАЯ ГРУППА',
          teacher: [
            {
              name: "Кызым Евгений Васильевич",
              days: [
                {
                  day: "ВТ/ЧТ",
                  time: "19:00 – 20:00",
                  address: "УЛ. ПЕРОВА 47",
                  address_hall: null,
                },
                {
                  day: "СБ",
                  time: "12:00 – 13:00",
                  address: "УЛ. ПЕРОВА 47",
                  address_hall: null,
                },
              ],

            },
            {
              name: "Кызым Игорь Васильевич",
              days: [
                {
                  day: "СР",
                  time: "19:00 – 20:00",
                  address: "УЛ. ПЕРОВА 47",
                  address_hall: null,
                },
                {
                  day: "СБ",
                  time: "11:00 – 12:00",
                  address: "УЛ. ПЕРОВА 47",
                  address_hall: null,
                },
                {
                  day: "ВТ/ЧТ",
                  time: "16:30 – 17:30",
                  address: "Школа №18",
                  address_hall: "УЛ. ЛЕОНТИЯ КРИВЕРКОВА 25",
                },
                {
                  day: "ПН/ПТ",
                  time: "17:30 – 18:30",
                  address: "Школа №48",
                  address_hall: "УЛ. КОСМОНАВТОВ 82/4",
                },
              ],

            },
            {
              name: "Бунеев Максим Николаевич",
              days: [
                {
                  day: "ВТ/ЧТ",
                  time: "18:00 – 19:00",
                  address: "УЛ. ПЕРОВА 47",
                  address_hall: null,
                },
                {
                  day: "СБ",
                  time: "12:00 – 13:00",
                  address: "УЛ. ПЕРОВА 47",
                  address_hall: null,
                },
              ],
            },
          ],
        },//Тренировочная
        {
          discipline: 'КИКБОКСИНГ',
          group: 'ТРЕНИРОВОЧНАЯ ГРУППА',
          teacher: [
            {
              name: "Кызым Евгений Васильевич",
              days: [
                {
                  day: "ВТ/ЧТ",
                  time: "20:00 – 21:00",
                  address: "УЛ. ПЕРОВА 47",
                  address_hall: null,
                },
                {
                  day: "ПН/ПТ",
                  time: "19:00 – 20:30",
                  address: "УЛ. ПЕРОВА 47",
                  address_hall: null,
                },
                {
                  day: "СР",
                  time: "16:30 – 17:30",
                  address: "УЛ. ПЕРОВА 47",
                  address_hall: null,
                },
              ],
            }
          ],
        },//Тренировочная
        {
          discipline: 'КИКБОКСИНГ',
          group: 'ГРУППА НАЧАЛЬНОЙ ПОДГОТОВКИ',
          teacher: [
            {
              name: "Кызым Евгений Васильевич",
              days: [
                {
                  day: "ВТ/ЧТ",
                  time: "9:00 – 10:00",
                  address: "УЛ. ПЕРОВА 47",
                  address_hall: null,
                },
                {
                  day: "ВТ/ЧТ",
                  time: "16:00 – 17:00",
                  address: "УЛ. ПЕРОВА 47",
                  address_hall: null,
                },
                {
                  day: "СР",
                  time: "16:30 – 17:30",
                  address: "УЛ. ПЕРОВА 47",
                  address_hall: null,
                },
              ],
            },
            {
              name: "Мамедов Рауф Фахрадович",
              days: [
                {
                  day: "СР/ПТ",
                  time: "13:30 – 14:30",
                  address: "ФИЛЛИПЧЕНКО 7/4",
                  address_hall: null,
                },
                {
                  day: "ПН/СБ",
                  time: "13:20 – 14:20",
                  address: "ФИЛЛИПЧЕНКО 7/4",
                  address_hall: null,
                },
                {
                  day: "ПТ",
                  time: "15:10 – 16:10",
                  address: "ФИЛЛИПЧЕНКО 7/4",
                  address_hall: null,
                },
                {
                  day: "ПТ",
                  time: "16:50 – 17:50",
                  address: "ФИЛЛИПЧЕНКО 7/4",
                  address_hall: null,
                },
                {
                  day: "ВТ/ЧТ",
                  time: "14:00 – 15:00",
                  address: "Ильича 31",
                  address_hall: null,
                },
                {
                  day: "ВТ/ЧТ",
                  time: "15:40 – 16:40",
                  address: "Ильича 31",
                  address_hall: null,
                },
              ],
            },
          ],
        },//Начальная
      ],

      cardDiscipline: [
        {
          title: 'Каратэ',
          age: 5,
          price: 200,
          img: 'Karate.png'
        },
        {
          title: 'Кикбоксинг',
          age: 5,
          price: 200,
          img: 'KickBoxing.png'
        },
        {
          title: 'Развивающие детские тренировки',
          age: 3,
          price: 200,
          img: 'YoungTR.png'
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
  background-size: cover;
}
.background-block:first-child{
  padding-bottom: 90px;
}

.background-block > div {
  margin: auto;
  width: min(1300px, 100%);
}


.first-break-background {
  top: -80px;
  z-index: 6;
}

.content {
  /*z-index: 5;*/
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

.training {
  z-index: 6;
  padding-top: 270px;
  box-sizing: border-box;
  flex-direction: column;
}

.title-training {
  flex-direction: column;
}

.title-training > p, .block-gallery > p {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
  margin-bottom: 15px;
}

.cards-discipline {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 40px;
  margin-top: 60px;
}

.schedule, .title-schedule {
  z-index: 8;
}

.schedule-block {
  flex-direction: column;
  padding: 150px 0px 0px 0px;
}

.title-schedule {
  justify-content: center;
  margin-bottom: 60px;
}

.title-schedule > h1 {
  width: fit-content;
  margin-right: 22px;
  font-weight: 700;
  font-size: 48px;
}

.title-schedule > button {
  width: 185px;
  padding: 21px 0;
  background: none;
  outline: #EDB406 2px solid;
  border: 0;
  color: white;
  font-weight: 700;
  font-size: 16px;
  transition: background-color .3s;
}
.title-schedule > button:hover{
  background-color: #EDB406;
}
.title-schedule > button:active{
  background-color: #c79600;
}

.block-gallery {
  z-index: 10;
  flex-direction: column;
  width: 100vw !important;
  padding-left: calc((100vw - 1300px) / 2);
  margin-top: 80px !important;
}

.coaches-block {
  z-index: 6;
  align-items: center;
  padding-top: 190px;
  width: 100vw !important;
  padding-left: calc((100vw - 1300px) / 2);
}

.block-gallery p, .coaches-block p {
  color: #A3A3A3;
  font-size: 20px;
  font-weight: 600;
  width: auto;
}

.coaches-block h1 {
  width: auto;
}

.coaches-block > .title {
  margin: 0;
  width: fit-content;
  margin-right: 100px;
}

.background-block > div {
  z-index: 10;
}

.background-block > .contacts {
  margin: 120px auto 0 auto;
}

.contacts > .title {
  height: 100%;
  margin: 0;
  justify-content: center;
}

.contacts-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 60px;
  row-gap: 40px;
}

.contacts-info > div {
  align-items: center;
}

.contacts-info p {
  color: white;
  font-size: 20px;
  font-weight: 800;
}

.contacts-info img {
  width: 40px;
  max-height: 40px;
  margin-right: 16px;
}
.map {
  z-index: 10;
  height: 60vh;
}
.form{
  position: fixed;
  z-index: 100;

  top: 0;
}
</style>
<style>
.ymaps-2-1-79-ground-pane {
  /*-webkit-filter: grayscale(1);*/
  /*-moz-filter: grayscale(1);*/
  /*-o-filter: grayscale(1);*/
  filter: grayscale(100%);
}
.ymaps-2-1-79-inner-panes{
  mix-blend-mode: difference;
}

</style>

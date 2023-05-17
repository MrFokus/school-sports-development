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
    <div class="background-block" style="z-index: 6">
      <img class="second-break-background" src="~/assets/img/second-break-background.png" alt="">
      <div class="schedule-block">
        <div class="title-schedule">
          <h1>РАСПИСАНИЕ</h1>
          <button>ЗАПИСАТЬСЯ</button>
        </div>
        <div class="schedule">
          <table-schedule :schedule="schedule"/>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import CardDiscipline from "@/components/CardDiscipline";
import TableSchedule from "@/components/TableSchedule"

export default {
  components: {
    CardDiscipline,
    TableSchedule,
  },
  data() {
    return {
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
                  address_hall: "ул. Леонтия Кривенкова 25",
                },
                {
                  day: "ВТ/ЧТ",
                  time: "17:30 – 18:30",
                  address: "Школа №18",
                  address_hall: "ул. Леонтия Кривенкова 25",
                },
                {
                  day: "ПН/ПТ",
                  time: "17:30 – 18:30",
                  address: "Школа №48",
                  address_hall: "ул. Космонавтов 82/4",
                },
                {
                  day: "ПН/ПТ",
                  time: "20:00 – 21:00",
                  address: "Школа №49",
                  address_hall: "Звёздная ул. 12",
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
                  address_hall: "бул. Шубина 15",
                },
                {
                  day: "ЧТ",
                  time: "15:10 – 16:40",
                  address: "ГДЮЦ «Спортивный»",
                  address_hall: "ул. Стаханова 28Б",
                },
                {
                  day: "ЧТ",
                  time: "16:50 – 18:20",
                  address: "ГДЮЦ «Спортивный»",
                  address_hall: "ул. Стаханова 28Б",
                },
                {
                  day: "СБ",
                  time: "15:20 – 16:50",
                  address: "ГДЮЦ «Спортивный»",
                  address_hall: "ул. Стаханова 28Б",
                },
                {
                  day: "СБ",
                  time: "17:00 – 18:30",
                  address: "ГДЮЦ «Спортивный»",
                  address_hall: "ул. Стаханова 28Б",
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
                  address_hall: "ул. Леонтия Кривенкова 25",
                },
                {
                  day: "ПН/ПТ",
                  time: "17:30 – 18:30",
                  address: "Школа №48",
                  address_hall: "ул. Космонавтов 82/4",
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
                  address: "Филлипченко 7/4",
                  address_hall: null,
                },
                {
                  day: "ПН/СБ",
                  time: "13:20 – 14:20",
                  address: "Филлипченко 7/4",
                  address_hall: null,
                },
                {
                  day: "ПТ",
                  time: "15:10 – 16:10",
                  address: "Филлипченко 7/4 ",
                  address_hall: null,
                },
                {
                  day: "ПТ",
                  time: "16:50 – 17:50",
                  address: "Филлипченко 7/4 ",
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
}

.background-block > div {
  margin: auto;
  width: min(1300px, 100%);
}

.scratches-background, .black-img, .first-break-background, .second-break-background {
  position: absolute;
  width: 100%;
  object-fit: cover;
}
/*.second-break-background {*/
/*  z-index: 4;*/
/*}*/

/*.scratches-background {*/
/*  z-index: 4;*/
/*}*/

/*.black-img {*/
/*  z-index: 2;*/
/*}*/

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

.title-training > p {
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

.schedule-block{
  flex-direction: column;
  padding: 150px 0px 0px 0px;
}
.title-schedule {
  justify-content: center;
  margin-bottom: 60px;
}
.title-schedule>h1{
  width: fit-content;
  margin-right: 22px;
  font-weight: 700;
  font-size: 48px;
}
.title-schedule>button{
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

</style>

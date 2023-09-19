<template>
  <div class="row">
    <div @click="OpenSchedule" :class="`btn-show-all-schedule ${active}`">
      <span class="strong">{{ row.teacher }}</span>
      <span class="medium-strong">{{ row.discipline }}</span>
    </div>
    <div :style="`max-height:${maxHeight}px`" ref="allSchedule" :class="`all-schedule`">
      <div v-for="group of row.groups" class="teacher">
        <span class="medium-strong">{{ group.name }}</span>
        <div class="days">
          <p class="day" v-for="day of group.days">
            {{ day.day }}
          </p>
        </div>
        <div class="times">
          <div class="time" v-for="day of group.days">
            <p>{{ day.time }}</p>
          </div>
        </div>
        <div class="addresses">
          <div class="address" v-for="day of group.days">
            <div class="container">
              <p v-if="day.address_hall" class="visible-address">{{ day.address }}</p>
              <p class="standard-address" v-else>{{ day.address }}</p>
              <div class="modal-address"><p class="hidden-address">{{ day.address_hall }}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['row', 'state'],
  data() {
    return {
      maxHeight: 0,
      active: '',
    }
  },
  watch: {
    state() {
      if (!this.state) {
        this.active = '';
        this.maxHeight = 0
      } else {
        let child = this.$refs.allSchedule.getElementsByClassName('teacher')
        let sumHeight = 0
        for (let i = 0; i < child.length; i++) {
          const childHeight = child[i].offsetHeight;
          sumHeight += childHeight
        }
        this.active = 'active';
        this.maxHeight = sumHeight
      }
    }
  },
  methods: {
    OpenSchedule() {
      if (this.state === true)
        this.$emit('nullStateRow', false)
      else
        this.$emit('nullStateRow', true)
    }
  },
}
</script>

<style scoped>
.row {
  flex-direction: column;
}

h1, h3, .strong, .medium-strong {
  color: white;
}
h1 ,.strong{
  text-transform: uppercase;
  font-size: 24px;
  font-weight: bold;
}
.h3 , .medium-strong{
  font-size: 18px;
  font-weight: 700;
}

.btn-show-all-schedule {
  border-top: none;
}

.btn-show-all-schedule {
  padding: 30px 90px;
  border-bottom: #EDB406 1px solid;
  border-top: #EDB406 1px solid;
  width: 100%;
  justify-content: space-between;
  height: fit-content;
  align-items: center;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.btn-show-all-schedule:hover {
  background-color: #131313;
}

.active, .active:hover {

  background-color: #EDB406;
}

.all-schedule {
  flex-direction: column;
  margin: 0 90px;
  overflow: hidden;
  transition: max-height 1s ease;
}

.teacher {
  display: grid;
  grid-template-columns: 2.3fr 0.7fr 1fr 1fr;
  padding: 35px 0;
  border-bottom: #EDB406 2px solid;
}

.teacher:last-child {
  border-bottom: none;
}

.days, .times, .addresses {
  flex-direction: column;
  justify-content: center;
}

.day:not(:last-child), .time:not(:last-child), .address:not(:last-child) {
  margin-bottom: 2rem;
}

.teacher p {
  color: #A3A3A3;
  font-weight: 600;
  font-size: 20px;
}

.teacher h3, .teacher .medium-strong {
  font-size: 22px;
  font-weight: 600;
  display: flex;
  align-items: center;
}

/*.active, .active:hover{*/
/*  background-color: #EDB406;*/
/*}*/
.address {
  flex-grow: 1;
  justify-content: flex-end;
}

.addresses {
  position: relative;
}

.modal-address {
  position: absolute;
  z-index: 9;
  display: none;

  right: 110%;
  bottom: 0%;
  background-color: #131313;
  padding: 10px;
  height: fit-content;
  width: max-content;
  max-width: 500px;
  border: 1px #EDB406 solid;
}

.modal-address p {
  width: 100%;
  text-overflow: ellipsis;
}

.visible-address {
  display: block;
  text-decoration: underline #EDB406;
  color: #EDB406 !important;
  line-height: 100%;
}

.visible-address:hover, .modal-address:hover + .visible-address {
  color: #A3A3A3 !important;
  text-decoration: none;
  cursor: pointer;
}

.visible-address:hover + .modal-address, .modal-address:hover {
  display: inline-block;
}

.container {
  position: relative;
}

@media (max-width: 1439px) and (min-width: 426px) {
  .row {
    flex-direction: column;
  }

  h1,.strong {
    font-size: 2.5vw;
  }

  h3, .medium-strong {
    font-size: 1.7vw;
  }

  .btn-show-all-schedule {
    padding: 2.1vw 6.25vw;
  }


  .all-schedule {
    margin: 0 6.25vw;
  }

  .teacher {
    padding: 2.4vw 0;
  }

  .day:not(:last-child), .time:not(:last-child), .address:not(:last-child) {
    margin-bottom: 2rem;
  }

  .teacher p {
    font-size: 1.39vw;
  }

  .teacher h3, .teacher .medium-strong {
    font-size: 1.9vw;
  }

  .modal-address {
    padding: 0.7vw;
    max-width: 34.7vw;
  }
}

@media (max-width: 425px) {
  .teacher {
    padding: 20px 20px;
    /*grid-template-columns: none;*/
    grid-template-columns:40px 40px 2fr 3fr;
    grid-template-areas:
      "H H H H H H H H"
      "D D T T T A A A ";
    border-bottom: #EDB406 0.5px solid;
  }

  .teacher > h3 , .teacher> .medium-strong {
    width: 100%;
    font-size: 18px;
    /*justify-content: center;*/
    grid-area: H;
    margin-bottom: 10px;
  }

  .teacher > .days {
    grid-area: D;
    /*min-width: 60px;*/
    /*max-width: 60px;*/

  }

  .teacher > .times {
    grid-area: T;
  }
  .time{
    justify-content: flex-start;
  }
  .teacher > .addresses {
    grid-area: A;
  }

  .all-schedule {
    margin: 0;
  }

  .btn-show-all-schedule {
    padding: 10px 20px;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: #EDB406 0.5px solid;
    border-top: #EDB406 0.5px solid;;
  }

  .teacher p {
    font-size: 12px;
  }

  .btn-show-all-schedule > h1,.btn-show-all-schedule >.strong {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .btn-show-all-schedule > h3 , .btn-show-all-schedule > .medium-strong {
    font-size: 14px;
    font-weight: 500;
    color: #A3A3A3;
  }
  .active >h3 , .active > .medium-strong{
    color: white;
  }
}
</style>

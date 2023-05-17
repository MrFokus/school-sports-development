<template>
  <div class="row">
    <div @click="OpenSchedule" :class="`btn-show-all-schedule ${active}`">
      <h1>{{ row.discipline }}</h1>
      <h3>{{ row.group }}</h3>
    </div>
      <div :style="`max-height:${maxHeight}px`" ref="allSchedule" :class="`all-schedule`" >
        <div v-for="teacher of row.teacher" class="teacher">
          <h3>{{ teacher.name }}</h3>
          <div class="days">
            <p class="day" v-for="day of teacher.days">
              {{ day.day }}
            </p>
          </div>
          <div class="times">
            <div class="time" v-for="day of teacher.days">
              <p>{{day.time}}</p>
            </div>
          </div>
          <div class="addresses">
            <div class="address" v-for="day of teacher.days">
              <p>{{day.address}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['row','state'],
  data(){
    return{
      maxHeight:0,
      active:'',
    }
  },
  watch:{
    state(){
      if (!this.state){
        this.active='';
        this.maxHeight=0
      }
      else {
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
  methods:{
    OpenSchedule(){
      if(this.state===true)
        this.$emit('nullStateRow',false)
      else
        this.$emit('nullStateRow',true)
      }
  },
}
</script>

<style scoped>
.row {
  flex-direction: column;
}

h1, h3 {
  color: white;
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
  transition:  background-color 0.3s ease;
}

.btn-show-all-schedule:hover {
  background-color: #131313;
}
.active,.active:hover{

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
.teacher:last-child{
  border-bottom: none;
}

.days,.times, .addresses {
  flex-direction: column;
  justify-content: center;
}
.day:not(:last-child), .time:not(:last-child),.address:not(:last-child){
  margin-bottom: 2rem;
}
.teacher p {
  color: #A3A3A3;
  font-weight: 600;
  font-size: 20px;
}
.teacher h3{
  font-size: 28px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
/*.active, .active:hover{*/
/*  background-color: #EDB406;*/
/*}*/
.address{
  justify-content: flex-end;
}

</style>

<template>
  <div class="table-schedule">
    <row-table-schedule @nullStateRow="nullStateRow($event,index)" :key="index" :state="stateRow[index]" :row="row" v-for="(row,index) in schedule"/>
  </div>
</template>

<script>
import RowTableSchedule from "@/components/RowTableSchedule";
export default {
  props:['schedule'],
  data(){
    return{
      stateRow:[],
    }
  },
  components:{
    RowTableSchedule,
  },
  methods:{
    nullStateRow(value,index){
      for (let i = 0; i < this.stateRow.length; i++) {
        this.stateRow[i]=false;
      }
      this.stateRow.splice(index,1,value)
    }
  },
  mounted() {
    this.stateRow=new Array(this.schedule.length).fill(false)
  }
}
</script>

<style scoped>
.table-schedule{
  width: 100%;
  flex-direction: column;
  background-color: #181818;
  border-top: #EDB406 1px solid;
  border-bottom: #EDB406 1px solid;
  border-right: #EDB406 2px solid;
  border-left: #EDB406 2px solid;
}
</style>

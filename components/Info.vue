<template>
  <div v-if="discipline" class="info-component">
    <h1 class="name-page">{{discipline.title}}</h1>
    <div class="description">
      <p v-for="p in discipline.paragraph"><span>{{p.title}}</span>{{p.content}}</p>
    </div>
    <div v-if="discipline.include" class="include-list">
      <h2>Наша программа включает в себя</h2>
      <ul>
        <li v-for="(row,index) in discipline.include"> <span>{{index+=1}}</span> {{row}}</li>
      </ul>
    </div>
    <div class="description">
      <p v-for="p in discipline.paragraph_after"><span>{{p.title}}</span>{{p.content}}</p>
    </div>
    <h1>Галерея</h1>
    <div class="gallery">
      <img :class="discipline.gallery.type" v-for="img in discipline.gallery.img" :src="img" alt="">
    </div>
    <div v-if="discipline.teachers" class="teachers">
      <h1>Наши тренеры</h1>
      <div v-for="teacher in discipline.teachers" class="teacher">
        <img :src="teacher.img" alt="">
        <div class="description">
          <h3 class="name">{{teacher.name}}</h3>
          <p v-html="teacher.description"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    discipline:{
      type:Object,
      default:{},
    }
  }
}
</script>

<style scoped>
.info-component,.description,.include-list{
  flex-direction: column;
  color: white;
}
.info-component{
  width: min(100%,1300px);
}
.description p{
  font-weight: 300;
  font-size: 20px;
  margin-top: 20px;
  line-height: 28px;
}
.description p>span{
  font-weight: 700;
}
h1{
  font-size: 36px;
  margin-top: 80px;
}
.name-page{
  font-size: 40px;
}
h2{
  font-size: 32px;
  margin-top: 34px;
  margin-bottom: 40px;
  font-weight: 600;
}
.include-list li>span{
  text-align: center;
  width: 24px;
  margin-right: 20px;
  font-size: 36px;
  font-weight: 700;
  color: #EDB406;
}
.include-list ul{
  flex-direction: column;
}
.include-list li{
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  font-size: 20px;
}
.horizontal{
  width: 30%;
  aspect-ratio: 16/9;
  object-fit: cover;
  margin-right: 40px;
}
.vertical{
  width: 20%;
  aspect-ratio: 3/4;
  object-fit: cover;
  margin-right: 25px;
}
.gallery{
  width: calc(100% + ((100vw - 1300px) / 2));
  overflow: auto;
  margin-top: 40px;
}
.teachers{
  flex-direction: column;
}
.teacher{

  align-items: center;
  border-bottom: 2px #EDB406 solid;
  padding: 60px 0;
}
.teacher:last-child{
  border: none;
  padding: 0;
}
.teacher:nth-child(2n+1) .description{
  order: -1;
  margin: 0;
}
.teacher:nth-child(2n+1){
  justify-content: space-between;
}
.teacher>img{
  width: 400px;
  aspect-ratio: 4/6;
  object-fit: cover;
}
.teacher .description{
  margin-left: 80px;
}
.teacher h3{
  font-size: 32px;
  font-weight: 700;
}
.teacher .description p{
  font-size: 24px;
  font-weight: 300;
  line-height: 40px;
}
</style>

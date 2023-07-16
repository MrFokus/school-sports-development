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
      <img :class="discipline.gallery.type" v-for="img in discipline.gallery.img" :src="img.src" alt="">
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
  },
  created() {
    this.$store.dispatch('discipline/getPhoto',this.$route.params.name)
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
@media (max-width: 1439px) and (min-width:426px) {
  .info-component{
    width: 100%;
    padding: 0 5.5vw;
  }
  .description p{
    font-size: 1.4vw;
    margin-top: 1.4vw;
    line-height: 2vw;
  }
  h1{
    font-size: 2.5vw;
    margin-top: 5.5vw;
  }
  .name-page{
    font-size: 2.7vw;
  }
  h2{
    font-size: 2.2vw;
    margin-top: 2.3vw;
    margin-bottom: 2.7vw;
  }
  .include-list li>span{
    width: 1.7vw;
    margin-right: 1.4vw;
    font-size: 2.5vw;
  }
  .include-list li{
    margin-bottom: 1.7vw;
    font-size: 1.4vw;
  }
  .horizontal{
    margin-right: 2.7vw;
  }
  .vertical{
    margin-right: 1.7vw;
  }
  .gallery{
    width: 100%;
    margin-top: 2.7vw;
  }
  .teacher{
    padding: 4.2vw 0;
  }

  .teacher>img{
    width: 27.8vw;
  }
  .teacher .description{
    margin-left: 5.5vw;
  }
  .teacher h3{
    font-size: 2.2vw;
  }
  .teacher .description p{
    font-size: 1.7vw;
    line-height: 2.7vw;
  }
}

@media (max-width: 425px) {

  .name-page{
    font-size: 24px;
    font-weight: 600;
    margin-top: 10px;
  }
  .description >p{
    font-size: 18px;
  }
  .include-list >h2{
    font-size: 20px;
  }
  .include-list ul>li{
    font-size: 18px;
  }
  h1{
    font-size: 22px;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .gallery{
    width: 100vw;
    margin: 0 -25px;
  }
  .gallery>img:first-child{
    margin-left: 25px;
  }
  .gallery>img{
    margin-right: 10px;
    width: 85%;
  }
  .teacher{
    padding: 20px 0;
    max-width: 100%;
    flex-direction: column;
  }
  .teacher>img{
    width: 100%;
  }
  .teacher>.description{
    margin: 0;
    margin-top: 20px;
  }
  .teacher .name{
    font-size: 20px;
  }
  .teacher > .description p{
    font-size: 18px;
  }
  .teacher:nth-child(2n+1) .description{
    order: unset;
    margin-top: 20px;
  }
  .teacher:last-child{
    padding: 20px 0;
  }
}
</style>

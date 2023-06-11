<template>
  <div v-if="discipline" class="info-component">
    <h1>{{discipline.title}}</h1>
    <div class="description">
      <p v-for="p in discipline.paragraph"><span>{{p.title}}</span>{{p.content}}</p>
    </div>
    <div v-if="discipline.include" class="include-list">
      <h1>Наша программа включает в себя</h1>
      <ul>
        <li v-for="(row,index) in discipline.include"> <span>{{index++}}</span> {{row}}</li>
      </ul>
    </div>
    <div class="description">
      <p v-for="p in discipline.paragraph_after"><span>{{p.title}}</span>{{p.content}}</p>
    </div>
    <h1>Галерея</h1>
    <div class="gallery">
      <img v-for="img in discipline.gallery" :src="img" alt="">
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

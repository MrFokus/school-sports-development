<template>
  <div class="menu">
    <div class="content">
      <h1>Меню</h1>
      <ul class="redirect">
        <li @click="$emit('close-menu')"><nuxt-link to="/">Главная</nuxt-link></li>
        <li @click="$emit('close-menu')"><nuxt-link to="/info/karate">Тренировки Каратэ</nuxt-link></li>
        <li @click="$emit('close-menu')"><nuxt-link to="/info/kickboxing">Тренировки Кикбоксинг</nuxt-link></li>
        <li @click="$emit('close-menu')"><nuxt-link to="/info/child-training">Детские развиващие тренировки</nuxt-link></li>
        <li @click="$emit('close-menu')"><nuxt-link to="/info/school">О нас</nuxt-link></li>
      </ul>
      <div v-if="$route.path==='/'">
        <a href="#schedule">Расписание</a>
        <a href="#teachers">Тренеры</a>
        <a href="#contacts">Контакты</a>
      </div>
    </div>
  </div>
</template>


<style scoped>
.menu{
  position: absolute;
  background-color: #181818;
  top: 110%;
  right: 0%;
  padding: 20px;
  outline: #EDB406 2px solid;
  z-index: 3;
}
.content,.redirect{
  flex-direction: column;
  color: white;
}
.redirect{
  padding-bottom: 5px;
}
.content >div{
  flex-direction: column;
  width: 100%;
  border-top: #EDB406 1px solid;
}
a{
  color: white;
  margin-top: 5px;
  font-size: 18px;
}
a:hover{
  color: #EDB406;
}
h1{
  font-weight: 600;
}

</style>

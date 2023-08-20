<template>
  <div class="error">
    <p>Страница не найдена</p>
    <button @click="$router.push('/')">Вернуться на главную</button>
  </div>
</template>
<script>
export default {
  middleware: 'error'
}
</script>

<style scoped>
.error{
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 80vh;
}
p{
  color: white;
}
button{
  border: none;
  outline: none;
  background: #EDB406;
  width: fit-content;
  padding: 10px 20px;
  color: white;
  margin-top: 20px;
}
</style>

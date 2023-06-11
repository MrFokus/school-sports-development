<template>
  <div class="form">
    <div @click="closeModal" class="out-space"/>
    <div class="content">
      <script src="https://yastatic.net/s3/frontend/forms/_/embed.js"></script><iframe src="https://forms.yandex.ru/u/6485c2d2f47e7327e5346859/?iframe=1" frameborder="0" name="ya-form-6485c2d2f47e7327e5346859" width="650"></iframe>
    </div>

  </div>
</template>

<script>
export default {
  methods:{
    closeModal(){
      this.$emit('closeModal')
    }
  }
}
</script>

<style scoped>
.form{
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
.out-space{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(24, 24, 24, 0.3);
}
.content{
  position: absolute;
  outline: #EDB406 2px solid;
}
</style>

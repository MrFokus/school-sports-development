<template>
  <main>
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
      </div>
      <div class="portrait-title">
        <img src="~/assets/img/portrait-title.png" alt="">
      </div>
    </div>
    <img class="first-break-background" src="~/assets/img/first-break-background.png" alt="">
  </main>
</template>

<script>

</script>


<style scoped>
main {
  width: 100%;
  justify-content: center;
}

.scratches-background, .black-img,.first-break-background {
  position: absolute;
  width: 100%;
  object-fit: cover;
}

.scratches-background {
  z-index: 4;
}

.black-img {
  z-index: 2;
}
.first-break-background{
  top: 810px;
  z-index: 6;
}

.content {
  z-index: 5;
  width: min(1300px, 100%);
  position: relative;
}

.title {
  flex-direction: column;
  height: fit-content;
  margin-top: 135px;
}

.title > h1 {
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
</style>

<template>
  <div class="form">
    <div @click="closeModal" class="out-space"/>
    <div class="content">
      <div class="title">
        <h2>Напишите нам</h2>
        <img @click="closeModal" src="~/assets/img/close.svg" alt="">
      </div>
      <div class="mail">
        <p>Адрес электронной почты</p>
        <input v-model="mail" type="email">
      </div>
      <div class="phone">
        <p>Телефон</p>
        <input v-model="phone" type="tel">
      </div>
      <div class="comment">
        <p>Комментарий</p>
        <p class="description">Напишите ваши пожелания (дата, время, тренер, дисциплина, возраст учащегося)</p>
        <textarea v-model="comment"></textarea>
      </div>
      <p v-if="error" class="error">{{error}}</p>
      <button @click="sendForm" class="send">Отправить</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      widthForm: 650,
      mail:"",
      phone:"",
      comment:"",
      response:{},
      error:'',
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    async sendForm(){
      if(this.mail && this.phone && this.comment){
        if(!/\S+@\S+\.\S+/.test(this.mail)){
          this.error = "Неверный почтовый адрес"
          setTimeout(()=>{
            this.error = ''
          },5000)
        }
        else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(this.phone)){
          this.error = "Неверный номер телефона"
          setTimeout(()=>{
            this.error = ''
          },5000)
        } else {
          let res = await this.$axios.post('http://45.8.97.97:3001/', {
            mail: this.mail,
            phone: this.mail,
            comment: this.comment
          })
          this.closeModal()
        }
      }
      else{
        this.error = "Все поля должны быть заполнены!"
        setTimeout(()=>{
          this.error = ''
        },5000)
      }
    }
  },
}
</script>

<style scoped>
.form {
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.out-space {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(24, 24, 24, 0.3);
}

.content {
  max-width: 50%;
  position: absolute;
  outline: #EDB406 2px solid;
  padding: 10px 20px 20px 20px;
  flex-direction: column;
  background: #131313;
}
.content > div{
  width: 100%;
  flex-direction: column;
  margin-bottom: 20px;
}
h2{
  color: white;
}
.content > div >input{
  padding: 4px 8px;
  outline: none;
  border: none;
}
.content > div >input:focus{
  border-radius: 0;
  outline: #EDB406 1px solid;
}
.content>div>p{
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
}
.comment> textarea{
  resize: none;
  padding: 4px 8px;
  min-height: 100px;
}
.comment > .description{
  font-size: 14px;
  font-weight: 400;
  color: #A3A3A3;
}
.send{
  background: #EDB406;
  color: white;
  border: none;
  padding: 10px 0;
  font-weight: 800;
}
.send:hover{
  background: #dfa900;
}
.send:active{
  background: #c79600;
}
.title{
  flex-direction: row !important;
  justify-content: space-between ;
}
.title>img{
  max-width: 35px;
  padding: 8px;
  cursor: pointer;
}
.error{
  color: red;
  font-size: 16px;
  font-weight: 800;
  margin:0 0 20px 0;
}
@media (max-width: 1439px) and (min-width:426px) {
  h2{
    font-size: 2vw;
  }
  .content {
    padding: 0.7vw 1.7vw 1.7vw 1.7vw;
  }
  .content > div{
    margin-bottom: 1.4vw;
  }
  .content>div input,.content>div textarea{
    font-size: 1.4vw;
  }
  .content>div>p{
    font-size: 1.25vw;
    margin-bottom: 0.4vw;
  }
  .comment> textarea{
    padding: 4px 8px;
    min-height: 7vw;
  }
  .comment > .description{
    font-size: 1vw;
  }
  .send{
    padding: 0.7vw 0;
  }

  .title>img{
    max-width: 2.4vw;
    padding: 0.7vw;
  }
  .error{
    font-size: 1.3vw;
    margin:0 0 1.4vw 0;
  }
}
@media (max-width: 425px) {
  .content{
    width: 80vw;
    max-width: none;
  }
  .title>h2{
    font-size: 20px;
  }
  .content > div p,.error{
    font-size: 16px;
    font-weight: 500;
  }
  .description{
    font-size: 12px !important;
  }
  .content > div > input,.content > div > textarea{
    border-radius: 0;
  }
}
</style>

<template>
  <div v-if="visibleModal" class="modal-policy">
    <p>Продолжая пользоваться сайтом вы соглашаетесь с <nuxt-link to="/privacy">политикой конфидециальности</nuxt-link> и даёте разрешение на использование cookie</p>
    <button @click="visibleModal=false">Хорошо</button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        visibleModal:true,
      }
    },
    mounted() {
      let obj = {};
      let cookies = document.cookie.split(/;/);
      for (let i = 0, len = cookies.length; i < len; i++) {
        let cookie = cookies[i].split(/=/);
        obj[cookie[0]] = cookie[1];
      }
      if (obj.policyAcceptDate){
        this.visibleModal =false;
      }
      else {
        setTimeout(()=>{
          let cookie_date = new Date();
          document.cookie = `policyAcceptDate=${cookie_date.getTime()};max-age=2629743;domain=school-kyzym.ru;path=/`;
        },5000)
      }
    }
  }
</script>

<style scoped>
.modal-policy{
  position: fixed;
  bottom: 5%;
  border: #EDB406 1px solid;
  z-index: 20;
  background-color: #131313;
  color: white;
  max-width: 40%;
  left: 3%;
  padding: 10px 20px;
  align-items: center;
}
.modal-policy p{
  font-size: 18px;
}
.modal-policy p a{
  color: #EDB406;
  text-decoration: #EDB406 underline;
}
.modal-policy button{
  background-color: #EDB406;
  color: white;
  border: none;
  height: fit-content;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 600;
  margin-left: 20px;
}
@media (max-width: 1439px) and (min-width:426px) {
  .modal-policy{
    position: fixed;
    bottom: 5%;
    border: #EDB406 1px solid;
    z-index: 20;
    background-color: #131313;
    color: white;
    max-width: 50%;
    left: 3%;
    padding: 1vw 2vw;
    align-items: center;
  }
  .modal-policy p{
    font-size: 1.2vw;
  }
  .modal-policy p a{
    color: #EDB406;
    text-decoration: #EDB406 underline;
  }
  .modal-policy button{
    background-color: #EDB406;
    color: white;
    border: none;
    height: fit-content;
    padding: 1vw 2vw;
    font-size: 1.5vw;
    font-weight: 600;
    margin-left: 2vw;
  }
  .modal-policy button:hover{
    background-color: #dfa900;
  }
  .modal-policy button:active{
    background-color: #c79600;
  }
}
@media (max-width: 425px){
  .modal-policy{
    max-width: 100%;
    position: fixed;
    bottom: 0;
    border: #EDB406 1px solid;
    width: 100%;
    left: 0;
    padding: 10px 20px;
  }
  .modal-policy p{
    font-size: 12px;
  }
  .modal-policy button{
    padding: 5px 10px;
    font-size: 16px;
    font-weight: 600;
    margin-left: 10px;
  }

}
</style>

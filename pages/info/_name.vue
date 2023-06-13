<template>
  <div class="info">
    <Info :discipline="$store.getters['discipline/active'][$route.params.name]"/>
    <footer>
      <div class="content">
        <p class="phone">+7 (888) 888-88-88</p>
        <div class="messengers">
          <a href="https://t.me/karatelipetsk"><img src="@/assets/img/telegram-icon.svg" alt=""></a>
          <a href="https://vk.com/kickboxinglipetsk"><img src="@/assets/img/vk-icon.svg" alt=""></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Info from "@/components/Info"
export default {
  middleware:'route',
  components: {
    Info
  }
}
</script>

<style scoped>
.info{
  width: 100%;
  align-items: center;
  flex-direction: column;
}
footer{
  width: 100%;
  padding: 50px 0;
  background-color: #0e0e0e;
  justify-content: center;
  margin-top: 60px;
}
footer .content{
  width: min(100%,1300px);
  align-items: center;
  justify-content: space-between;
}
footer .content p{
  color: white;
  font-size: 20px;
}
.messengers img:last-child{
  margin-left: 28px;
}
</style>

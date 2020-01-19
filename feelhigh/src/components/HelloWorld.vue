<template>
  <div class="hello">
    <img class="img-home" src="../assets/welcome.png">
    <h1 class="welcome" @click="goVideoList">{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'welcome real man',
      }
    },
    methods:{
      goVideoList(){
        this.$router.push({
          name:"VideoList"
        })
      }
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  .welcome{
    cursor: pointer;
    margin-top: 20px;
    font-family: "Cambria Math";
  }
  .welcome:hover{
    color: dodgerblue;
  }
</style>

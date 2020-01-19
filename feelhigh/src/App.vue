<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  /*html {*/
    /*height: 100%;*/
  /*}*/
  /*body{*/
    /*height: 100%;*/
  /*}*/

  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    background-color: #e0e0d1;
    height: 100vh;
  }

  .img-home{
    margin-top: 180px;
  }
</style>

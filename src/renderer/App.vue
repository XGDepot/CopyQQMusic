<template>
  <div id="app">
     <!-- style="-webkit-app-region: drag;" -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'elevue'
  }
</script>

<style>
  /* CSS */
  *{
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }
  ul,li{ padding:0;margin:0;list-style:none}
  table, caption, tbody, tfoot, thead, tr, th, td {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      font-size: 100%;
      /*background: transparent;*/
  }
  table {
      border-collapse:collapse;
      border-spacing:0;
  }
  fieldset, img { border:0;}
</style>

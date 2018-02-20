<template>
  <div class="container">
    <server-header></server-header>
    <hr>
    <server-body></server-body>
    <hr>
    <server-footer></server-footer>
  </div>
</template>

<script>
  import Header from "./Header.vue";
  import Body from "./Body.vue";
  import Footer from "./Footer.vue";
  export default {
    components: {
      'server-header': Header,
      'server-body': Body,
      'server-footer': Footer,
    }
  }
</script>

<style>

</style>

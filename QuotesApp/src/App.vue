<template>
  <div class="container">
    <h1>Quotes added</h1>
    <progressbar></progressbar>
    <app-input></app-input>
    <quotes></quotes>
  </div>
</template>

<script>
import quotes from "./components/quotes.vue";
import appInput from "./components/input.vue";
import progressbar from "./components/progressbar.vue";
export default {
  components: {
    quotes,
    appInput,
    progressbar,
  }
};
</script>

<style>

</style>

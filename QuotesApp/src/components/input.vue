<template>
  <div class="quote-creator">
    <div class="quote-creator__title">Quote</div>
    <textarea class="quote-creator__input form-control" name="" id="" cols="30" rows="10"></textarea>
    <button @click="addQuote" class="btn btn-primary">Add quote</button>
  </div>
</template>

<script>
import { events } from "../main.js";
export default {
  methods: {
    addQuote() {
      const text = document.querySelector('.quote-creator__input').value;
      events.addQuote(text);
    }
  }
};
</script>

<style>

</style>

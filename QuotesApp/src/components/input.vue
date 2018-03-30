<template>
  <div :class="['quote-creator', {'has-error': error}]">
    <h3 class="quote-creator__title">Quote</h3>
    <textarea @input="error = false" class="quote-creator__input form-control" name="" id="" cols="30" rows="10"></textarea>
    <div v-if="error" class="alert alert-danger" role="alert">
      <p class="text-center">Write something</p>
    </div>
    <button :disabled="amount === 10" @click="addQuote" class="btn btn-primary btn-lg">Add quote</button>
  </div>
</template>

<script>
import { events } from "../main.js";
export default {
  data() {
    return {
      amount: null,
      error: false,
    }
  },
  methods: {
    addQuote() {
      const inputElement = document.querySelector('.quote-creator__input');
      const text = inputElement.value;
      if (!text.length) {
        return this.error = true;
      }
      events.addQuote(text);
      inputElement.value = '';
    }
  },
  created() {
    events.$on('quotesChange', (amount) => {
      this.amount = amount;
    })
  }
};
</script>

<style>
.quote-creator {
  margin-bottom: 20px;
}
.quote-creator__input {
  margin-bottom: 20px;
  resize: none;
}
</style>

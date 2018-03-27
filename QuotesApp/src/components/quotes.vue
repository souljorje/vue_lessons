<template>
  <div class="quotes-wrapper">
    <quote
      v-for="(quote, index) in quotes"
      :key="index"
      :text="quote"
      @click.native="removeQuote(index)">
    </quote>
  </div>
</template>

<script>
import { events } from "../main.js";
import quote from "./quote.vue";
export default {
  data() {
    return {
      quotes: [],
    }
  },
  components: {
    quote,
  },
  methods: {
    addQuote(text) {
      this.quotes.push(text);
      const self = this;
      events.$emit('quotesChange', self.quotes.length);
    },
    removeQuote(index) {
      this.quotes.splice(index, 1);
      const self = this;
      events.$emit('quotesChange', self.quotes.length);
    }
  },
  created() {
    events.$on('quoteWritten', (text) => {
      this.addQuote(text);
    })
  }
};
</script>

<style>

</style>

<template>
  <div class="quotes-wrapper">
    <div class="row">
      <quote
        v-for="(quote, index) in quotes"
        :key="index"
        :text="quote"
        @click.native="removeQuote(index)">
      </quote>
      <div v-if="quotes.length" class="col-xs-12">
        <div class="alert alert-info" role="alert">
          <p class="text-center">Info: click on a Quote to Delete it</p>
        </div>
      </div>
      <div v-if="quotes.length === 10" class="col-xs-12">
        <div class="alert alert-warning" role="alert">
          <p class="text-center">Info: maximum quotes approached</p>
        </div>
      </div>
    </div>
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

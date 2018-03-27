<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr>
        <component :is="selectedComponent">
          <p>Default content</p>
        </component>
        <!-- <app-quote>
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus perspiciatis voluptates magni repellat eum qui dolorem provident mollitia rerum consectetur error numquam deleniti architecto natus quibusdam, a ea excepturi inventore.</p>
        </app-quote> -->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Author from "./components/Author.vue";
import New from "./components/New.vue";
export default {
  data() {
    return {
      quoteTitle: 'The Quote',
      selectedComponent: 'appQuote',
    }
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New,
  }
};
</script>

<style>

</style>

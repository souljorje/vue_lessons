<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUppercase | toLowercase }}</p>
        <input type="text" v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits" :key="fruit">
            {{ fruit }}
          </li>
        </ul>
        <hr>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import appList from "./List.vue";
export default {
  data() {
    return {
      text: "Hello ma boi",
      fruits: ["Apple", "Banana", "Lemon", "Melon"],
      filterText: ""
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  },
  components: {
    appList,
  }
};
</script>

<style>

</style>

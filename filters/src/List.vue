<template>
  <div>
    <h1>Filters & Mixins</h1>
    <p>{{ text }}</p>
    <ul>
      <li v-for="fruit in filteredFruits" :key="fruit">
        {{ fruit }}
      </li>
    </ul>
  </div>
</template>

<script>
import { fruitMixin } from './fruitMixin.js'
export default {
  mixins : [fruitMixin]
};
</script>

<style>

</style>

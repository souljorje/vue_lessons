<template>
  <div class="progress">
    <div class="progress-bar"
      role="progressbar"
      :aria-valuenow="current === 0 ? 0 : current/maximum * 100"
      aria-valuemin="0"
      :aria-valuemax="maximum"
      :style="{width: current === 0 ? 0 : `${current/maximum * 100}%`}">
      <span>{{ current }}/{{ maximum }}</span>
    </div>
  </div>
</template>

<script>
import { events } from "../main.js";
export default {
  data() {
    return {
      current: 0,
      maximum: 10
    }
  },
  created() {
    events.$on('quotesChange', (amount) => {
      this.current = amount;
    })
  }
};
</script>

<style>
  .progressbar__outer {
    position: relative;
  }
  .progressbar__inner {
    position: absolute;
    background-color: #337ab7;
    transition: .3s ease width;
  }
</style>

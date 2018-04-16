<template>
  <div :class="['alert', {'alert-success': right}, {'alert-danger': !right}]" role="alert">
    <h2>{{ title }}</h2>
    <hr>
    <button
      class="btn btn-success"
      @click="continueExercise(true)">
      Next question
    </button>
    <button
      class="btn btn-warning"
      v-if="!right"
      @click="continueExercise(false)">
      Try again
    </button>
  </div>
</template>

<script>
export default {
  props: ['right'],
  computed: {
    title() {
      return this.right ? 'Right! Go ahead!' : 'Wrong! Try again or go ahead.';
    }
  },
  methods: {
    continueExercise(value) {
      this.$emit('continue', value)
    }
  },
}
</script>

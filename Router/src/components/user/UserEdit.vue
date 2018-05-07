<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
    <hr>
    <button @click="confirm" class="btn btn-primary">Confirm</button>
    <div style="height: 700px"></div>
    <p id="data">Some data</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmed: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next(true);
    } else {
      if (confirm('Are you sure?')) {
        next();
      } else {
        next(false);
      }
    }
  },
  methods: {
    confirm() {
      this.confirmed = true;
    }
  }
};
</script>

<template>
  <div>
    <h3>User ID:{{ id }} Details</h3>
    <router-link
      tag="button"
      :to="link"
      class="btn btn-primary">Edit</router-link>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      link: {
        name: 'userEdit',
        params: this.id,
        query: {
          locale: 'en',
          q: 100,
        },
        hash: '#data'
      }
    }
  },
}
</script>

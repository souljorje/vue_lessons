<template>
  <div>
    <h3>User ID:{{ id }} Details</h3>
    <router-link
      tag="button"
      :to="{
        name: 'userEdit',
        params: { id },
        query: {
          locale: 'en',
          q: 100,
        }
      }"
      class="btn btn-primary">Edit</router-link>
  </div>
</template>

<script>
export default {
  props: ['id']
}
</script>

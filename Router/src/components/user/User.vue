<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <router-link
      tag="button"
      :to="{name: 'home'}"
      class="btn btn-primary">Home</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>


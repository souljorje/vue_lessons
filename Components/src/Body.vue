<template>
  <div class="row">
    <servers></servers>
    <server-status></server-status>
  </div>
</template>

<script>
  import Servers from "./Servers.vue"
  import ServerStatus from "./ServerStatus.vue"
  export default {
    components: {
      'servers': Servers,
      'server-status': ServerStatus,
    }
  }
</script>

<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!serverStatus">Server Details are currently not updated</p>
    <p v-else>Server #{{serverStatus.id}} selected, Status: {{serverStatus.status}}</p>
    <hr>
    <button @click="changeStatus">Fix the server</button>
  </div>

</template>

<script>
  import { events } from "../../main.js";
  export default {
    data() {
      return {
        serverStatus: null,
      }
    },
    methods: {
      changeStatus() {
        this.serverStatus.status = 'normal'
      },
    },
    created() {
      events.$on('checkStatus', (status) => {
        this.serverStatus = status;
      })
    }
  }
</script>

<style>

</style>

<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li 
        class="list-group-item" 
        v-for="(server, index) in servers" 
        :key="index"
        @click="checkStatus(server)">
        Server #{{ server.id }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { events } from "../../main.js";
  export default {
    data() {
      return {
        servers: [
          {id: 1, status: 'normal'},
          {id: 2, status: 'alert'},
          {id: 3, status: 'critical'},
          {id: 4, status: 'unknown'},
        ],
      }
    },
    methods: {
      checkStatus(server) {
        events.checkStatus(server);
      }
    }
  }
</script>

<style>

</style>

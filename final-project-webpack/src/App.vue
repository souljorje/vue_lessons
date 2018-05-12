<template>
  <v-app>
    <appSidebar></appSidebar>
    <appToolbar></appToolbar>
    <main></main>
  </v-app>
</template>

<script>
import appSidebar from './components/Sidebar/Sidebar';
import appToolbar from './components/Toolbar/Toolbar';

export default {
  components: {
    appSidebar,
    appToolbar,
  },
  name: 'App',
};
</script>

<template>
  <v-app>
    <appSidebar></appSidebar>
    <appToolbar></appToolbar>
    <main>
      <v-container grid-list-lg mt-5>
        <app-stocks></app-stocks>
        <app-portfolio></app-portfolio>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import appSidebar from './components/Sidebar/Sidebar';
import appToolbar from './components/Toolbar/Toolbar';
import appStocks from './components/Stocks/Stocks';
import appPortfolio from './components/Portfolio/Portfolio';

export default {
  components: {
    appSidebar,
    appToolbar,
    appStocks,
    appPortfolio,
  },
  name: 'App',
  created() {
    this.$store.commit('calculateData');
  },
};
</script>

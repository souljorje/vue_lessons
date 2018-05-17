<template>
  <v-app>
    <appSidebar></appSidebar>
    <appToolbar></appToolbar>
    <main>
      <v-container grid-list-lg mt-3>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </main>
  </v-app>
</template>

<style lang="stylus">
$translate = 10px
$duration = 0.3s

.slide
  &-enter
    opacity 0
    transform translateY($translate)
  &-enter-active
    animation slide-in $duration ease forwards
    transition $duration ease opacity
  &-leave-active
    animation slide-out $duration ease forwards
    transition $duration ease opacity
    opacity 0

@keyframes slide-in
  from
    transform translateY($translate)
  to
    transform translateY(0)

@keyframes slide-out
  from
    transform translateY(0)
  to
    transform translateY($translate)
</style>


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
    this.$http.get('defaultData.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.$store.state.defaultData = data;
        localStorage.setItem('day', this.$store.state.defaultData.day);
      })
      .then(() => {
        this.$store.commit('calculateData');
      })
  },
};
</script>

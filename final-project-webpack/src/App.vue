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

// .slide-enter {
//   opacity: 0;
//   transform: translateY(20px);
// }
// .slide-enter-active {
//   animation: slide-in 0.2s ease forwards;
//   transition: 0.2s ease opacity;
// }
// .slide-leave {
// }
// .slide-leave-active {
//   animation: slide-out 0.2s ease forwards;
//   transition: 0.2s ease opacity;
//   opacity: 0;
//   /* position: absolute; */
// }

// .slide-move {
//   transition: transform 0.2s;
// }

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
    this.$store.commit('calculateData');
    localStorage.setItem('day', '1');
  },
};
</script>

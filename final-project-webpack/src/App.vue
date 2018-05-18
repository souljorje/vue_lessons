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
    opacity 0
    transform translateY($translate)
  to
    opacity 1
    transform translateY(0)

@keyframes slide-out
  from
    opacity 1
    transform translateY(0)
  to
    opacity 0
    transform translateY($translate)
</style>


<script>
import appSidebar from './components/Sidebar/Sidebar';
import appToolbar from './components/Toolbar/Toolbar';
import appStocks from './components/Stocks/Stocks';
import appPortfolio from './components/Portfolio/Portfolio';
import { mapActions } from 'vuex';

export default {
  components: {
    appSidebar,
    appToolbar,
    appStocks,
    appPortfolio,
  },
  name: 'App',
  methods: {
    ...mapActions(['newDay', 'getUserData']),
  },
  created() {
    this.newDay();
    this.getUserData();
  },
};
</script>

<template>
    <transition-group
      name="slide"
      tag="div"
      class="layout row wrap"
      style="position: relative">
      <v-flex xs12 sm6
      v-for="(item, name) in stocksData"
      :key="name"
      v-if="userStocks[name]"
      class="card-column">
        <v-card class="trade-card">
          <v-toolbar class="sell-toolbar">
            <v-toolbar-title>{{ name }}</v-toolbar-title>
            <v-toolbar-title class="body-2">
              (Price: {{ item.sell }} | Quantity: {{ userStocks[name] || 0 }})
              </v-toolbar-title>
          </v-toolbar>
          <v-form ref="item.name" class="d-flex">
            <v-text-field
            :name="name"
            :id="name"
            v-model.number="amount[name]"
            clearable
            solo
            style="
              border-radius: 2px 0px 0px 2px;
            ">
            </v-text-field>
            <v-btn
              color="info"
              @click="sell(name)"
              style="
                margin: 0;
                height: 48px;
                border-radius: 0px 2px 2px 0;
              ">
              Sell
            </v-btn>
          </v-form>
        </v-card>
      </v-flex>
      <v-alert v-model="hasStocks" type="info" key="alert" style="position: static!important; width:auto!important">
        No stocks in portfolio.
        <router-link
          exact
          :to="{ name: 'stocks' }"
          style="color: #fff">
          Go and get some!
        </router-link>
      </v-alert>
    </transition-group>
</template>


<style lang="stylus" scoped>
.input-group__details
    min-height auto

.sell-toolbar
  background-color #a7d5f9!important
  border-color #a7d5f9!important

$translate = 20px
$duration = 0.2s

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
    position absolute
    &.card-column
      width 50%
  &-move
    transition transform 0.3s
    &.alert
      animation slide-in .3s ease forwards
</style>


<script>
// import { mapGetters } from 'vuex';
import trading from '../../mixins/trading';

export default {
  data() {
    return {
      // amount: {},
      hasStocks: Math.max(...Object.values(this.$store.state.userData.stocks)) < 1,
    };
  },
  computed: {
    // stocksData() {
    //   return this.$store.state.currentData.features;
    // },
    userStocks() {
      return this.$store.state.userData.stocks;
    },
    // ...mapGetters(['getNames']),
  },
  // watch: {
  //   getNames() {
  //     const amount = this.$store.getters.getNames.reduce((result, item) => {
  //       const immutable = { ...result };
  //       immutable[item] = null;
  //       return immutable;
  //     }, {});
  //     this.amount = amount;
  //   },
  // },
  methods: {
    sell(name) {
      this.$store.dispatch('trade', {
        type: 'sell',
        name,
        amount: this.amount[name],
      });
      this.amount[name] = null;
      this.test = true;
      this.hasStocks = Math.max(...Object.values(this.$store.state.userData.stocks)) < 1;
    },
  },
  mixins: [trading],
};
</script>

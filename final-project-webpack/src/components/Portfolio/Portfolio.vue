<template>
  <v-layout row wrap>
    <v-flex xs12 sm6
      v-for="(item, name) in stocksData"
      :key="name"
      v-if="userStocks[name]">
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
    <v-alert :value="Object.keys(userStocks).length < 1" type="info">
      No stocks in portfolio.
      <router-link
        exact
        :to="{ name: 'stocks' }"
        style="color: #fff">
        Go and get some!
      </router-link>
    </v-alert>
  </v-layout>
</template>

<style lang="stylus">
  .input-group__details
    min-height auto
</style>

<style lang="stylus">
  .sell-toolbar
    background-color #a7d5f9!important
    border-color #a7d5f9!important
</style>


<script>
export default {
  data() {
    const amount = this.$store.getters.getNames.reduce((result, item) => {
      result[item] = null;
      return result;
    }, {});
    return {
      amount,
    };
  },
  computed: {
    stocksData() {
      return this.$store.state.transformedData;
    },
    userStocks() {
      return this.$store.state.userData.stocks;
    },
  },
  methods: {
    sell(name) {
      this.$store.dispatch('trade', {
        type: 'sell',
        name,
        amount: this.amount[name],
      });
      this.amount[name] = null;
    },
  },
};
</script>

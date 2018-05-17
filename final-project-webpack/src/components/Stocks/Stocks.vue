<template>
  <v-layout row wrap>
    <v-flex
      xs12 sm6
      v-for="(item, name) in stocksData"
      :key="name">
      <v-card class="trade-card">
        <v-toolbar color="secondary">
          <v-toolbar-title>{{ name }}</v-toolbar-title>
          <v-toolbar-title class="body-2">(Price: {{ item.buy }})</v-toolbar-title>
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
            color="success"
            @click="buy(name)"
            style="
              margin: 0;
              height: 48px;
              border-radius: 0px 2px 2px 0;
            ">
            Buy
          </v-btn>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style lang="stylus">
  .input-group__details
    min-height auto
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
  },
  methods: {
    buy(name) {
      this.$store.dispatch('trade', {
        type: 'buy',
        name,
        amount: this.amount[name],
      });
      this.amount[name] = null;
    },
  },
};
</script>

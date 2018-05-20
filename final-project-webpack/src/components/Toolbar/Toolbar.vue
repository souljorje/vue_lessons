<template>
  <v-toolbar class="primary">
    <v-toolbar-side-icon @click="toggleSidebar()" class="hidden-sm-and-up">
    </v-toolbar-side-icon>
    <router-link
        to="/"
        tag="a"
        exact
        class="toolbar-link">
      <v-toolbar-title class="mr-3">
        Trade App
      </v-toolbar-title>
    </router-link>
    <v-toolbar-items
      class="hidden-xs-only">
      <v-btn
        flat
        exact
        :to="{ name: 'portfolio' }">
        <v-icon left>work_outline</v-icon>
        Portfolio
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items
      class="hidden-xs-only">
      <v-btn
        flat
        exact
        :to="{ name: 'stocks' }">
        <v-icon left>timeline</v-icon>
        Stocks
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items
      class="hidden-xs-only">
      <v-btn
        flat
        @click="endDay">
        <v-icon left>update</v-icon>
        End day
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items
      class="hidden-xs-only">
      <v-menu
        offset-y>
        <v-btn flat slot="activator">
          <v-icon left>backup</v-icon>
          Save & Load
          <v-icon>arrow_drop_down</v-icon>
        </v-btn>
        <v-list class="secondary">
          <v-list-tile @click="saveData">
            <v-icon left class="mr-3">save</v-icon>
            <v-list-tile-title>Save data</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="loadData">
            <v-icon left class="mr-3">restore</v-icon>
            <v-list-tile-title>Load data</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
    <v-toolbar-title class="body-2">
      Funds {{ funds }}$
    </v-toolbar-title>
  </v-toolbar>
</template>

<style lang="stylus">
.toolbar-link
  height 100%
  display flex
  align-items center
  color #000
  text-decoration none
</style>


<script>
import navigation from '../../mixins/navigation';

export default {
  computed: {
    funds() {
      return this.$store.state.userData.funds;
    },
  },
  methods: {
    toggleSidebar() {
      this.$store.commit('toggleSidebar');
    },
  },
  mixins: [navigation],
};
</script>

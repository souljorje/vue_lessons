<template>
  <v-navigation-drawer absolute class='primary hidden-sm-and-up' v-model="showSidebar">
    <v-list>
      <v-list-tile
        :to="{ name: 'portfolio' }">
        <v-list-tile-action>
          <v-icon>work_outline</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          Portfolio
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile
        :to="{ name: 'stocks' }">
        <v-list-tile-action>
          <v-icon>timeline</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          Stocks
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile
        @click="endDay">
        <v-list-tile-action>
          <v-icon>update</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          End day
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile
        @click="">
        <v-list-tile-action>
          <v-icon>save</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          Save data
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile
        @click="">
        <v-list-tile-action>
          <v-icon>restore</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          Load data
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  methods: {
    endDay() {
      this.$store.dispatch('newDay');
    }
  },
  computed: {
    showSidebar: {
      get() {
        return this.$store.state.header.showSidebar;
      },
      set(state) {
        if (state !== this.$store.state.header.showSidebar) {
          this.$store.commit('toggleSidebar');
        }
      },
    },
  },
};
</script>

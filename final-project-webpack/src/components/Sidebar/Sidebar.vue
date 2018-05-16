<template>
  <v-navigation-drawer absolute class='primary hidden-sm-and-up' v-model="showSidebar">
    <v-list>
      <template v-for="item in menuItems">
        <v-list-tile
        :key="item.title"
        v-if="item.link"
        :to="{ name: item.link }">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          {{ item.title }}
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile
        :key="item.title"
        v-else>
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          {{ item.title }}
        </v-list-tile-content>
      </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      menuItems: this.$store.state.header.menuItems,
    };
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

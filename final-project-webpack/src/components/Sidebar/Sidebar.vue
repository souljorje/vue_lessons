<template>
  <v-navigation-drawer class='primary hidden-sm-and-up' v-model="showSidebar">
    <v-list>
      <v-list-tile v-for="item in menuItems" :key="item.title" @click="">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          {{ item.title }}
        </v-list-tile-content>
      </v-list-tile>
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
          this.$store.state.header.showSidebar = !this.$store.state.header
            .showSidebar;
        }
      },
    },
  },
};
</script>

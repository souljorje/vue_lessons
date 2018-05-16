<template>
  <v-toolbar class="primary">
    <v-toolbar-side-icon @click="toggleSidebar()" class="hidden-sm-and-up">
    </v-toolbar-side-icon>
    <v-toolbar-title class="mr-3">
      <router-link
        to="/"
        tag="a"
        exact
        style="color: #000; text-decoration: none;">
        Trade App
      </router-link>
    </v-toolbar-title>
    <template v-for="(element, index) in menuItems">
      <v-toolbar-items
        class="hidden-xs-only"
        :key="element.title">
        <v-btn
          flat
          v-if="element.link"
          exact
          :to="{ name: element.link }">
          <v-icon left>{{ element.icon }}</v-icon>
          {{ element.title }}
        </v-btn>
        <v-btn
          flat
          v-if="element.action"
          @click="endDay">
          <v-icon left>{{ element.icon }}</v-icon>
          {{ element.title }}
        </v-btn>
        <v-menu
          offset-y
          v-else-if="element.items"
          :key="element.title">
          <v-btn flat slot="activator">
            <v-icon left>{{ element.icon }}</v-icon>
            {{ element.title }}
            <v-icon>arrow_drop_down</v-icon>
          </v-btn>
          <v-list class="secondary">
            <v-list-tile v-for="item in element.items" :key="item.title" @click="">
              <v-icon left class="mr-3">{{ item.icon }}</v-icon>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn
          flat
          v-else-if="!element.link && !element.items">
          <v-icon left>{{ element.icon }}</v-icon>
          {{ element.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer v-if="index === 1" :key="`spacer${index}`"></v-spacer>
    </template>
    <v-toolbar-title class="body-2">
      Funds {{ funds }}$
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      menuItems: this.$store.state.header.menuItems,
    };
  },
  computed: {
    funds() {
      return this.$store.state.userData.funds;
    },
  },
  methods: {
    toggleSidebar() {
      this.$store.commit('toggleSidebar');
    },
    endDay() {
      this.$store.dispatch('newDay');
    }
  },
};
</script>

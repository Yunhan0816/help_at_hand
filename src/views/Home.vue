<template>
  <v-app id="inspire">
    <v-app-bar app clipped>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Help At Hand</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn icon :to="{ path: 'doctor' }">
        <v-icon>mdi-doctor</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <h1>You Are Not Alone</h1>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; TechTogether 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },

  data: () => ({
    drawer: null
  }),

  components: {
    //
  }
};
</script>

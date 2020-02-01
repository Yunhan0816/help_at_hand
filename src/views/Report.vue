<template>
  <v-app id="inspire">
    <v-app-bar app clipped>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Help At Hand</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <Report />
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; TechTogether 2020</span>
    </v-footer>
  </v-app>
</template>
<script>
import Report from "../components/Report.vue";
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  components: {
    Report
  }
};
</script>

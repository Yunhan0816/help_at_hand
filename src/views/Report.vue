<template>
  <v-app class="inspire">
    <v-parallax dark src="@/assets/background.png" class="background" height="770">
      <v-row align="center" justify="center">
        <v-app-bar app clipped>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
          <v-toolbar-title>Help At Hand</v-toolbar-title>
          <v-spacer></v-spacer>
          <router-link :to="{ name: 'map' }">
            <v-layout align-center justify-center>
              <v-btn
                id="findhospital"
                rounded
                type="danger"
                align="center"
                @click="toggleLable"
                x-large="true"
              >
                <a id="buttontext">Show Me Local Hospitals</a>
              </v-btn>
            </v-layout>
          </router-link>
          <router-link :to="{ name: 'chat' }">
            <v-btn rounded type="danger" align="center" @click="toggleLable" x-large="true">
              <a id="buttontext">Go to Chat</a>
            </v-btn>
          </router-link>
        </v-app-bar>

        <v-content>
          <v-container class="fill-height" fluid>
            <Report />
          </v-container>
        </v-content>
        <v-footer app>
          <span>&copy; TechTogether 2020</span>
        </v-footer>
      </v-row>
    </v-parallax>
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
// testing
</script>
<style scoped>
#buttontext {
  color: teal;
}
#background {
  max-height: 100%;
}
.fill_height2 {
  color: teal;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

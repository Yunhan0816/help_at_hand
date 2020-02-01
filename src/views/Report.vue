<template>
  <v-app class="inspire">
  
    <v-parallax
    dark
    src="@/assets/background.png"
    class = "background"
    height = "770"
  >

  
  <v-row
      align="center"
      justify="center"
    >
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
#background {
  max-height: 100%

}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>


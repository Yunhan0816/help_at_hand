<template>
  <v-app id="inspire">
    <!-- <div id="app"> -->

    <v-parallax
      src="https://saludalmaximo.com/wp-content/uploads/2019/08/11263-Sexual_Assault_Resource_Page-1296x728-Header-1024x576.jpg"
      height="700"
    >
      <v-row align="center" justify="center">
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
            <v-layout align-center justify-center>
              <v-flex xs6>
                <div class="text-xs-center">
                  <router-link :to="{ name: 'report' }">
                    <v-btn
                      rounded
                      type="danger"
                      align="center"
                      @click="toggleLable"
                      x-large="true"
                      >Find Help</v-btn
                    >
                  </router-link>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-content>
        <!-- </div> -->

        <v-footer app>
          <span>&copy; TechTogether 2020</span>
        </v-footer>
      </v-row>
    </v-parallax>
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

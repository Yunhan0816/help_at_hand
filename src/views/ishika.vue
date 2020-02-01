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
    <div id="app">
      <v-content>
        <v-container fill-height>
          <v-layout align-center justify-center>
            <v-flex xs6>
              <div class="text-xs-center">
                <v-btn x-large rounded type="danger" @click="toggleLable">Find Help</v-btn>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </div>
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

<style scoped>
#v-content{
  background-image: url("https://saludalmaximo.com/wp-content/uploads/2019/08/11263-Sexual_Assault_Resource_Page-1296x728-Header-1024x576.jpg");
  background-size: cover;
  
}
</style>
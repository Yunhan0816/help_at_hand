<template>

  <v-app id="inspire">
   
    <!-- <div id="app"> -->
      
      <v-parallax src="https://saludalmaximo.com/wp-content/uploads/2019/08/11263-Sexual_Assault_Resource_Page-1296x728-Header-1024x576.jpg" height = "700">
        <v-row align="center" justify="center">
           <v-app-bar app clipped>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <H1><v-toolbar-title><span class="teal--text">Help@hand</span></v-toolbar-title></H1>
      <v-spacer></v-spacer>
      <span style="padding-right: 5px"><v-icon large color="teal darken-2">mdi-phone </v-icon></span>
      <H1><v-toolbar-title><span class="teal--text">National Sexual Assault Helpline: 1-800-656-4673</span></v-toolbar-title></H1>
      <!-- <v-btn icon :to="{ path: 'doctor' }">
        <v-icon>mdi-doctor</v-icon>
      </v-btn> -->
    </v-app-bar>
        <v-content>
          <v-container class ="fill-height" fluid>
            <v-layout align-center justify-center>
              <v-flex xs6>
                <div class="text-xs-center">
                  
                  <v-btn rounded type="danger" align="center" @click="toggleLable" x-large = true >Find Help</v-btn>
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


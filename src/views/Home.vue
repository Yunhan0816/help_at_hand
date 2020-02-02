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
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      color="purple lighten-2"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="purple lighten-2">
          <h2 class="display-1 white--text font-weight-light">"Free Yourself" - Iyania</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              "It's important that we share our experiences with other people. When you tell your story, you free yourself and give other people permission to acknowledge their own story."</v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="amber lighten-1"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="amber lighten-1 justify-end">
            <h2 class="display-1 white--text font-weight-light">"It Was Worth It" - Sandra</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              "I suffered from panic, flashbacks,and nightmares [when I first spoke publicly]. But was it worth it? Absolutely!"</v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="cyan lighten-1"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="cyan lighten-1">
          <h2 class="display-1 white--text font-weight-light">"Facilitated Healing" - Jody</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              "I think being open and honest and not being ashamed about what happened to me definitely facilitated my healing."</v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="red lighten-1"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="red lighten-1 justify-end">
          <h2 class="display-1 mr-4 white--text font-weight-light">"I Feel Empowered" - Mary</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              "I do feel different. I feel empowered. I feel like my wingspan grew three feet. I no longer feel like I have to carry the burden of my abusers’ secrets."</v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="green lighten-1"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="green lighten-1">
          <h2 class="display-1 white--text font-weight-light">"Brings Comfort To Me" - Maggie</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              "To see others speaking out about it, that brings more comfort to me than anything else in the world. Nothing will make it OK, but if others are rallying around it, I mean, thank you. Thank you very much."</v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>
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

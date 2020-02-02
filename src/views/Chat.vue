<!--
<template>
  <v-app class="inspire">
        <v-app-bar app clipped>
          <v-toolbar-title>Help At Hand</v-toolbar-title>
        </v-app-bar>
        
    <v-parallax dark src="@/assets/background.png" class="background" height="770">
              <h1>We are here to help, let us know about your worries</h1>
<ChatBox msg="Welcome to Your Vue.js App"/>
        
    </v-parallax>


        <v-footer app>
          <span>&copy; TechTogether 2020</span>
        </v-footer>

  </v-app>

</template>
-->
<template>
  <v-app class="inspire">
    <v-parallax dark src="@/assets/background.png" class="background" height="770">
      <v-row align="center" justify="center">
        <v-app-bar app clipped>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
          <v-toolbar-title>Help At Hand</v-toolbar-title>
          <router-link :to="{ name: 'report' }" id="goBack">
            <v-btn rounded type="danger" @click="toggleLable" x-large="true">
              <a id="buttontext">Go Back</a>
            </v-btn>
          </router-link>
        </v-app-bar>

        <v-content>
          <h2>We are here to help, let us know about your worries</h2>
          <ChatBox msg="Welcome to Your Vue.js App" />
        </v-content>
        <v-footer app>
          <span>&copy; TechTogether 2020</span>
        </v-footer>
      </v-row>
    </v-parallax>
  </v-app>
</template>

<script>
import ChatBox from "../components/ChatBox.vue";

export default {
  name: "app",
  components: {
    ChatBox
  }
};
</script>

<style>
#buttontext {
  color: teal;
}
#app {
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
}
#goBack {
  margin-left: 1000px;
}

/* .chatBox {
  background: white;
} */
</style>
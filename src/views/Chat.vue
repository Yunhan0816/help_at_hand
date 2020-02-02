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

<script>
import ChatBox from '../components/ChatBox.vue'

export default {
  name: 'app',
  components: {
    ChatBox
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

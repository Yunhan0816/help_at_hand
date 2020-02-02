<template>
  <v-container>
    <router-link :to="{ name: 'report' }">
      <v-layout align-center justify-center>
        <v-btn id="goback" rounded type="danger" align="center" @click="toggleLable" x-large="true">
          <a id="buttontext">Go Back To Case Report</a>
        </v-btn>
      </v-layout>
    </router-link>
    <h2>Map of Sexual Assault Cases Nearby</h2>
    <assaultMap />
  </v-container>
</template>

<script>
import assaultMap from "../components/assaultMap";
export default {
  name: "Assault",
  components: {
    assaultMap
  }
};
</script>
<style scoped>
#buttontext {
  color: teal;
}
</style>
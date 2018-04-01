<template>
  <div id="app">
    <!-- <v-toolbar>
      <v-toolbar-title>Promodoro</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="Timer" flat>Timer</v-btn>
        <v-btn to="History" flat>History</v-btn>
        <v-btn flat>Settings</v-btn>
      </v-toolbar-items>
    </v-toolbar> -->
    <router-view/>
    <v-card height="200px" flat>
    <v-bottom-nav fixed :value="true" :active.sync="e1" color="transparent">
      <v-btn flat color="teal" to="Timer">
        <span>Timer</span>
        <v-icon>timer</v-icon>
      </v-btn>
      <v-btn flat color="teal" to="History">
        <span>History</span>
        <v-icon>history</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="nearby">
        <span>Settings</span>
        <v-icon>settings</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
}
</style>

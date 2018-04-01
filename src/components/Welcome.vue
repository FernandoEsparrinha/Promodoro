<template>
  <div class="hello">
    
    <v-jumbotron :gradient="gradient" dark>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h1>{{ msg }}</h1>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Welcome to Promodoro',
      gradient: 'to top, #42b983, #1b4e37'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

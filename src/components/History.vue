<template>
  <div class="hello">
    <h1 class="display-2">{{title}}</h1>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'History',
  data () {
    return {
      title: 'Pomodoro History'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  margin-bottom: 15px;
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

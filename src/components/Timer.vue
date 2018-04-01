<template>
  <div class="timerFrame">
    <h1>{{msg}}</h1>

    <v-layout>
      <v-flex sm6>
            <v-list subheader>
            <v-subheader>To Do</v-subheader>
            <h1 v-if="tasks.length==0">Nothing to do </h1>
              <v-list-tile  v-for="(task, index) in tasks">
                <v-list-tile-action>
                  <v-checkbox v-model="task.complete"></v-checkbox>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ task.value }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-btn icon v-on:click.native="removeTask(index)">
                    <v-icon color="grey lighten-1">close</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          <v-form v-model="valid" @submit.prevent="addTask(taskName)" >
            <v-flex xs6 offset-xs3>
                <v-text-field
                id="taskNameInput"
                v-model="taskName"
                label='Insert new task name'
                single-line
                append-icon="add"
                ></v-text-field>
            </v-flex>
          </v-form>
      </v-flex>
      <v-flex sm6>
        
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  data () {
    return {
      msg: 'Setup your Pomodoro Timer',
      taskName: '',
      tasks: [
        
      ],
      rules: {
          required: (value) => !!value || 'Required.',
          email: (value) => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
      }
      }
    }
  },
  methods: {
    addTask (name) {
      var task = {
        value: name,
        complete: false
      }
      this.tasks.push(task)
      this.taskName = ''
    },
    removeTask (index) {
      this.tasks.splice(index, 1)
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

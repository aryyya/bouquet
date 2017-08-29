<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p style="font-weight: bold;">The server says: "{{ greeting }}"</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      greeting: ''
    }
  },
  created () {
    this.$http.post('greet-me', {
      name: 'Rocky'
    }).then(response => {
      this.greeting = response.body.greeting
    }, error => {
      console.log(error)
    })
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

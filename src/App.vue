<template>
  <div id="app">
    <UserProfile/>
  </div>
</template>

<script>

import UserProfile from "./components/UserProfile"

export default {
  name: 'App',
  components: { UserProfile}
}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

.title {
  font-family: 'Roboto', sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

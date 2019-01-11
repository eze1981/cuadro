<template>
  <div id="app">
    <h1>Hi!</h1>
    <PluginManager />
  </div>
</template>

<script>
import PluginManager from '@/components/PluginManager.vue'

export default {
  name: 'app',
  components: {
    PluginManager
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

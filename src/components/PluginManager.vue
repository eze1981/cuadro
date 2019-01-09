<template>
  <div>
    <h1>Installed Plugins</h1>
    <ul>
      <li v-for="item in plugins">
        Plugin: {{item}} 
        <el-button v-on:click="loadPlugin(item)">load</el-button>
      </li>
    </ul>

    <PluginHost :pluginName="currentPluginName"></PluginHost>
  </div>
</template>

<script>
import PluginHost from '@/components/PluginHost.vue'
// var moduleName = "cuadro-plugin-hello"
// import(/* webpackPrefetch: true */ `@/plugins/${moduleName}`)
//   .then(module => {
//     var hello = module.default
//     var eze = hello.getTemplate()
//     console.log(eze)
// })

export default {
  components: {
    PluginHost
  },
  computed: {
    currentPluginName() {
      return "cuadro-plugin-hello"
    },
    plugins() {
      return this.$store.getters.installedPlugins
    }
  },
  methods: {
    loadPlugin: function(plugin){
        
    }
  },
  mounted() {
    this.$store.dispatch('loadPlugins')
  }
}
</script>

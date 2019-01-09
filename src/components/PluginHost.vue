<template>
  <div>
    <component :is="componentTemplate"></component>
  </div>
</template>

<script>
export default {
  name: 'PluginHost',
  props: ['pluginName'],
  data: function() {
    return {
      module: null
    }
  },
  computed: {
    componentTemplate: function() {
      return async () => {
        // importing plugin's index.js and template
        this.module = await import(`@/plugins/${this.pluginName}`)
        var template = this.module.default.getTemplate()
        return await import(`@/plugins/${this.pluginName}/${template}`)
      }
    }
  }
}
</script>

export default {
  init: (api, options) => {

  },

  getTemplate: () => {
    return "Hello.vue"
  }
};

// module.exports = (api, opts) => {
  
//   // api.extendPackage({
//   //   dependencies: {
//   //     'element-ui': '^2.4.5'
//   //   }
//   // })

//   // api.injectImports(utils.getMain(), `import './plugins/element.js'`)

//   // api.render({
//   //   './src/plugins/element.js': './templates/src/plugins/element.js',
//   //   './src/App.vue': './templates/src/App.vue'
//   // })

//   api.onCreateComplete(() => {
//     console.log('plugin created!')
//   })
// };

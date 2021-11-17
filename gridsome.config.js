const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/_var.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Gridsome',
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },
  plugins: [
    {
      use: 'gridsome-plugin-pug',
      options: {
        pug: { /* Options for `pug-plain-loader` */ },
        pugLoader: { /* Options for `pug-loader` */ }
      }
    }
  ]
}

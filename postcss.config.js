module.exports = {
  plugins: [
    require('postcss-import')({
      path: ['src/theme']
    }),
    require("postcss-preset-env")({
      stage: 3,
      features: {
        "nesting-rules": true
      }
    }),
    require("postcss-mixins")({
      mixinsDir: './src/theme/mixins'
    }),
    require('postcss-inline-svg')({
      path: 'src/theme'
    }),
    require('postcss-svgo')()
  ]
};
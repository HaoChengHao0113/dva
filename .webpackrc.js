import path from 'path'
module.exports = {
 "extraBabelPlugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  ],
  "alias":{
    '@components':path.resolve(__dirname,'./src/components'),
    '@img':path.resolve(__dirname,'./src/img'),
    '@routes':path.resolve(__dirname,'./src/routes'),
    '@models':path.resolve(__dirname,'./src/models'),
  },
  disableCSSModules: true,
}

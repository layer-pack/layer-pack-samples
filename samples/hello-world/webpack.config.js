/**
 * @file Minimal webpack config with layer-pack.
 *
 * layer-pack handles module resolution — you just need to register the plugin
 * and point to your entry file via the App/ namespace.
 */
const lPack = require('layer-pack');

module.exports = [{
  entry: { app: 'App/index' },
  output: { path: __dirname + '/dist', filename: '[name].js' },
  plugins: [lPack.plugin()],
  resolve: { extensions: ['.js'] },
  target: 'node'
}];

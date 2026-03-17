/**
 * @file Minimal webpack config — inherits nothing, just uses layer-pack plugin.
 *
 * The $super resolution and layer inheritance are configured in .layers.json;
 * this config just wires up webpack with the layer-pack plugin.
 */
const lPack = require('layer-pack');

module.exports = [{
  entry: { app: 'App/index' },
  output: { path: __dirname + '/dist', filename: '[name].js' },
  plugins: [lPack.plugin()],
  resolve: { extensions: ['.js'] },
  target: 'node'
}];

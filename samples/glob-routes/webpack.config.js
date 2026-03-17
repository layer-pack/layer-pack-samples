/**
 * @file Minimal config — glob routing is handled by layer-pack's virtual module system.
 *
 * When webpack encounters an import like "App/pages/(*).js", layer-pack intercepts
 * the resolution, scans the filesystem for matching files, and generates a virtual
 * module that re-exports them as a keyed object.
 */
const lPack = require('layer-pack');

module.exports = [{
  entry: { app: 'App/index' },
  output: { path: __dirname + '/dist', filename: '[name].js' },
  plugins: [lPack.plugin()],
  resolve: { extensions: ['.js'] },
  target: 'node'
}];

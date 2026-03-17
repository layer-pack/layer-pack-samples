/**
 * @file Shared webpack config for both www and api profiles.
 *
 * layer-pack vars control the differences:
 *   - www: target "web", output to dist/www/
 *   - api: target "node", externals enabled, output to dist/api/
 *
 * The same config file handles both — vars.externals and vars.DefinePluginCfg
 * are set per-profile in .layers.json.
 */
const lPack    = require('layer-pack');
const lPackCfg = lPack.getConfig();
const path     = require('path');

const isServer = lPackCfg.vars.DefinePluginCfg?.__IS_SERVER__;

module.exports = [{
  mode: lPackCfg.vars.production ? 'production' : 'development',
  target: isServer ? 'node' : 'web',
  entry: {
    app: isServer ? 'App/server' : 'App/client'
  },
  output: {
    path: path.resolve(lPackCfg.vars.targetDir || 'dist'),
    filename: '[name].js',
    ...(isServer && { libraryTarget: 'commonjs2' })
  },
  plugins: [lPack.plugin()],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: lPack.isFileExcluded(),
      use: {
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env'] }
      }
    }]
  },
  resolve: { extensions: ['.js'] }
}];

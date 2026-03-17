/**
 * @file Isomorphic config — works in both browser and server builds.
 *
 * __IS_SERVER__ is a build-time constant injected by DefinePluginCfg.
 * Webpack's dead code elimination removes the unused branch.
 */
module.exports = {
  appName: "Multi-Profile Sample",
  isServer: typeof __IS_SERVER__ !== 'undefined' && __IS_SERVER__
};

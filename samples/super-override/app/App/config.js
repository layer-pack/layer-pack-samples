/**
 * @file Extends base config via $super.
 *
 * The parent's config provides defaults; we override what we need.
 */
const parent = require('$super');

module.exports = {
  ...parent,          // theme: "light", version: 1, debug: false
  theme: "dark",      // override theme
  appName: "My App"   // add new field
};

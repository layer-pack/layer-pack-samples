/**
 * @file Overrides base-ui's Button.
 *
 * $super resolves to layers/base-ui/App/components/Button.js
 * We inherit the parent's properties and add our own.
 */
const parent = require('$super');

module.exports = {
  ...parent,          // inherit base properties (color: "gray", rounded: false)
  label: "Custom Button",  // override the label
  icon: "arrow-right"      // add a new property
};

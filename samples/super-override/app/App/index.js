/**
 * @file Entry point — demonstrates override vs inheritance.
 *
 * - Button: OVERRIDDEN by this project (via $super)
 * - Card: INHERITED from base-ui (no override exists here)
 * - config: EXTENDED via $super (parent defaults + our overrides)
 */
const Button = require('App/components/Button');
const Card   = require('App/components/Card');
const config = require('App/config');

console.log('Button:', Button);
// → { label: "Custom Button", color: "gray", rounded: false, icon: "arrow-right" }

console.log('Card:', Card);
// → { shadow: true, padding: 16 }  (inherited as-is from base-ui)

console.log('Config:', config);
// → { theme: "dark", version: 1, debug: false, appName: "My App" }

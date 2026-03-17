/**
 * @file Browser entry point — built with `lpack :www`.
 *
 * This file is selected as the entry when __IS_SERVER__ is false.
 * The www profile in .layers.json sets target "web" and outputs to dist/www/.
 */
console.log('Running in browser');
document.body.innerHTML = '<h1>Multi-Profile Sample</h1><p>Built with lpack :www</p>';

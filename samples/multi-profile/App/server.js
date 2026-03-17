/**
 * @file Server entry point — built with `lpack :api`.
 *
 * Uses Express to serve a simple JSON API.
 * __IS_SERVER__ is true here (set by DefinePluginCfg in .layers.json).
 */
const express = require('express');
const config  = require('App/config');
const app     = express();

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', config });
});

app.listen(3000, () => console.log('API running on port 3000'));

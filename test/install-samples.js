#!/usr/bin/env node
/**
 * Pre-install dependencies for all testable samples.
 * Run this once before running the test suite.
 *
 * Usage: node test/install-samples.js
 */

const { execSync } = require('child_process');
const path = require('path');
const fs   = require('fs');

const samplesDir = path.join(__dirname, '..', 'samples');

const dirs = [
	'hello-world',
	'super-override/app',
	'glob-routes',
	'multi-profile',
	'minimal-app-with-glob-entry',
	'minimal-lib-with-glob-entry',
	'wp5-multiple-endpoints/layers/a-core',
	'wp5-multiple-endpoints/endPoints/api.project.com',
	'wp5-multiple-endpoints/endPoints/www.project.com'
];

for ( const rel of dirs ) {
	const dir = path.join(samplesDir, rel);
	if ( fs.existsSync(path.join(dir, 'node_modules')) ) {
		console.log(`  skip ${rel} (already installed)`);
		continue;
	}
	console.log(`  npm install ${rel}...`);
	try {
		execSync('npm install --no-audit --no-fund', { cwd: dir, timeout: 120000, stdio: 'inherit' });
	} catch ( e ) {
		console.error(`  FAILED: ${rel}`, e.message);
		process.exit(1);
	}
}
console.log('All samples installed.');

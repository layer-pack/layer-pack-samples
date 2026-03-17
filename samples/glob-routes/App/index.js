/**
 * @file File-system routing via glob imports.
 *
 * The glob pattern App/pages/(*).js auto-discovers all page files.
 * Parentheses capture the filename as the export key:
 *   App/pages/Home.js    → pages.Home
 *   App/pages/About.js   → pages.About
 *   App/pages/Contact.js → pages.Contact
 *
 * For React apps, add ?using=lazyReact to get automatic code splitting:
 *   import pages from "App/pages/(*).jsx?using=lazyReact";
 *   // Each page becomes a React.lazy() chunk
 */
const pages = require('App/pages/(*).js');

console.log('Discovered pages:');
Object.keys(pages).forEach(name => {
  const page = pages[name];
  console.log(`  /${name.toLowerCase()} → ${page.title}`);
});

// Simple router
function route(pathname) {
  const name = pathname.slice(1) || 'Home';
  const pageName = name.charAt(0).toUpperCase() + name.slice(1);
  const page = pages[pageName];
  if (!page) return { title: '404', content: 'Page not found' };
  return page;
}

console.log('\nRouting /about:', route('/about'));

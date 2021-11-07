# layer-pack-sample

Simple samples for [layer-pack](https://github.com/n8tz/layer-pack)


<a href="https://travis-ci.org/n8tz/layer-pack-samples">
<img src="https://travis-ci.org/n8tz/layer-pack-samples.svg?branch=master" alt="Build Status" /></a>


## Available :

### [wp5-multiple-endpoints](samples/wp5-multiple-endpoints)

A monorepo structure with

- 1 shared core package with webpack configs & React client / SSR bootstrap
- 1 package with some api service, inheriting the core
- 1 package with some www service, inheriting the core
- 1 package with some other www endpoint, inheriting the www & core layers


To test go in the [samples/wp5-multiple-endpoints](samples/wp5-multiple-endpoints) package and check the readme

### [minimal-app-with-glob-entry](samples/minimal-app-with-glob-entry)

A minimal app boilerplate without any inherited layers ( with namspacing + glob requires )

To test go in the [samples/minimal-app-with-glob-entry](samples/minimal-app-with-glob-entry) package and exec :

    npm i
    npm run build
    
### [minimal-lib-with-glob-entry](samples/minimal-lib-with-glob-entry)

A minimal lib config with common-js exports of multiple entry point via glob in the webpack entrypoint

To test go in the [samples/minimal-app-with-glob-entry](samples/minimal-lib-with-glob-entry) package and exec :

    npm i
    npm run build

<span class="badge-paypal"><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VWKR3TWQ2U2AC" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

[![*](https://www.google-analytics.com/collect?v=1&tid=UA-82058889-1&cid=555&t=event&ec=project&ea=view&dp=%2Fproject%2Flayer-pack-samples&dt=readme)](#)

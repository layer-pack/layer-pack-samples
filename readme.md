# layer-pack-sample

Simple samples for [layer-pack](https://github.com/n8tz/layer-pack)


<a href="https://travis-ci.org/n8tz/layer-pack-samples">
<img src="https://travis-ci.org/n8tz/layer-pack-samples.svg?branch=master" alt="Build Status" /></a>


## Available :

### [app-with-minimal-boilerplate](samples/app-with-minimal-boilerplate)

A mini app inheriting a simplified boilerplate with conf & react hmr

To test go in the [samples/minimal-app-with-glob-entry](samplesapp-with-minimal-boilerplate) package and exec :

    npm i
    npm run start-dev
    
### [minimal-app-with-glob-entry](samples/minimal-app-with-glob-entry)

A minimal lib config multiple entry point using WI pseudo-glob

To test go in the [samples/minimal-app-with-glob-entry](samples/minimal-app-with-glob-entry) package and exec :

    npm i
    npm run build
    
### [minimal-lib-with-glob-entry](samples/minimal-lib-with-glob-entry)

A minimal lib config with common-js exports of multiple entry point using WI pseudo-glob  

To test go in the [samples/minimal-app-with-glob-entry](samples/minimal-lib-with-glob-entry) package and exec :

    npm i
    npm run build

### [simple-redux-app](samples/simple-redux-app)

A simple redux app inheriting :
 - a widget management layer ( ./libs/widget-management ) 
 - a layer with Redux & redux thunk
 - a layer with React, SSR, sass, hot reload & the webpack configs

To test go in the [samples/simple-redux-app](samples/simple-redux-app) package and exec :

    npm i
    npm run start-dev

or

    docker-compose up

then open http://localhost:8080 or use 'npm run runBrowser'

Check the build stats [here](http://htmlpreview.github.io/?https://github.com/n8tz/layer-pack-samples/blob/master/samples/simple-redux-app/dist/www/App.stats.html)

### [simple-redux-app-no-inherit](samples/simple-redux-app-no-inherit)

The same App without inheriting 

To test go in the [samples/simple-redux-app](samples/simple-redux-app-no-inherit) package and exec :

    npm i
    npm run start-dev

or

    docker-compose up

then open http://localhost:8080 or use 'npm run runBrowser'

Check the build stats [here](http://htmlpreview.github.io/?https://github.com/n8tz/layer-pack-samples/blob/master/samples/simple-redux-app-no-inherit/dist/App.stats.html)


<span class="badge-paypal"><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VWKR3TWQ2U2AC" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

[![*](https://www.google-analytics.com/collect?v=1&tid=UA-82058889-1&cid=555&t=event&ec=project&ea=view&dp=%2Fproject%2Flayer-pack-samples&dt=readme)](#)
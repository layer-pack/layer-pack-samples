# webpack-inherit-sample

Simple samples for [webpack-inherit](https://github.com/n8tz/webpack-inherit)

## Available :

### [minimal-glob-entry](samples/minimal-glob-entry)

A minimal webpack-inherit config with glob support

To test go in the [samples/minimal-glob-entry](samples/minimal-glob-entry) package and exec :

    npm i
    npm run build

### [simple-redux-app](samples/simple-redux-app)

A simple redux app inheriting :
 - a widget management layer ( ./libs/widget-management ) 
 - npm boilerplate with React, Redux, SSR, sass & hot reload (package "wpi-react-redux-sass-ssr")

To test go in the [samples/simple-redux-app](samples/simple-redux-app) package and exec :

    npm i
    npm run start-dev

or

    docker-compose up

then open http://localhost:8080 or use 'npm run runBrowser'

Check the build stats [here](http://htmlpreview.github.io/?https://github.com/n8tz/webpack-inherit-samples/blob/master/samples/simple-redux-app/dist/App.stats.html)

### [simple-redux-app-no-inherit](samples/simple-redux-app-no-inherit)

The same App without inheriting 

To test go in the [samples/simple-redux-app](samples/simple-redux-app-no-inherit) package and exec :

    npm i
    npm run start-dev

or

    docker-compose up

then open http://localhost:8080 or use 'npm run runBrowser'

Check the build stats [here](http://htmlpreview.github.io/?https://github.com/n8tz/webpack-inherit-samples/blob/master/samples/simple-redux-app-no-inherit/dist/App.stats.html)


<span class="badge-paypal"><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VWKR3TWQ2U2AC" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>


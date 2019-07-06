# webpack-inherit-sample

Simple samples for [webpack-inherit](https://github.com/n8tz/webpack-inherit)

## Available :

-  [simple-redux-app](simple-redux-app)

A simple redux app inheriting a npm boilerplate with React, Redux, SSR, sass & hot reload

To test go in the [simple-redux-app](simple-redux-app) package and exec :

    npm i
    npm run start-dev

or

    docker-compose up

then open http://localhost:8080 or use 'npm run runBrowser'

Check the build stats [here](http://htmlpreview.github.io/?https://github.com/n8tz/webpack-inherit-samples/blob/master/simple-redux-app/dist/App.stats.html)


-  [simple-redux-inherit](simple-redux-inherit) ( React Redux with SSR, sass, hot reload & inheriting )

    Contain 3 packages :

    - wp4-react-redux-sass-hmr : A draft boilerplate with webpack4, react, redux, sass, hmr
    - parentProject : The example parent project
    - childProject : The example child project with some tiny overrides

To test go in the [childProject](simple-redux-inherit/childProject) package and exec :

    npm i
    npm run start-dev

then open http://localhost:8080 or use 'npm run runBrowser'

Check the build stats [here](http://htmlpreview.github.io/?https://github.com/n8tz/webpack-inherit-samples/blob/master/simple-redux-inherit/childProject/dist/App.stats.html)


<span class="badge-paypal"><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VWKR3TWQ2U2AC" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>


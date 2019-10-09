# wi-layer-react-express

A inheritable boilerplate with webpack4, react, sass, hmr, express & SSR support

## How to use ?

Create a project with https://github.com/n8tz/webpack-inherit,<br/>
Then add build profiles basing this package available profiles :

- www    : A generic profile to make browser side builds
- api    : A generic profile to make backend/cli builds 
- lib    : A generic profile to build stand alone es6/react libs & component
- static : A generic profile to build stand alone app with html

<h2>Included ( among others ) : </h2>
<ul>
    <li>react ^16.8.6</li>
    <li>express with minimal SSR</li>
    <li>sass</li>
    <li>es6 + decorators</li>
    <li>hot reload with dev server, SSR & api proxying</li>
    <li>react-helmet ( html header manager )</li>
</ul>

## Example :

```
{

  "www": {
    "basedOn": "defaultBrowser",
    "rootFolder": "App",
    "vars": {
      "targetDir": "dist/www",
      "extractCss": true,
      "production": true,
      "DefinePluginCfg": {
        "__IS_DEV__": false,
        "__IS_SERVER__": false
      },
      "webpackPatch": {
        "mode": "production"
      }
    },
    "extend": [
        "wi-layer-react-express"
    ]
  },
  "api": {
    "basedOn": "defaultServer",
    "rootFolder": "App",
    "vars": {
      "targetDir": "dist/api",
      "DefinePluginCfg": {
        "__IS_DEV__": false,
        "__IS_SERVER__": true
      }
    },
    "extend": [
        "wi-layer-react-express"
    ]
  },
  
  "dev": {
    "rootFolder": "App",
    // this boilerplate include a minimal tasks manager for running server easily (not well tested)
    // see this package .wi.json for more infos
    // here the task run by the default start command : wi-run :dev start
    "commands": {
      "server": {
      
        // the command
        "run": "node --inspect=[::]:9229 ./dist/api/App.server.js -p 9701",
        
        // watch & restart if updated
        "watch": "dist/api/App.server.js",
        
        // restart if it fail
        "forever": true
      },
      "api": {
        // rm -rf before running cmd
        "clearBefore": "dist/api",        
        
        "run": "wpi :api -w",
        
        // optionnal var overrides ( so for the api profile ) 
        "vars": {
          "DefinePluginCfg": {
            "__IS_DEV__": true
          }
        }
      },
      "www": {
        // can wait another task 
        // "wait": "api",
        "clearBefore": "dist/www",
        "run": "wpi-dev-server :www --hot --host 0.0.0.0",
        "vars": {
          "DefinePluginCfg": {
            "__IS_DEV__": true
          }
        }
      }
    }
  }
}
```


## Init projects :

```
npm i -g webpack-inherit
wi-init myProject.com wi-layer-react-express:SSRApp
wi-init myProject.com wi-layer-react-express:StaticApp
wi-init myProject.com wi-layer-react-express:RSApp
```

## Available config options :

- targetDir {String}            : relative target build directory
- production {bool}             : build using production mode
- extractCss {bool}             : do extract css
- babelInclude {regexp string}  : optional regexp to force parsing external scripts
- babelPreset {object}          : optional options for the babelPreset loader
- TerserJSPlugin {object}       : optional options for the TerserJSPlugin
- HtmlWebpackPlugin {object}    : optional options for HtmlWebpackPlugin



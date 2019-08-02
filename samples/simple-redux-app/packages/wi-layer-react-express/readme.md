# wi-layer-react-express

A inheritable boilerplate with webpack4, react, sass, hmr, express & SSR support

## How to use ?

Create a project with https://github.com/n8tz/webpack-inherit,<br/>
Then add build profiles basing this package available profiles :

- defaultBrowser   : A generic profile to make browser side builds
- defaultServer    : A generic profile to make backend/cli builds 
- defaultComponent : A generic profile to build stand alone react component

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
  "dev_www": {
    "basedOn": "defaultBrowser",
    "rootFolder": "App",
    
    "vars": {
      "DefinePluginCfg": {
        "__IS_DEV__": true,
        "__IS_SERVER__": false
      },
      "webpackPatch": {
        "devServer": {
          "public": "myApp.localhost",
          "compress": true,
          "disableHostCheck": true
        }
      }
    },
    "extend": [
        "wi-layer-react-express"
    ]
  },
  "dev_api": {
    "basedOn": "defaultServer",
    "rootFolder": "App",
    
    "vars": {
      "targetDir": "dist/api",
      "DefinePluginCfg": {
        "__IS_DEV__": true,
        "__IS_SERVER__": true
      },      
      "externals": true,
    },
    "extend": [
        "wi-layer-react-express"
    ]
  }
}
```


## Available config options :

- targetDir {String}            : relative target build directory
- production {bool}             : build using production mode
- extractCss {bool}             : do extract css
- babelInclude {regexp string}  : optional regexp to force parsing external scripts
- babelPreset {object}          : option for the babelPreset loader
- TerserJSPlugin {object}       : option for the TerserJSPlugin



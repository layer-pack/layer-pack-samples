# wp5-multiple-endpoints

A monorepo structure with

- 1 shared core package with webpack configs & React client / SSR bootstrap
- 1 package with some api service, inheriting the core
- 1 package with some www service, inheriting the core
- 1 package with some www service, inheriting the www & core layers

* Npm may fail if installing leafs layers first, npm i the core first don't fail

# Run in dev mode

```bash
# auto rebuild on change api
lpack :api -w & 
# auto reload api on rebuild
nodemon dist/api/App.server.js --exec "node ./dist/api/App.server.js -p 9001"&
# start dev-server with cfg 
WWW_API_PORT=9001 lpack-dev-server :www
```

# Build & run in prod

```bash
lpack :wwwProd
lpack :apiProd
node ./dist/api/App.server.js -p 8080
```

 
# setup ( from endpoints )

```bash
npm i
lpack-setup # or lpack-setup ci ( using package-lock )
```

 
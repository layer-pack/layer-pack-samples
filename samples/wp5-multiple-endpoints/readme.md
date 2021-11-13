# wp5-multiple-endpoints

A monorepo structure with

- 1 shared core package with webpack configs & React client / SSR bootstrap
- 1 package with some api service, inheriting the core
- 1 package with some www service, inheriting the core
- 1 package with some www service, inheriting the www & core layers

* copy/add/delete js & scss files will automatically trigger watch & updates glob includes
* 
# Run in dev mode

```bash
# auto rebuild on change api
lpack :api -w & 
# auto reload api on rebuild
nodemon dist/api/App.server.js --exec "node ./dist/api/App.server.js -p 9001"&
# start dev-server with cfg 
WWW_API_PORT=9001 lpack-dev-server :www
```
Browser can then open http://127.0.0.1:8080/

# Build & run in prod

```bash
lpack :wwwProd
lpack :apiProd
node ./dist/api/App.server.js -p 8080
```

Browser can then open http://127.0.0.1:8080/
 
# setup 
As NPM will not install "devDependencies" from dependencies layers; 2 methods :

- From endpoints layers ( not the core )
```bash
npm i
## setup all layers for the default profile
lpack-setup # or lpack-setup ci ( using package-lock )
```

- From the top layers
```bash
## from a-core
npm i
cd ../www.project.com
npm i
cd ../www2.project.com
npm i
cd ../api.project.com
npm i
```
 
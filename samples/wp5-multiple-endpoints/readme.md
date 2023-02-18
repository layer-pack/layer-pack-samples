# wp5-multiple-endpoints

A monorepo structure with :

- 1 shared core package with webpack configs & React client / SSR bootstrap
- 1 package with some api service, inheriting the core
- 1 package with some www service, inheriting the core

# setup

_NPM will call lpack-setup at postinstall which will install core layer_

- From endpoints layers ( not the core )

```bash
npm i
```

# Run in dev mode

_copy/add/delete js & scss files will automatically trigger watch & updates glob includes_

From the endpoints directories :

```bash
npm run dev
```

Browser can then open http://127.0.0.1:8080/

# Run in prod mode

```bash
npm run run
```

# Build & run in prod

```bash
npm run build
npm run run
```

Browser can then open http://127.0.0.1:8080/
 


# layer-pack-samples

Sample projects for [layer-pack](https://github.com/layer-pack/layer-pack) — a Webpack 5 plugin for inheritable code layers, glob imports, and shared build configs.

## Samples

### Getting started

| Sample | What it demonstrates |
|--------|---------------------|
| [hello-world](samples/hello-world) | Simplest possible layer-pack project — one file, one config, zero inheritance |
| [super-override](samples/super-override) | Two layers: parent provides defaults, child overrides specific files via `$super` |
| [glob-routes](samples/glob-routes) | File-system routing — glob pattern auto-discovers page files |

### Build patterns

| Sample | What it demonstrates |
|--------|---------------------|
| [multi-profile](samples/multi-profile) | Single project with `www` + `api` profiles sharing one webpack config |
| [minimal-app-with-glob-entry](samples/minimal-app-with-glob-entry) | Multiple entry points discovered via glob pattern (no `.layers.json`) |
| [minimal-lib-with-glob-entry](samples/minimal-lib-with-glob-entry) | Library bundle with all source files discovered via recursive glob |

### Real-world architecture

| Sample | What it demonstrates |
|--------|---------------------|
| [wp5-multiple-endpoints](samples/wp5-multiple-endpoints) | Monorepo: shared core layer + separate API and WWW endpoints with SSR |
| [TinderLike](samples/TinderLike) | React animation app inheriting React/Webpack/SSR from lpack-react |

## Quick start

```bash
cd samples/<sample-name>
npm install
npm run build    # or: npm run dev
```

For multi-endpoint samples, check the sample's own readme for setup instructions.

## Requirements

- Node.js >= 14
- npm (not Yarn PnP)
- layer-pack ^3.0.9

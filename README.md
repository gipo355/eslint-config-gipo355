# Setting up `tsconfig`

**Eslint: formatter + linter**

Use eslint for everything. Ready to go with prettier.

Super strict, it's got everything. You won't be able to push due to the quantity of errors reported.

Only suited for projects that start from 0.

Good for: `ts, js, jsx, tsx, .astro, .json`.

--- 

install:

### For pnpm only:

create root level `.npmrc`

add line `auto-install-peers=true`

install:

`pnpm add -D eslint-config-gipo355`

### for npm:

`npm install -D eslint-config-gipo355`

---

create root level `.eslintrc.js` 
```js 
// .eslintrc.js
module.exports = {
    extends: [
        "gipo355", // standard config
        // "gipo355/node", // additional config for node only projects
    ]
}
```

## use prettier

create root level `.prettierrc.js`
```js
// .prettierrc.js
module.exports = {
require('eslint-config-gipo355/.prettierrc.js')
}
```

## to utilize the built-in tsconfig:

make a root level `tsconfig.eslint.json` 
```json
{
    "extends": "./tsconfig.json"
}
```

make a root level `tsconfig.json`
```json
{
    "extends": "eslint-config-gipo355/tsconfig.json"
}
```

You may need to add `includes:[]` and `excludes:[]` to tsconfigs as the typescript parser requires the files to be included

Note:
for frontend, tsconfig is not used to build. webpack uses babel.

for backend, if webpack is used ususally esbuild or swc don't use tsconfig.

if using tsx or ts-node, tsconfig won't build.

a modification of the tsconfig is needed if TSC is used to build ( usually for backend and packages to generate types )

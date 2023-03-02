# Setting up `tsconfig`

Super strict eslint config, it's got everything. You won't be able to push due to the quantity of errors reported.

Only suited for projects that start from 0.

Good for: `ts, js, jsx, tsx, .astro, .json`.

install the package:

`pnpm add -D eslint-config-gipo355`

`npm install -D eslint-config-gipo355`

create `.eslintrc.js` 
```js 
// .eslintrc.js
module.exports = {
    extends: [
        "gipo355", // standard config
        "gipo355", // additional config for node only projects
    ]
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

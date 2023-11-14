module.exports = {
  // ! fixing eslint errors on unresolved modules for tsconfig paths

  root: true,

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [
        '.ts',
        '.tsx',
        '.js',
        '.jsx',
        '.cjs',
        '.mjs',
        '.mts',
        '.cts',
      ],
    },
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.cjs',
          '.mjs',
          '.ts',
          '.tsx',
          '.mts',
          '.cts',
        ],
        // moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: {
        alwaysTryTypes: true,
        // project: './tsconfig.json',
        project: './tsconfig.eslint.json',
        // project: [
        //     './tsconfig.json',
        //     './tsconfig.eslint.json',
        // ],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // ecmaVersion: 2021,
    ecmaVersion: 'latest',
    tsconfigRootDir: __dirname, // new addition
    // tsconfigRootDir: '.', // new addition
    sourceType: 'module',
    // project: ['./tsconfig.eslint.json'],
    project: [
      // './tsconfig.json',
      './tsconfig.eslint.json',
    ],
    // project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
    // extraFileExtensions: ['.svelte', '.html'],
    extraFileExtensions: [
      '.svelte',
      '.astro',
      '.vue',
      // '.json',
      // '.jsonc',
      // '.json5',
      '.html',
    ],
  },

  // set environment global variables like document window etc
  env: {
    browser: true,
    node: true,
    es2022: true,
    jest: true,
  },
  ignorePatterns: ['node_modules', 'build', 'dist', 'public', '*cache'],
  plugins: [
    'tailwindcss',
    // 'jest',
    '@typescript-eslint',
    'import',
    'simple-import-sort',
    // 'eslint-plugin-tsdoc',
    // 'spellcheck',
    'html',
    '@html-eslint',
  ],
  extends: [
    'plugin:tailwindcss/recommended',
    'eslint:recommended', //! maybe not needed
    'airbnb',
    'plugin:import/recommended',
    'plugin:security/recommended',
    'plugin:unicorn/recommended',
    'plugin:lit/recommended',
    // "plugin:node/recommended",

    // SIDE EFFECTS AND MUTATIONS

    // 'plugin:astro/recommended',
    // 'plugin:jsonc/recommended-with-jsonc',
    // 'plugin:prettier/recommended', // activates plugin prettier and extends prettier as last with rule prettier/prettier error
    // 'prettier', // eslint-config-prettier, turns off styling rules, use last

    // post typescript override deletion
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    // 'plugin:deprecation/recommended',
    'airbnb-typescript', // throws problems

    'plugin:svelte/recommended',
    'plugin:svelte/prettier',
    // 'plugin:prettier/recommended', // activates plugin prettier and extends prettier as last with rule prettier/prettier error
    'prettier',
  ],
  // globals: {
  //     BigInt: true,
  //     console: true,
  //     WebAssembly: true,
  // },

  overrides: [
    {
      // extends: [
      //     'plugin:svelte/recommended',
      //     'plugin:svelte/prettier',
      // ],
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        // extraFileExtensions: ['.svelte'],
        parser: '@typescript-eslint/parser',
        // ecmaVersion: 'latest',
        // tsconfigRootDir: __dirname, // new addition
        // sourceType: 'module',
        // project: ['./tsconfig.eslint.json'],
      },
    },
    {
      // files: ['__tests__/*.ts', '*.test.*', '*.spec.*'],
      files: ['*.test.*', '*.spec.*'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: { 'jest/prefer-expect-assertions': 'off' },
    },
    // {
    //     files: ['.json', '.jsonc'],
    //     extends: [
    //         'plugin:json/recommended',
    //         'plugin:jsonc/recommended-with-jsonc',
    //     ],
    //     // rules: { 'jest/prefer-expect-assertions': 'off' },
    // },
    {
      // here or it conflicts with json plugin
      files: ['*.tsx', '*.jsx'],
      plugins: ['react', 'react-hooks'],
      extends: ['airbnb/hooks', 'plugin:react/recommended'],
    },
    // {
    //     // here or it conflicts with json plugin
    //     files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
    //     extends: [
    //         'plugin:@typescript-eslint/recommended',
    //         'plugin:@typescript-eslint/eslint-recommended',
    //         'plugin:import/typescript',
    //         'plugin:@typescript-eslint/recommended-requiring-type-checking',
    //         'plugin:@typescript-eslint/strict',
    //         // 'plugin:deprecation/recommended',
    //         'airbnb-typescript', // throws problems

    //         // 'plugin:prettier/recommended', // activates plugin prettier and extends prettier as last with rule prettier/prettier error
    //         'prettier',
    //     ],
    //     rules: {
    //         // typescript specific
    //         '@typescript-eslint/require-await': 'warn', // fastify uses async functions for plugins which may not have await

    //         '@typescript-eslint/await-thenable': 'warn', // This rule disallows awaiting a function or value that is not a Promise. ON OVERRIDES
    //         // Warn if using a Promise without await/then/catch. Good to avoid running stuff in background non intentionally.
    //         // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
    //         '@typescript-eslint/no-floating-promises': 'warn', // This rule enforces Promises to have an error handler attached.
    //         // wasn't allowing eg setTimeout(async () =>...). Any good reason to keep it on? https://stackoverflow.com/a/63488201/10247962
    //         // this was off for possible conflicts
    //         '@typescript-eslint/no-misused-promises': 'warn', // This rule disallows passing a Promise to places that aren't designed to handle them, such as if-conditionals.
    //         '@typescript-eslint/promise-function-async': 'warn', // This rule enforces Promise-returning functions to be async.

    //         '@typescript-eslint/strict-boolean-expressions': [
    //             'error',
    //             {
    //                 allowString: true,
    //                 allowNumber: false,
    //                 allowNullableObject: true, // empty object and array is true.
    //                 allowNullableBoolean: true,
    //                 allowNullableString: true, // allow treating empty string as nullish
    //                 allowNullableNumber: false, // don't allow treating 0 or nan as nullish
    //                 allowNullableEnum: false,
    //                 allowAny: false,
    //                 allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
    //             },
    //         ],

    //         // activated those rules too late in the project. would be a massive work to fix for a course project
    //         '@typescript-eslint/no-unsafe-assignment': 'warn',
    //         '@typescript-eslint/no-unsafe-member-access': 'warn',
    //         '@typescript-eslint/no-unsafe-call': 'warn',
    //         '@typescript-eslint/no-unsafe-argument': 'warn',
    //         '@typescript-eslint/no-var-requires': 'warn',
    //         '@typescript-eslint/restrict-template-expressions': 'warn',
    //         '@typescript-eslint/no-unsafe-return': 'warn',
    //         // Wasn't simply allowing `const a = x.y.functionA`.
    //         '@typescript-eslint/unbound-method': 'warn',
    //     },
    //     parserOptions: {
    //         // ecmaVersion: 2021,
    //         ecmaVersion: 'latest',
    //         tsconfigRootDir: __dirname, // new addition
    //         // tsconfigRootDir: '.', // new addition
    //         sourceType: 'module',
    //         project: ['./tsconfig.eslint.json'],
    //         ecmaFeatures: {
    //             jsx: true,
    //         },
    //         // extraFileExtensions: ['.json', '.jsonc', '.json5'],
    //     },
    // },
    {
      files: ['*.html'],
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended'],
      rules: {
        '@html-eslint/indent': 'off',
        '@html-eslint/require-closing-tags': [
          'error',
          { selfClosing: 'always' },
        ],
        '@html-eslint/no-extra-spacing-attrs': [
          'error',
          { enforceBeforeSelfClose: true },
        ],
      },
    },
    // {
    //     files: ['*.json', '*.json5', '*.jsonc'],
    //     extends: ['plugin:jsonc/recommended-with-jsonc'],
    //     parser: 'jsonc-eslint-parser',
    //     parserOptions: {
    //         //     extraFileExtensions: ['.json', '.jsonc', '.json5'],
    //         parser: 'jsonc-eslint-parser',
    //         project: ['./tsconfig.eslint.json'],
    //     },
    //     // extraFileExtensions: ['.json', '.jsonc', '.json5'],
    // },
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],

      extends: [
        // ...
        'plugin:astro/recommended',
      ],
      // // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        // extraFileExtensions: ['.astro'],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
        'react/jsx-filename-extension': [
          1,
          { extensions: ['.js', '.jsx', '.tsx', '.astro'] },
        ],
      },
    },
  ],

  rules: {
    // 'tsdoc/syntax': 'warn',
    'spaced-comment': 'warn',
    'class-methods-use-this': 'warn',
    // place to specify ESLint rules - can be used to overwrite rules specified from the extended configs
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
    // 'for-direction': 'error',

    // ! rules that fuck up studying
    // 'no-unused-vars': 'warn', //! default on turned off at the end for typescript
    // 'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn', //! default on

    // '@typescript-eslint/no-unused-vars': 'off', //! default on
    // '@typescript-eslint/no-unused-vars': 'off', //! default on
    // '@typescript-eslint/no-unused-vars':
    //     process.env.NODE_ENV === 'production' ? 'error' : 'warn', //! default on
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: 'req|res|next|val|err',
      },
    ],

    // '@typescript-eslint/no-var-requires': 'off', // ! fixes import problems when using require

    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',

    // 'prefer-const': 'off', //! default on, useful at buildtime
    'prefer-const': process.env.NODE_ENV === 'production' ? 'error' : 'warn', //! default on, useful at buildtime

    // 'no-empty': 'off',
    'no-empty': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    // '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-function':
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: true },
    ],

    // Allows explicitating implicit types, like `const a: number = 10`
    '@typescript-eslint/no-inferrable-types': 'warn',

    // Else would complain about // @ts-ignore in .js files. If I didn't need this ts-comment, this could be removed
    '@typescript-eslint/ban-ts-comment': 'warn',

    // This wasn't allowing different data types in `templates string`. Why the fuck not?
    // '@typescript-eslint/restrict-template-expressions': 'off',

    // imports ( simple import and eslint plugin import )
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',

    'import/export': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    // ts
    eqeqeq: 'error',
    'no-console': 'warn',
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-undef': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',

    'react/display-name': 'off',
    'react/no-children-prop': 'off',
    // if you use React 17+; otherwise, turn this on
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    strict: 'error',
    // "global-strict": "error",
    // "no-extra-strict": "error",

    // ! node
    // "node/no-unsupported-features/es-syntax": "off"

    // ! unicorn
    'unicorn/filename-case': [
      'warn',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
          // "kebabCase": true
        },
      },
    ],
    'unicorn/no-null': 'off',
    'unicorn/no-array-for-each': 'warn',
    'unicorn/consistent-function-scoping': 'warn',
    'unicorn/prefer-module': 'warn',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          // e: {
          //     event: false,
          // },
          dev: false,
          prod: false,
          res: false,
          req: false,
          err: false,
          val: false,
          arr: false,
          // cmd: {
          //     command: true,
          // },
          // errCb: {
          //     handleError: true,
          // },
        },
      },
    ],

    // fixing airbnb rules i don't like
    'no-underscore-dangle': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'warn',
    'import/no-extraneous-dependencies':
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    // force max ciclomatic complexity
    complexity: ['error', 20],

    'consistent-return': 'warn',
    'no-useless-return': 'warn',

    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    // ! ASYNCH RULES, FROM https://maximorlov.com/linting-rules-for-asynchronous-code-in-javascript/
    // check also parallelism in loops at https://maximorlov.com/parallel-tasks-with-pure-javascript/
    'no-async-promise-executor': 'warn', // This rule disallows passing an async function to the new Promise constructor.
    'no-await-in-loop': 'warn', // This rule disallows using await inside loops.
    'no-promise-executor-return': 'warn', // This rule disallows returning a value inside a Promise constructor.
    'require-atomic-updates': 'warn', // This rule disallows assignments in combination with await, which can lead to race conditions.
    'max-nested-callbacks': ['warn', 3], // This rule enforces a maximum nesting depth for callbacks. In other words, this rule prevents callback hell
    'no-return-await': 'warn', // This rule disallows unnecessary return await.
    'prefer-promise-reject-errors': 'warn', // This rule enforces using an Error object when rejecting a Promise.

    'no-implicit-coercion': 'warn', // This rule disallows shorthand type conversions for boolean, numbers and strings.

    // side effects and mutations (immutable and pure plugins)
    'no-var': 2,
    'no-void': [1, { allowAsStatement: true }],

    // 'spellcheck/spell-checker': [
    //     1,
    //     {
    //         comments: true,
    //         strings: true,
    //         identifiers: true,
    //         templates: true,
    //         lang: 'en_US',
    //         skipWords: [
    //             'dict',
    //             'aff',
    //             'hunspellchecker',
    //             'hunspell',
    //             'utils',
    //             'md',
    //             'sha',
    //             'tsconfig',
    //             'schemas',
    //         ],
    //         skipIfMatch: ['http://[^s]*', '^[-\\w]+/[-\\w\\.]+$'],
    //         skipWordIfMatch: ['^foobar.*$'],
    //         minLength: 5,
    //     },
    // ],
    // "prettier/prettier": "error",

    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        cjs: 'never',
        mjs: 'never',
        ts: 'never',
        tsx: 'never',
        cts: 'never',
        mts: 'never',
        '': 'never',
      },
    ],

    //         // typescript specific
    '@typescript-eslint/require-await': 'warn', // fastify uses async functions for plugins which may not have await

    '@typescript-eslint/await-thenable': 'warn', // This rule disallows awaiting a function or value that is not a Promise. ON OVERRIDES
    // Warn if using a Promise without await/then/catch. Good to avoid running stuff in background non intentionally.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
    '@typescript-eslint/no-floating-promises': 'warn', // This rule enforces Promises to have an error handler attached.
    // wasn't allowing eg setTimeout(async () =>...). Any good reason to keep it on? https://stackoverflow.com/a/63488201/10247962
    // this was off for possible conflicts
    '@typescript-eslint/no-misused-promises': 'warn', // This rule disallows passing a Promise to places that aren't designed to handle them, such as if-conditionals.
    '@typescript-eslint/promise-function-async': 'warn', // This rule enforces Promise-returning functions to be async.

    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowString: true,
        allowNumber: false,
        allowNullableObject: true, // empty object and array is true.
        allowNullableBoolean: true,
        allowNullableString: true, // allow treating empty string as nullish
        allowNullableNumber: false, // don't allow treating 0 or nan as nullish
        allowNullableEnum: false,
        allowAny: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],

    // activated those rules too late in the project. would be a massive work to fix for a course project
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-var-requires': 'off', // ! fixes import problems when using require
    '@typescript-eslint/restrict-template-expressions': 'warn', // prevents stringification in template literals of unstringable objects
    '@typescript-eslint/no-base-to-string': 'warn', // same as above
    '@typescript-eslint/no-unsafe-return': 'warn',
    // Wasn't simply allowing `const a = x.y.functionA`.
    '@typescript-eslint/unbound-method': 'warn',
    'no-unused-vars': 'off', // already have typescript rule
  },
};

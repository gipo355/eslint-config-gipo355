module.exports = {
    // plugins: ['security-node'],
    extends: [
        'plugin:node/recommended-module',
        // 'plugin:security-node/recommended',
    ],
    rules: {
        'node/no-missing-import': [
            'error',
            {
                // allowModules: [],
                // resolvePaths: ['/path/to/a/modules/directory'],
                tryExtensions: ['.js', '.json', '.ts', '.jsx', '.tsx', '.node'],
            },
        ],

        // from async suggestions at https://maximorlov.com/linting-rules-for-asynchronous-code-in-javascript/#1-no-async-promise-executor
        'node/no-sync': 'warn', // This rule disallows using synchronous methods from the Node.js core API where an asynchronous alternative exists.
        'node/handle-callback-err': 'warn', // This rule enforces error handling inside callbacks.
        'node/no-callback-literal': 'warn', // This rule enforces that a callback function is called with an Error object as the first parameter. In case there's no error, null or undefined are accepted as well.
    },
};

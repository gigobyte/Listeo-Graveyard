const path = require('path')

module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: 'module'
    },
    settings: {
        'import/resolver': {'webpack': {
            'config': path.resolve(__dirname, 'webpack.config.js')
        }}
    },
    extends: [
        'eslint:recommended',
        'plugin:fp/recommended',
        'plugin:import/errors',
        'plugin:react/recommended'
    ],
    plugins: [
        'fp',
        'import',
        'react'
    ],
    rules: {
        'react/prop-types': 0,
        'react/no-render-return-value': 0,
        'fp/no-rest-parameters': 0,
        'fp/no-mutation': [0, {commonjs: true}],
        'fp/no-unused-expression': 0
    }
}
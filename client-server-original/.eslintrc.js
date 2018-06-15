module.exports = {
    env: {
        browser: true,
        es6: true,
        mocha: true,
        node: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:import/errors", "plugin:import/warnings"],
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: "module"
    },
    settings: {
        "import/resolver": "webpack"
    },
    plugins: [
        "react",
        "import"
    ],
    rules: {
        "array-callback-return": "error",
        "arrow-parens": ["error", "always"],
        "camelcase": "error",
        "comma-dangle": ["error", "never"],
        "comma-spacing": ["error", {"before": false, "after": true}],
        "constructor-super": "error",
        "curly": ["error", "all"],
        "eqeqeq": "error",
        "import/no-unresolved": "error",
        "indent": ["error", 4],
        "linebreak-style": ["error", "windows"],
        "max-len": ["error", 130],
        "max-lines": ["error", 200],
        "max-nested-callbacks": ["error", 3],
        "max-params": ["error", 4],
        "new-parens": "error",
        "no-else-return": "error",
        "no-floating-decimal": "error",
        "no-inline-comments": "error",
        "no-multiple-empty-lines": "error",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-useless-escape": "error",
        "no-var": "error",
        "prefer-const": "error",
        "prefer-spread": "error",
        "quotes": ["error", "single"],
        "react/jsx-boolean-value": ["error", "never"],
        "react/no-set-state": "error",
        "react/no-unknown-property": "off",
        "react/prop-types": ["error", {skipUndeclared: true}],
        "react/self-closing-comp": ["error", {"component": true, "html": true}],
        "react/jsx-closing-bracket-location": "error",
        "react/jsx-space-before-closing": "error",
        "react/jsx-curly-spacing": ["error", "never"],
        "react/no-string-refs": "error",
        "semi": ["error", "never"],
    }
};

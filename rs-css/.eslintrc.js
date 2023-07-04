module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "ignorePatterns": [".eslintrc.js", "main.js", "webpack.config.js"],
    "rules": {
        "@typescript-eslint/no-explicit-any": 2,
        "@typescript-eslint/no-var-requires": 0,
    },
    "root": true,

}

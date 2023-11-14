module.exports = {
    "spec": "src/tsx/mocha/*.mocha.test.tsx",
    "require": [
        '@babel/register',
        'regenerator-runtime/runtime',
        'jsdom-global/register'
    ],
    "extension": ["tsx"]
}
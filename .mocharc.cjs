module.exports = {
    "spec": "src/js/mocha/*.mocha.test.js",
    require: [
        '@babel/register',
        'regenerator-runtime/runtime',
    ],
}
module.exports = {
    "spec": "src/js/mocha/*.mocha.test.js",
    "require": [
        '@babel/register',
        'regenerator-runtime/runtime',
    ],
    "reporter": "xunit",
    "reporter-option": [
        `output=reports/js-mocha-${(new Date()).getTime()}.xml`
    ]
}
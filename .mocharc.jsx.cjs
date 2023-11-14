module.exports = {
    "spec": "src/jsx/mocha/*.mocha.test.jsx",
    "require": [
        '@babel/register',
        'regenerator-runtime/runtime',
        'jsdom-global/register'
    ],
    "extension": ["jsx"],
    "reporter": "xunit",
    "reporter-option": [
        `output=reports/jsx-mocha-${(new Date()).getTime()}.xml`
    ]
}
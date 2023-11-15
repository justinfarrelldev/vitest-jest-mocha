module.exports = {
    "spec": "src/tsx/mocha/*.mocha.test.tsx",
    "require": [
        'ts-node/register',
        'jsdom-global/register'
    ],
    "extension": ["tsx"],
    "loader": "ts-node/esm",
    "reporter": "xunit",
    "reporter-option": [
        `output=reports/tsx-mocha-${(new Date()).getTime()}.xml`
    ]
}
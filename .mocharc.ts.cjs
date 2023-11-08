module.exports = {
    "spec": "src/ts/mocha/*.mocha.test.ts",
    "require": [
        'ts-node/register'
    ],
    "extension": ["ts"],
    "loader": "ts-node/esm"
}
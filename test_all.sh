#!/bin/bash

echo "Starting all tests to generate 10 reports for each variant, this will take a while..."

sleep 5

echo Removing current reports folder contents...

rm reports/*

echo Starting plain Javascript test runs...

for _ in {1..10}
do
    npm run jest
done

for _ in {1..10}
do
    npm run mocha
done

for _ in {1..10}
do
    npm run vitest
done

echo Starting Typescript test runs...

for _ in {1..10}
do
    npm run ts-jest
done

for _ in {1..10}
do
    npm run ts-mocha
done

for _ in {1..10}
do
    npm run ts-vitest
done

echo Starting Javascript React test runs...

for _ in {1..10}
do
    npm run jsx-jest
done

for _ in {1..10}
do
    npm run jsx-mocha
done

for _ in {1..10}
do
    npm run jsx-vitest
done

echo Starting Typescript React test runs...

for _ in {1..10}
do
    npm run tsx-jest
done

for _ in {1..10}
do
    npm run tsx-mocha
done

for _ in {1..10}
do
    npm run tsx-vitest
done
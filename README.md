# Comparison Between Vitest, Jest and Mocha

This repo serves as a testing ground for Vitest, Jest and Mocha. You can compare performance strategies with each.

# Running the Tests

Some tests are located within a "src" folder, some are outside of it (within a "test" folder). The ones in the "src" folder belong to Jest / Vitest and will have a ".jest" or ".vitest" added to their names. I have preferred the pattern "name.jest.test.ts" for simplicity. 

# Pain Points

While setting up for the plain JS Node tests, Jest required some extra work to get off the ground. These were largely caused by Jest not supporting ES Modules natively (you can see with the Jest tests I append "NODE_OPTIONS=--experimental-vm-modules" to aid this).

Also, while setting up for the plain JS React tests, Jest required the installation of Babel (specifically, babel-jest @babel/preset-env @babel/preset-react and react-test-renderer). This was to facilitate parsing of JSX syntax.

Vitest has an open bug (https://github.com/vitest-dev/vitest/issues/1430#issuecomment-1303724486) which prevents the DOM from being cleaned up by default with React Testing Library. This means if you don't manually run "cleanup" within one of your afterEach hooks, Vitest will append the new test DOM to your existing DOM (leading to many "found multiple elements with role" errors). 

Mocha requires you to install jsdom-global and require its register in your mocharc file, which is interesting. Jest also requires that you install jest-environment-jsdom, though this just requires that you set the testEnvironment to jsdom. Jest also gives you a handy warning - Mocha simply throws a syntax error. 

Mocha uses ts-node/esm for loading Typescript, which is interesting. Vitest supports TS out-of-the-box, and Jest uses either TS-Jest or Babel (in the case of these tests, I only bothered with TS-Jest).

Mocha also requires the plugin '@babel/plugin-transform-runtime' for TSX code (but not for TS code).

During the watch mode setup, it was found that Mocha does not support watch mode with ES Modules: https://mochajs.org/#current-limitations
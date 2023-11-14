# Comparison Between Vitest, Jest and Mocha

This repo serves as a testing ground for Vitest, Jest and Mocha. You can compare performance strategies with each.

# Running the Tests

Some tests are located within a "src" folder, some are outside of it (within a "test" folder). The ones in the "src" folder belong to Jest / Vitest and will have a ".jest" or ".vitest" added to their names. I have preferred the pattern "name.jest.test.ts" for simplicity. 

# Pain Points

While setting up for the plain JS Node tests, Jest required some extra work to get off the ground. These were largely caused by Jest not supporting ES Modules natively (you can see with the Jest tests I append "NODE_OPTIONS=--experimental-vm-modules" to aid this).

Also, while setting up for the plain JS React tests, Jest required the installation of Babel (specifically, babel-jest @babel/preset-env @babel/preset-react and react-test-renderer). This was to facilitate parsing of JSX syntax, which is unfortunate. 
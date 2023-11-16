# Comparison Between Vitest, Jest and Mocha

This repo serves as a testing ground for Vitest, Jest and Mocha. You can compare performance strategies with each using a single handy command on whichever machine you clone this to. 

# Possible Issues With My Methodology

There are a few schisms I can think of regarding these tests, however I am unsure if they affect anything. One such schism is that I use "assert" within Mocha's JS and TS tests. I used this because I had no knowledge of "expect" existing within Chai until I had already gotten to the JSX stage, however I forgot that this was something to change and have since collected the data to be used for my presentation. It would be interesting to see if there is any meaningful performance difference between "expect" and "assert" within Chai, although I would assume it would be almost negligible.

Another possible schism involves TS-Jest vs Babel with Jest. I am aware that you can transpile TS code with Babel and then run Jest on that code, however it is much more difficult to set up (in my experience) than TS-Jest, so I went with that. There may be some performance gains to be had with Jest if it uses Babel straight away rather than TS-Jest. 

# Running the Tests

All tests are located within the `src` folder. Under `src`, you will find `js`, `jsx`, `ts` and `tsx` folders. Each of these folders has a single file in the top-level directory (either named "addTwoNumbers" or "counter"). This file is the base file with the functions / components being tested. 

There are also other folders named "jest", "mocha" and "vitest" - these contain the test files.

I have preferred the pattern "name.jest.test.ts" for simplicity (where "jest" is the name of the testing framework). 

# Comparing Test Framework Performance

Make sure to run `nvm use` if you are using NVM. Otherwise, I have used Node v18.16.0 to run the various parts of this repo.

Use `npm install` to install dependencies.

To compare the performance of the various test frameworks against each other, run: 
```
npm run full-test
```

This will run all of the test framework permutations 10 times each, then average their speeds and output them.
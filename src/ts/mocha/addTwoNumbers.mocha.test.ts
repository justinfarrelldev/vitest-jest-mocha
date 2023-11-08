import mocha from "mocha";
import { addTwoNumbers } from "../addTwoNumbers.js";
import { assert } from "chai";

const TEST_NUM1: number = 2;
const TEST_NUM2: number = 2;
const TEST_NUM3: number = 5;
const TEST_NUM4: number = 4.5;
const TEST_NUM5: number = -3;

const TEST_RESULT1: number = 4;
const TEST_RESULT2: number = 9.5;
const TEST_RESULT3: number = -1;

mocha.describe(
  "addTwoNumbers - mocha (running ts with chai as an assertion library)",
  () => {
    mocha.it(
      `should add ${TEST_NUM1} and ${TEST_NUM2} and return ${TEST_RESULT1}`,
      () => {
        assert(
          addTwoNumbers(TEST_NUM1, TEST_NUM2) === TEST_RESULT1,
          `${addTwoNumbers(TEST_NUM1, TEST_NUM2)} !== ${TEST_RESULT1}`
        );
      }
    );
    mocha.it(
      `should add ${TEST_NUM3} and ${TEST_NUM4} and return ${TEST_RESULT2}`,
      () => {
        assert(
          addTwoNumbers(TEST_NUM3, TEST_NUM4),
          `${addTwoNumbers(TEST_NUM3, TEST_NUM4)} !== ${TEST_RESULT2}`
        );
      }
    );
    mocha.it(
      `should add ${TEST_NUM1} and ${TEST_NUM5} and return ${TEST_RESULT3}`,
      () => {
        assert(
          addTwoNumbers(TEST_NUM1, TEST_NUM5),
          `${addTwoNumbers(TEST_NUM1, TEST_NUM5)} !== ${TEST_RESULT3}`
        );
      }
    );
  }
);

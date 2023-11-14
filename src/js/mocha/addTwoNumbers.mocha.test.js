import { describe, it } from "mocha";
import { addTwoNumbers } from "../addTwoNumbers.js";
import { assert } from 'chai'

const TEST_NUM1 = 2;
const TEST_NUM2 = 2;
const TEST_NUM3 = 5;
const TEST_NUM4 = 4.5;
const TEST_NUM5 = -3;

const TEST_RESULT1 = 4;
const TEST_RESULT2 = 9.5;
const TEST_RESULT3 = -1;

describe('addTwoNumbers - mocha (with chai as an assertion library)', () => {
    it(`should add ${TEST_NUM1} and ${TEST_NUM2} and return ${TEST_RESULT1}`, () => {
        assert(addTwoNumbers(TEST_NUM1, TEST_NUM2) === TEST_RESULT1, `${addTwoNumbers(TEST_NUM1, TEST_NUM2)} !== ${TEST_RESULT1}`);
    })
    it(`should add ${TEST_NUM3} and ${TEST_NUM4} and return ${TEST_RESULT2}`, () => {
        assert(addTwoNumbers(TEST_NUM3, TEST_NUM4), `${addTwoNumbers(TEST_NUM3, TEST_NUM4)} !== ${TEST_RESULT2}`);
    })
    it(`should add ${TEST_NUM1} and ${TEST_NUM5} and return ${TEST_RESULT3}`, () => {
        assert(addTwoNumbers(TEST_NUM1, TEST_NUM5), `${addTwoNumbers(TEST_NUM1, TEST_NUM5)} !== ${TEST_RESULT3}`);
    })
})
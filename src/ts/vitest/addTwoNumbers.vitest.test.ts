import { addTwoNumbers } from "../addTwoNumbers";
import { describe, it, expect } from "vitest";

const TEST_NUM1: number = 2;
const TEST_NUM2: number = 2;
const TEST_NUM3: number = 5;
const TEST_NUM4: number = 4.5;
const TEST_NUM5: number = -3;

const TEST_RESULT1: number = 4;
const TEST_RESULT2: number = 9.5;
const TEST_RESULT3: number = -1;

describe.concurrent("addTwoNumbers - vitest (ts)", () => {
  it(`should add ${TEST_NUM1} and ${TEST_NUM2} and return ${TEST_RESULT1}`, () => {
    expect(addTwoNumbers(TEST_NUM1, TEST_NUM2)).toBe(TEST_RESULT1);
  });
  it(`should add ${TEST_NUM3} and ${TEST_NUM4} and return ${TEST_RESULT2}`, () => {
    expect(addTwoNumbers(TEST_NUM3, TEST_NUM4)).toBe(TEST_RESULT2);
  });
  it(`should add ${TEST_NUM1} and ${TEST_NUM5} and return ${TEST_RESULT3}`, () => {
    expect(addTwoNumbers(TEST_NUM1, TEST_NUM5)).toBe(TEST_RESULT3);
  });
});

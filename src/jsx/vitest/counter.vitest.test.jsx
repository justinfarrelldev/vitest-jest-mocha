import React from "react"; // this is necessary for Vitest, but not for Jest
import { act, render, screen, cleanup } from "@testing-library/react";
import { Counter, INITIAL_COUNT } from "../counter";
import { describe, it, expect, afterEach } from "vitest";

describe("counter - jest (react)", () => {
  afterEach(() => {
    // This is quite important, without these you will get strange subsequent test runs
    // where the cleanup will not be called and previous test cases will still be in
    // the DOM
    // Link to this issue: https://github.com/vitest-dev/vitest/issues/1430#issuecomment-1303724486
    cleanup();
  });
  it(`should initialize to ${INITIAL_COUNT}`, async () => {
    render(<Counter />);

    screen.debug();

    const heading = await screen.findByRole("heading");

    expect(heading.textContent).toBe(`Current Count: ${INITIAL_COUNT}`);
  });

  it(`should increase to 1 if the "+1" button is pressed`, async () => {
    render(<Counter />);

    const plusOneButton = await screen.findByRole("button", {
      name: "+1",
    });

    act(() => {
      plusOneButton.click();
    });

    const heading = await screen.findByRole("heading");

    expect(heading.textContent).toBe(`Current Count: 1`);
  });

  it(`should decrease to -1 if the "-1" button is pressed`, async () => {
    render(<Counter />);

    const plusOneButton = await screen.findByRole("button", {
      name: "-1",
    });

    act(() => {
      plusOneButton.click();
    });

    const heading = await screen.findByRole("heading");

    expect(heading.textContent).toBe(`Current Count: -1`);
  });
});

import React from "react"; // For some reason, Mocha does not seem to bring up the lack of this import
// until TS comes into play.
import { describe, it } from "mocha";
import { expect } from "chai";
import { act, render, screen } from "@testing-library/react";
import { Counter, INITIAL_COUNT } from "../counter";

describe("counter - mocha (react)", () => {
  it(`should initialize to ${INITIAL_COUNT}`, async () => {
    render(<Counter />);

    screen.debug();

    const heading = await screen.findByRole("heading");

    expect(heading.textContent).to.equal(`Current Count: ${INITIAL_COUNT}`);
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

    expect(heading.textContent).to.equal(`Current Count: 1`);
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

    expect(heading.textContent).to.equal(`Current Count: -1`);
  });
});

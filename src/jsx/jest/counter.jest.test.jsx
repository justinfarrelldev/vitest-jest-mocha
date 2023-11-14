import { act, render, screen } from "@testing-library/react";
import { expect, describe, it } from "@jest/globals";
import { Counter, INITIAL_COUNT } from "../counter";

describe("counter - jest (react)", () => {
  it(`should initialize to ${INITIAL_COUNT}`, async () => {
    render(<Counter />);

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

import React, { useState } from "react";

export const INITIAL_COUNT = 0;

export const Counter = () => {
  const [count, setCount] = useState(INITIAL_COUNT);

  return (
    <>
      <h1>{`Current Count: ${count}`}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -1
      </button>
    </>
  );
};

import React, { useReducer, useState } from "react";

function Ex1() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        state;
    }
  };
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p>Count: {state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default Ex1;

import { useContext, useEffect, useReducer, useState } from "react";
import { UserContext } from "./UserContext";

function TestReducer() {
  // const { name, city } = useContext(UserContext);

  // function reducer(state, action) {
  //   const { type } = action;
  //   switch (type) {
  //     case "increment": {
  //       const newCount = state.count + 1;
  //       const hasError = newCount > 5;

  //       return {
  //         ...state,
  //         count: hasError ? state.count : newCount,
  //         error: hasError ? "Maximum reached" : null,
  //       };
  //     }

  //     case "decrement": {
  //       const newCount = state.count - 1;
  //       const hasError = newCount < 0;

  //       return {
  //         ...state,
  //         count: hasError ? state.count : newCount,
  //         error: hasError ? "Minimum reached" : null,
  //       };
  //     }

  //     default:
  //       return state;
  //   }
  // }

  // const [state, dispatch] = useReducer(reducer, {
  //   count: 0,
  //   error: null,
  // });

  // return (
  //   <div>
  //     <h1>Count : {state.count}</h1>
  //     {state.error && <p style={{ color: "red" }}>{state.error}</p>}
  //     <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
  //     <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
  //   </div>
  // );

  function reducer(state, action) {
    const { type, payload } = action;
    switch (type) {
      case "increment": {
        return { ...state, count: state.count + state.step };
      }
      case "decrement": {
        return { ...state, count: state.count - state.step };
      }
      case "change_step": {
        return { ...state, step: payload };
      }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });

  return (
    <>
      <header>
        <h1>Counter</h1>
      </header>
      <main>
        <section className="counter">
          <p className="leading">{state.count}</p>
          <div className="actions">
            <button
              type="button"
              className="btn btn-circle"
              onClick={() => dispatch({ type: "increment" })}
            >
              +
            </button>
            <button
              type="button"
              className="btn btn-circle"
              onClick={() => dispatch({ type: "decrement" })}
            >
              -
            </button>
          </div>
        </section>

        <section className="counter-step">
          <label htmlFor="step">Step</label>
          <input
            id="step"
            type="range"
            min="1"
            max="10"
            value={state.step}
            onChange={(e) =>
              dispatch({
                type: "change_step",
                payload: parseInt(e.target.value),
              })
            }
          />
          <label>{state.step}</label>
        </section>
      </main>
    </>
  );
}

export default TestReducer;

import React, { useReducer } from "react";
const initialScores = [
  {
    id: 1,
    name: "volonte",
    score: 0,
  },

  {
    id: 2,
    name: "Salomon",
    score: 0,
  },
];
const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return state.map((player) =>
        player.id === action.id
          ? { ...player, score: player.score + 1 }
          : player,
      );
    case "decrease":
      return state.map((player) =>
        player.id === action.id
          ? { ...player, score: player.score - 1 }
          : player,
      );
    default:
      return state;
  }
};

function Test() {
  const [state, dispatch] = useReducer(reducer, initialScores);

  return (
    <div>
      {state.map((player) => (
        <div key={player.id}>
          <h1>Name: {player.name}</h1>
          <p>Score: {player.score}</p>
          <button onClick={() => dispatch({ type: "increase", id: player.id })}>
            Increase +
          </button>
          <button onClick={() => dispatch({ type: "decrease", id: player.id })}>
            Decrease -
          </button>
        </div>
      ))}
    </div>
  );
}

export default Test;

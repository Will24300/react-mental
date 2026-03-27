import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setTimeout(() => {
      setCount((prevC) => prevC + 1);
    }, 1000);
  }

  return <button onClick={handleClick}>Count: {count}</button>;
}

export default Counter;

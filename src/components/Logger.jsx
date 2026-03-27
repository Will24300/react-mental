import { useState, useEffect } from "react";

function Logger() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(count);
    }, 1000);

    return () => clearInterval(id);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}

export default Logger;

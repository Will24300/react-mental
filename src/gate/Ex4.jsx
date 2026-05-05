import React, { useState, useEffect } from "react";

function Ex4() {
  const initialNames = ["Alice", "Bob", "Charlie", "David", "Eve"];
  const [names, setNames] = useState(initialNames);
  const [transfered, setTransfered] = useState([]);

  useEffect(() => {
    if (names.length === 0) return;
    const timer = setInterval(() => {
      setNames((prev) => {
        const copy = [...prev];
        const shifted = copy.shift();
        setTransfered((prev) => [...prev, shifted]);

        return copy;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [names]);

  return (
    <div>
      <h3>Original Names</h3>

      <ul style={{ backgroundColor: "red" }}>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h3>Transferred Names</h3>
      <ul style={{ backgroundColor: "green" }}>
        {transfered.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ex4;

import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("🚀 Timer started!");

    // 1. Set up the side effect (the interval)
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
      console.log("Tick...");
    }, 1000);

    // 2. The RETURN function (the cleanup)
    return () => {
      clearInterval(intervalId); // Stops the timer
      console.log("🧹 Cleanup: Timer cleared!");
    };
  }, []); // Empty array means this runs once on mount

  return (
    <div
      style={{ background: "#f0f0f0", padding: "20px", borderRadius: "8px" }}
    >
      <h2>Time Elapsed: {seconds}s</h2>
      <p>Check the console to see the cleanup log!</p>
    </div>
  );
}

export default Timer;

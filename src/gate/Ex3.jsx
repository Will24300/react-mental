import React, { useState } from "react";

function Ex3() {
  // these are initialColors: ['gray','gray','gray','gray','gray']
  const initialColors = Array(5).fill("gray");
  const [buttonColors, setButtonColors] = useState(initialColors);
  const handleClick = (index) => {
    const newColors = [...buttonColors];
    newColors[index] = newColors[index] === "gray" ? "blue" : "gray";
    setButtonColors(newColors);
  };

  return (
    <div>
      {initialColors.map((color, index) => (
        <button
          key={index}
          style={{
            backgroundColor: buttonColors[index],
            padding: "10px",
            margin: "5px",
            border: "none",
          }}
          onClick={() => handleClick(index)}
        >
          Button {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Ex3;

import React, { useState } from "react";

// Sample data for cards
const cardsData = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the description for Card 1.",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the description for Card 2.",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the description for Card 3.",
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is the description for Card 4.",
  },
  {
    id: 5,
    title: "Card 5",
    description: "This is the description for Card 5.",
  },
  {
    id: 6,
    title: "Card 6",
    description: "This is the description for Card 6.",
  },
  //   {
  //     id: 7,
  //     title: "Card 7",
  //     description: "This is the description for Card 7.",
  //   },
  //   {
  //     id: 8,
  //     title: "Card 8",
  //     description: "This is the description for Card 8.",
  //   },
];

function Ex5() {
  const [endingNumber, setEndingNumber] = useState(5);
  const newCardData =
    cardsData.length > 4
      ? cardsData.filter((card) => card.id < endingNumber)
      : cardsData;

  return (
    <div>
      <div>
        {newCardData.map((card) => (
          <div
            key={card.id}
            style={{
              backgroundColor: "green",
              margin: "10px",
              padding: "10px",
              color: "white",
              borderRadius: "10px",
            }}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      {cardsData.length > 4 && (
        <div className="buttons">
          <button onClick={() => setEndingNumber(cardsData.length)}>
            Show More
          </button>
          <button onClick={() => setEndingNumber(5)}>Show Less</button>
        </div>
      )}
    </div>
  );
}

export default Ex5;

import React, { useState } from "react";
import "./styles.css";

var foodDictionary = {
  healthy: [
    { name: "Vegetables", rating: "4/5" },
    { name: "Grains", rating: "4/5" },
    { name: "Fruits", rating: "4.5/5" }
  ],
  shelfStable: [
    {
      name: "Milk Products",
      rating: "5/5"
    },
    {
      name: "Eggs",
      rating: "2.5/5"
    }
  ],
  fast: [
    {
      name: "Burger",
      rating: "3.5/5"
    },
    {
      name: "French Fries",
      rating: "4/5"
    }
  ]
};

var selectedFood = Object.keys(foodDictionary);

export default function App() {
  const [food, setFood] = useState("fast");
  function foodClickHandler(food) {
    setFood(food);
  }

  var buttonStyle = {
    cursor: "pointer",
    background: "#D1D5DB",
    borderRadius: "0.5rem",
    padding: "0.5rem",
    border: "1px solid black",
    margin: "1rem"
  };

  return (
    <div className="App center">
      <h1> 🍲 Good Food</h1>
      <p>Checkout my favorite foods. Select a food type</p>

      <div>
        {selectedFood.map(function (food) {
          return (
            <button onClick={() => foodClickHandler(food)} style={buttonStyle}>
              {food}
            </button>
          );
        })}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDictionary[food].map((foodType) => (
            <li
              key={foodType.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> {foodType.name} </div>
              <div style={{ fontSize: "smaller" }}> {foodType.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

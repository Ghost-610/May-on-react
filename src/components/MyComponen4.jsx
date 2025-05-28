import React, { useState } from "react";

function MyComponen4() {
  const [foods, setFoods] = useState(["Apple", "Mangoes", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods((f) => [...f, newFood]);
  }

  function handleRemoveFood(index  ) {

  }
  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((foods, index) => (
          <li key={index}>{foods}</li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food here" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default MyComponen4;

//updating a state of an array using react.

import React, { useState } from "react";

function MyComponen4() {
  const [foods, setFoods] = useState(["Apple", "Mangoes", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods((f) => [...f, newFood]);
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((__, i) => i !== index));
  }
  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((foods, index) => (
          <li key={index} onClick ={()=>handleRemoveFood(index)} >
            {foods}
            </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food here" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default MyComponen4;

//updating a state of an array using react.
// we've usde the updater function also to update the state of an array.and aslo we've used the filter method to remove the item from the array.
// we've used the map method to iterate over the array and display the items in the list.
// we've used the onClick event to remove the item from the array when clicked on it.
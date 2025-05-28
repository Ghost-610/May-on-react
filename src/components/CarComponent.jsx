import React, { useState } from "react";

function CarComponent() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };

    setCars((c) => [...c, newCar]);
   setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");     
  }
  function handleRemoveCar(index) {
   setCars(cars.filter((__, i) => i !== index)); 
  }

  function handleYearChange(event) {
    setCarYear(event.target.value);
  }
  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }
  function handleModelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h1>List of Car Objects</h1>
      <br />
      <ul>
        {cars.map((car, index) => (
          <li key={index } onClick={() => handleRemoveCar(index)}>
            <strong>Click to remove</strong> -
            {car.year}
            {car.make}
            {car.model}
          </li>
        ))}
      </ul>
      <br />
      <input
        type="number"
        value={carYear}
        onChange={handleYearChange}
      />{" "}
      <br />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter Car MAke..."
      />
      <br />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter Car Model..."
      />
      <br />
      <br />
      <button onClick={handleAddCar}> Add car</button>
    </div>
  );
}

export default CarComponent;

//This app renders and allow uswers to add their favourite cars and its model with the year!. done by ELORM BLACK on the 28th-May-2025.
import React, { useState } from "react";

function AddDestination() {
  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add Destination
    setNewCity("");
    setNewCountry();
  };
  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <div className="">
          <h4>Enter a new destination</h4>
          <div className="flex flex-col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a city.."
              onChange={(e) => setNewCity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a country.."
              onChange={(e) => setNewCountry(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <button className="rounded-2xl bg-blue-600">Add Destination</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddDestination;

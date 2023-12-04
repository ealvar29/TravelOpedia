import React from "react";

function AddDestination() {
  return (
    <div className="p-4">
      <form>
        <div className="">
          <h4>Enter a new destination</h4>
          <div className="flex flex-col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a city.."
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a country.."
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

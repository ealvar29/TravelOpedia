import React from "react";
import AddDestination from "./AddDestination";
import DestinationList from "./DestinationList";

function DestinationIndex() {
  return (
    <div className="">
      <h1 className="text-center text-green-300">TravelOPedia List</h1>
      <AddDestination />
      <DestinationList />
    </div>
  );
}

export default DestinationIndex;

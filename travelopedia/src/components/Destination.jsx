import React from "react";
import { useDeleteDestinationMutation } from "../api/destinationApi";

function Destination({ destination }) {
  const [deleteDestination] = useDeleteDestinationMutation();

  return (
    <article
      key={destination.id}
      className="flex flex-row justify-evenly mb-4 items-center"
    >
      <div className="text-center">
        {destination.city}, {destination.country}
      </div>
      <div className="">{destination.daysNeeded} days</div>
      <button
        className="rounded-3xl text-white bg-red-600 m-2"
        onClick={() => deleteDestination(destination.id)}
      >
        Delete
      </button>
    </article>
  );
}

export default Destination;

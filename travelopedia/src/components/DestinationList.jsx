import React from "react";
import {
  useDeleteDestinationMutation,
  useGetAllDestinationQuery,
} from "../api/destinationApi";
import { useDispatch } from "react-redux";

function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationQuery();
  const dispatch = useDispatch();
  const [deleteDestination] = useDeleteDestinationMutation();
  let content;
  if (isLoading) content = <p>Loading...</p>;
  else if (isSuccess) {
    content = data.map((destination) => {
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
    });
  } else if (isError) content = <p>{error}</p>;
  return <div className="pt-3 text-blue-300">{content}</div>;
}

export default DestinationList;

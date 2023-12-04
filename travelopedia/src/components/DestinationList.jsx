import React from "react";
import {
  destinationAPI,
  useGetAllDestinationQuery,
} from "../api/destinationApi";

function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationQuery();
  let content;
  console.log(isSuccess);
  if (isLoading) content = <p>Loading...</p>;
  else if (isSuccess) {
    content = data.map((destination) => {
      console.log(destination);
      return (
        <article key={destination.id}>
          <div className="text-center p-2">
            <div>
              {destination.city}, {destination.country} -{" "}
              {destination.daysNeeded} days
            </div>
          </div>
        </article>
      );
    });
  } else if (isError) content = <p>{error}</p>;
  return <div className="pt-3 text-blue-300">{content}</div>;
}

export default DestinationList;

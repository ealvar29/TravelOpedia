import React from "react";
import {
  useDeleteDestinationMutation,
  useGetAllDestinationQuery,
} from "../api/destinationApi";
import { useDispatch } from "react-redux";
import Destination from "./Destination";

function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationQuery();
  const dispatch = useDispatch();

  let content;
  if (isLoading) content = <p>Loading...</p>;
  else if (isSuccess) {
    content = data.map((destination) => {
      return <Destination destination={destination} key={destination.id} />;
    });
  } else if (isError) content = <p>{error}</p>;
  return <div className="pt-3 text-blue-300">{content}</div>;
}

export default DestinationList;

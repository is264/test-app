import React from "react";

export const ErrorMessage = (props) => {
  if (!props.message) return null;
  return <p className="text-red-600 text-sm mt-1">{props.message}</p>;
};

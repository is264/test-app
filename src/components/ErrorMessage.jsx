import React from "react";

export const ErrorMessage = (props) => {
  return (
    props.message && (
      <p className="text-red-600 text-sm mt-1">{props.message}</p>
    )
  );
};

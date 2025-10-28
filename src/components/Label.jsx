import React from "react";

export const Label = (props) => {
  return (
    <label htmlFor={props.htmlFor} className="w-[200px]">
      {props.text}
    </label>
  );
};

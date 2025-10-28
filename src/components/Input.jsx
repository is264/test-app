import React from "react";

export const Input = (props) => {
  return (
    <input
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChangeHandler}
      disabled={props.disabled}
      className="w-full p-4 border border-[#ccc] rounded-md"
    />
  );
};

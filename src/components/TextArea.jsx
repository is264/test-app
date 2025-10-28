import React from "react";

export const TextArea = (props) => {
  return (
    <textarea
      id={props.id}
      rows={props.rows}
      value={props.value}
      onChange={props.onChangeHandler}
      disabled={props.disabled}
      className="w-full p-4 border border-[#ccc] rounded-md"
    />
  );
};

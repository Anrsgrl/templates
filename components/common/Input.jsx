import React from "react";

const Input = ({ ...props }) => {
  return (
    <input
      placeholder="Find a repository..."
      className="py-1.5 px-3 w-full rounded-md text-xs outline-none bg-zinc-950 border-2 border-zinc-800"
      {...props}
    />
  );
};

export default Input;

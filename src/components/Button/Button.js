import React from "react";

function Button({ message = "First Button" }) {
  return (
    <button>
      <span>{message}</span>
    </button>
  );
}

export default Button;

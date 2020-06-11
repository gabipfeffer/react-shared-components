import React from "react";

import "./Button.pcss";

function Button({ message = "First Button" }) {
  return (
    <button className="button">
      <span>{message}</span>
    </button>
  );
}

export default Button;

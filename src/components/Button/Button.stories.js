import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./";

storiesOf("Buttons", module).add("Sample Button", () => {
  const component = <Button />;
  return component;
});

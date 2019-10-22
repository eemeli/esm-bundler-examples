import Foo from "foo";
import React from "react";

export const Bar = React.createElement(
  "div",
  null,
  React.createElement(Foo, null)
);
console.log(Bar);

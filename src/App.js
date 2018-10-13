import React from "react";
import { render } from "react-dom";
import HelloWorld from "./HelloWorld";

const App = () => (
  <>
    <HelloWorld />
  </>
);

render(<App />, document.getElementById("root"));

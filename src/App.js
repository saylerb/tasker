import React from "react";
import { render } from "react-dom";
import HelloWorld from "./helloWorld";

const App = () => (
  <>
    <HelloWorld />
  </>
);

render(<App />, document.getElementById("root"));
